# Teste de Checkout (Free + Stripe) End-to-End

Este guia descreve todos os passos para validar a jornada completa de compra — desde a preparação do ambiente até a confirmação de pagamento via Stripe e verificação do conteúdo entregue.

---

## 1. Pré-requisitos

- Node.js 18+ instalado.
- Conta Stripe com acesso ao modo **Test**.
- Stripe CLI (`brew install stripe` ou veja [documentação oficial](https://stripe.com/docs/stripe-cli)).
- Variáveis de ambiente para frontend e backend preenchidas.

### Variáveis necessárias

| Projeto | Arquivo sugerido | Variáveis obrigatórias |
|---------|------------------|------------------------|
| **Backend (`velox-api`)** | `.env.development` | <ul><li>`PORT=4000`</li><li>`DATABASE_URL=...`</li><li>`STRIPE_SECRET_KEY=sk_test_...`</li><li>`STRIPE_WEBHOOK_SECRET=` (preencher depois de iniciar o `stripe listen`)</li><li>`FRONTEND_BEARER_TOKEN=...`</li><li>`FRONTEND_BEARER_TOKEN_DEV=...`</li></ul> |
| **Frontend (`velox`)** | `.env.local` | <ul><li>`NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...`</li><li>`FRONTEND_BEARER_TOKEN_DEV=...` (igual ao backend)</li></ul> |

> ❗ Os tokens `FRONTEND_BEARER_TOKEN*` são usados para autenticar a chamada `/purchases/checkout` entre frontend e backend. Use valores iguais nos dois projetos.

---

## 2. Preparar Dependências

```bash
# Backend
cd /Users/murillowolfcavalheiro/dev/deploy/velox-api
npm install

# Frontend
cd /Users/murillowolfcavalheiro/dev/deploy/velox
npm install
```

---

## 3. Subir o Backend com Stripe Webhooks

1. **Inicie a API**:
   ```bash
   cd /Users/murillowolfcavalheiro/dev/deploy/velox-api
npm run dev
   ```

2. **Autentique o Stripe CLI** (uma vez por máquina):
   ```bash
   stripe login
   ```

3. **Escute webhooks** redirecionando para a API:
   ```bash
   stripe listen --forward-to localhost:4000/api/webhooks/stripe
   ```

   - A CLI exibirá um valor `whsec_...`. Atualize `STRIPE_WEBHOOK_SECRET` na `.env.development` do backend (se necessário, reinicie o servidor).
   - A cada evento `payment_intent.succeeded`, o backend confirmará a compra.

---

## 4. Subir o Frontend

```bash
cd /Users/murillowolfcavalheiro/dev/deploy/velox
npm run dev
```

Abra http://localhost:3000/coach e selecione um produto (free ou premium) no módulo de treinos.

---

## 5. Fluxo de Teste – Produto Gratuito

1. Escolha uma planilha marcada como **gratuita**.
2. Clique em “Acessar conteúdo”.
3. Informe nome e email válidos.
4. Confira se:
   - A requisição para `/api/purchases/checkout` retornou `success`.
   - Os links apresentados após a confirmação correspondem ao produto (Drive / Notion / PNG).
   - O backend registrou a compra com `isFree = true` e `status = PAID`.

---

## 6. Fluxo de Teste – Produto Premium (Stripe)

1. Selecione um produto pago e clique para comprar.
2. Preencha nome e email.
3. Escolha a aba **Cartão (Stripe)** e clique em “Continuar para pagamento”.
4. No formulário do Stripe Payment Element, use um cartão de teste:
   - Número: `4242 4242 4242 4242`
   - Validade: qualquer data futura (ex.: `12/34`)
   - CVC: `123`
   - CEP: qualquer valor
5. Clique em **Confirmar pagamento**.
6. Verifique:
   - Modal exibe confirmação com os links do produto.
   - Stripe CLI mostra `payment_intent.succeeded`.
   - Registro da compra no backend mudou para `status = PAID`, `paymentProvider = stripe`.

> ℹ️ Outros cenários de cartão (falha, autenticação, etc.) estão documentados em: https://stripe.com/docs/testing

---

## 7. Limpeza / Troubleshooting

- Para reiniciar o ciclo, remova o registro da compra no banco (via Prisma Studio ou script) e repita o fluxo.
- Se o webhook não atualizar o status:
  - Confirme `STRIPE_WEBHOOK_SECRET`.
  - Repare se o `stripe listen` está em execução e se o servidor backend loga o evento.
  - Verifique logs do backend em busca de erros ao processar `payment_intent.succeeded`.

---

## 8. Checklist Final

- [ ] Backend rodando (`npm run dev`).
- [ ] Stripe CLI ouvindo (`stripe listen --forward-to ...`).
- [ ] Variáveis de ambiente configuradas (tokens + chaves Stripe).
- [ ] Frontend no ar (`npm run dev` em `velox`).
- [ ] Compras free liberam os links imediatamente.
- [ ] Compras premium geram PaymentIntent, aceitam cartão de teste e exibem os materiais após confirmação.

Pronto! Assim você cobre ponta a ponta o fluxo de compra e garante que integrações, webhooks e UI estejam funcionando. Se surgir alguma inconsistência, utilize os logs em ambos os projetos e o dashboard do Stripe (Developers > Events / Payments) para investigar rapidamente.
