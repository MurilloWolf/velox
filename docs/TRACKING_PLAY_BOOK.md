# Guia de Instrumentação de Eventos (Website)

Este playbook padroniza como enviar eventos para a API de analytics. O objetivo é garantir que os dados enviados pelo front-end sejam consistentes o suficiente para permitir análises confiáveis (funnel, links mais clicados, engajamento por seção etc.).

## 1. Padrões Gerais (aplicar a todos os eventos)

- `channel`: sempre `WEBSITE` para eventos disparados no site.
- `action`: verbo em maiúsculas descrevendo a ação (`VIEW`, `CLICK`, `SUBMIT`, `FILTER`, `OPEN`, `CLOSE`, `PURCHASE`).
- `targetType`: entidade afetada em maiúsculas. Use os valores definidos abaixo para manter consistência.
- `targetId`: identificador estável (slug/ID) que permita agrupar os eventos depois.
- `pagePath`: rota atual (ex.: `/`, `/calendar`, `/coach`), sempre sem query string.
- `sessionId` e `deviceId`: obrigatórios para métricas de sessão/retorno. Gerar ambos no front e persistir (cookie/localStorage).
- `isMobile`: `true`/`false` com base no user-agent.
- `props`: JSON flat com chaves snake_case. Evite valores aninhados ou números em formato string.
  - Exemplos úteis: `link_text`, `link_href`, `section`, `race_name`, `plan_name`, `position`, `filter_name`, `filter_value`.

> **Boas práticas**
>
> - Dispare o evento imediatamente após a interação (não em batch).
> - Normalize strings para maiúsculas/minúsculas antes do envio.
> - Reaproveite `targetId` entre eventos relacionados (ex.: todas as interações de uma prova usam o mesmo `race:<slug>`).

## 2. Ações e Tipos Padronizados

| Cenário                          | action     | targetType        | Observações                                                        |
| -------------------------------- | ---------- | ----------------- | ------------------------------------------------------------------ |
| Page view                        | VIEW       | PAGE              | Usar `targetId` como slug da página (`home`, `calendar`, `coach`). |
| Exibição de seção                | VIEW       | SECTION           | Para blocos que entram na tela via scroll (opcional).              |
| Clique em CTA/botão              | CLICK      | BUTTON            | Adicionar `props.link_text` e `props.link_href` se for link.       |
| Clique em link de navegação      | CLICK      | LINK              | `targetId`: `nav:header:<slug>`, `nav:footer:<slug>` etc.          |
| Seleção de filtro                | FILTER     | FILTER            | `props.filter_name`, `props.filter_value`.                         |
| Abertura/fechamento de modal     | OPEN/CLOSE | MODAL             | `targetId`: `modal:<slug>`.                                        |
| Interação com card de prova      | CLICK      | CARD              | `targetId`: `race:<slug>`                                          |
| Visualização de detalhe de prova | VIEW       | RACE_EVENT        | Inclua `props.event_title`.                                        |
| Clique em link de inscrição      | CLICK      | RACE_REGISTRATION | `props.registration_link`, `targetId = race:<slug>`.               |
| Submissão de formulário          | SUBMIT     | FORM              | `targetId`: `form:<tipo>` (`form:lead`, `form:checkout`).          |
| Compra concluída                 | PURCHASE   | PRODUCT           | Usado no backend após finalizar pagamento.                         |

## 3. Mapa de Eventos por Área do Site

### 3.1 Navegação global (header/footer)

- **View da navegação sticky (opcional)**
  - `action`: `VIEW`
  - `targetType`: `SECTION`
  - `targetId`: `nav:header`
- **Clique em link do header**
  - `action`: `CLICK`
  - `targetType`: `LINK`
  - `targetId`: `nav:header:<slug>` (ex.: `nav:header:calendar`)
  - `props`: `{ link_text, link_href }`
- **Clique em link do footer**
  - Mesmo formato do header com prefixo `nav:footer`.
- **Clique em redes sociais**
  - `targetType`: `LINK`, `targetId`: `social:<plataforma>` (ex.: `social:instagram`)

### 3.2 Página inicial (`/`)

- **Page view**
  - `action`: `VIEW`, `targetType`: `PAGE`, `targetId`: `home`
- **Hero CTA ("Quero participar", etc.)**
  - `action`: `CLICK`, `targetType`: `BUTTON`, `targetId`: `hero:primary_cta`
- **Cards de highlights (próximas provas, artigos, planos)**
  - `action`: `CLICK`, `targetType`: `CARD`, `targetId`: `highlight:<slug>`
  - `props`: `{ section, position, link_href }`
- **Seções que entram em tela** (caso precise medir scroll)
  - `action`: `VIEW`, `targetType`: `SECTION`, `targetId`: `section:<slug>`

### 3.3 Calendário de Provas (`/calendar`)

- **Page view**
  - `action`: `VIEW`, `targetType`: `PAGE`, `targetId`: `calendar`
- **Aplicação/remoção de filtros**
  - `action`: `FILTER`, `targetType`: `FILTER`, `targetId`: `calendar:<filter>`
  - `props`: `{ filter_name, filter_value, active: true|false }`
- **Clique em card de prova**
  - `action`: `CLICK`, `targetType`: `CARD`, `targetId`: `race:<slug>`
  - `props`: `{ race_name, position }`
- **Abertura de modal/detalhe**
  - `action`: `OPEN`, `targetType`: `MODAL`, `targetId`: `modal:race_details`, `props`: `{ race_id, race_name }`

### 3.4 Detalhe da Prova / Modal

- **Visualização de detalhes**
  - `action`: `VIEW`, `targetType`: `RACE_EVENT`, `targetId`: `race:<slug>`
  - `props`: `{ race_name, distance, city }`
- **Clique em botão "Ver localização"**
  - `action`: `CLICK`, `targetType`: `RACE_LOCATION`, `targetId`: `race:<slug>`
  - `props`: `{ location_name }`
- **Clique em link de inscrição**
  - `action`: `CLICK`, `targetType`: `RACE_REGISTRATION`, `targetId`: `race:<slug>`
  - `props`: `{ registration_link, race_name, provider }`
- **Compartilhamento** (se existir botão)
  - `action`: `CLICK`, `targetType`: `BUTTON`, `targetId`: `race:<slug>:share`, `props`: `{ network }`

### 3.5 Funil Coach / Captura de Leads

- **Page view da landing do coach (`/coach`)**
  - `action`: `VIEW`, `targetType`: `PAGE`, `targetId`: `coach`
- **Clique em CTA de formulário**
  - `action`: `CLICK`, `targetType`: `BUTTON`, `targetId`: `coach:form_cta`
- **Exibição do formulário** (se for lazy-load)
  - `action`: `VIEW`, `targetType`: `FORM`, `targetId`: `form:coach`
- **Submissão do formulário**
  - `action`: `SUBMIT`, `targetType`: `FORM`, `targetId`: `form:coach`
  - `props`: `{ plan_selected, origin_section }`
- **Clique em depoimentos ou planos**
  - `action`: `CLICK`, `targetType`: `CARD`, `targetId`: `coach:testimonial:<slug>` ou `coach:plan:<slug>`

### 3.6 Loja / Checkout (intenção → pagamento aprovado)

1. **Listagem / página do produto**

   - `action`: `VIEW`, `targetType`: `PAGE`, `targetId`: `store` ou `product:<slug>`
   - Adicione `props`: `{ section: 'store', featured: boolean }` se houver destaques.

2. **Clique no CTA de compra**

   - `action`: `CLICK`, `targetType`: `BUTTON`, `targetId`: `product:<slug>:buy`
   - `props`: `{ price, currency, plan_name, position }`

3. **Checkout iniciado (primeiro paint do fluxo)**

   - `action`: `VIEW`, `targetType`: `CHECKOUT_STEP`, `targetId`: `checkout:customer_info`
   - `props`: `{ product_id, product_slug }`

4. **Formulário de dados preenchido**

   - `action`: `SUBMIT`, `targetType`: `FORM`, `targetId`: `checkout:customer_info`
   - `props`: `{ fields: ['name','email'], errors: false }`

5. **Seleção de meio de pagamento**

   - `action`: `CLICK`, `targetType`: `CHECKOUT_STEP`, `targetId`: `checkout:payment_method`
   - `props`: `{ provider: 'stripe' | 'pix' | ... }`

6. **Envio do pagamento (intent confirm/redirect)**

   - `action`: `SUBMIT`, `targetType`: `CHECKOUT_STEP`, `targetId`: `checkout:payment_submit`
   - `props`: `{ provider, payment_intent_id }`

7. **Pagamento aprovado / pedido criado**

   - (Front-end deve disparar após receber confirmação da API ou webhooks)
   - `action`: `PURCHASE`, `targetType`: `PRODUCT`, `targetId`: `product:<slug>`
   - `props`: `{ provider, amount, currency }`
   - `purchaseId`: `<id>` (quando disponível). **Esse evento não é emitido pelo backend** — garantir que o front envie via `/api/analytics/events`.

8. **Página de sucesso / recibo exibida**
   - `action`: `VIEW`, `targetType`: `PAGE`, `targetId`: `checkout:success`
   - `props`: `{ product_slug, provider }`

> ⚠️ Nenhum evento de checkout deve ser disparado automaticamente no backend. Somente o front envia cada etapa acima para manter o funil coerente e rastrear abandonos corretamente.

### 3.7 Conteúdo / Blog (se aplicável)

- **Page view**
  - `action`: `VIEW`, `targetType`: `PAGE`, `targetId`: `blog` ou `article:<slug>`
- **Clique em link dentro do artigo**
  - `action`: `CLICK`, `targetType`: `LINK`, `targetId`: `article:<slug>:link:<hash>`
  - `props`: `{ link_text, link_href }`
- **Compartilhamento**
  - `action`: `CLICK`, `targetType`: `BUTTON`, `targetId`: `article:<slug>:share`, `props`: `{ network }`
