# 🎯 Guia de Tracking Frontend para Funil de Conversão

## 📋 Como Implementar o Tracking Estratégico

### **🎯 1. Funil de Conversão: Planilhas de Treino em /coach**

#### **Etapa 1: Acesso à Página Coach**

```typescript
// Quando o usuário acessa /coach
const { trackEvent } = useTrack();

useEffect(() => {
  trackEvent({
    action: "VIEW",
    targetType: "PAGE",
    pagePath: "/coach",
    targetId: "coach_landing",
  });
}, []);
```

#### **Etapa 2: Visualização de Seção Específica**

```typescript
// Quando usuário clica em uma seção (ex: treinos)
const handleSectionClick = (section: string) => {
  trackEvent({
    action: "VIEW",
    targetType: "SECTION",
    pagePath: `/coach?section=${section}`,
    targetId: section, // "training", "nutrition", "supplements"
  });
};
```

#### **Etapa 3: Interesse em Produto (Hover/Clique)**

```typescript
// Quando usuário mostra interesse em uma planilha
const handleProductInterest = (
  productId: string,
  action: "HOVER" | "CLICK"
) => {
  trackEvent({
    action: action,
    targetType: "PRODUCT",
    pagePath: "/coach",
    targetId: productId, // "planilha_treino_iniciante"
    props: {
      productCategory: "training_sheet",
      price: "97.00",
    },
  });
};
```

#### **Etapa 4: Início do Processo de Compra**

```typescript
// Quando usuário clica em "Comprar" ou "Saiba Mais"
const handleBuyClick = (productId: string) => {
  trackEvent({
    action: "CLICK",
    targetType: "BUTTON",
    pagePath: "/coach",
    targetId: `buy_${productId}`,
    props: {
      buttonText: "Comprar Agora",
      productId: productId,
    },
  });
};
```

#### **Etapa 5: Formulário de Compra**

```typescript
// Quando usuário chega na página de checkout
useEffect(() => {
  trackEvent({
    action: "VIEW",
    targetType: "PAGE",
    pagePath: "/checkout",
    targetId: "checkout_form",
  });
}, []);

// Quando usuário preenche campos
const handleFormInteraction = (fieldName: string) => {
  trackEvent({
    action: "INTERACT",
    targetType: "FORM_FIELD",
    pagePath: "/checkout",
    targetId: fieldName, // "email", "phone", "payment_method"
  });
};

// Quando usuário submete o formulário
const handleFormSubmit = (productId: string) => {
  trackEvent({
    action: "SUBMIT",
    targetType: "FORM",
    pagePath: "/checkout",
    targetId: "purchase_form",
    props: {
      productId: productId,
      formStep: "payment",
    },
  });
};
```

#### **Etapa 6: Compra Finalizada**

```typescript
// Quando compra é concluída com sucesso
const handlePurchaseSuccess = (purchaseData: any) => {
  trackEvent({
    action: "PURCHASE",
    targetType: "PRODUCT",
    pagePath: "/success",
    targetId: purchaseData.productId,
    purchaseId: purchaseData.purchaseId,
    props: {
      value: purchaseData.amount,
      currency: "BRL",
      paymentMethod: purchaseData.paymentMethod,
    },
  });
};
```

---

### **📱 2. Tracking de Redes Sociais e Links Externos**

#### **Links para Telegram**

```typescript
const handleTelegramClick = (context: string) => {
  trackEvent({
    action: "CLICK",
    targetType: "EXTERNAL_LINK",
    pagePath: window.location.pathname,
    targetId: "telegram_bot",
    props: {
      destination: "telegram",
      context: context, // "header", "footer", "coach_page", "contact"
      linkText: "Falar com Bot",
    },
  });
};

// Uso:
<a
  href="https://t.me/seu_bot"
  onClick={() => handleTelegramClick("coach_page")}
  target="_blank"
>
  💬 Conversar no Telegram
</a>;
```

#### **Links para Redes Sociais**

```typescript
const handleSocialClick = (platform: string, context: string) => {
  trackEvent({
    action: "CLICK",
    targetType: "SOCIAL_LINK",
    pagePath: window.location.pathname,
    targetId: platform, // "instagram", "youtube", "tiktok"
    props: {
      platform: platform,
      context: context,
      placement: "footer" // ou "header", "sidebar"
    }
  });
};

// Exemplos de uso:
<a onClick={() => handleSocialClick("instagram", "follow")}>
  📸 Instagram
</a>

<a onClick={() => handleSocialClick("youtube", "subscribe")}>
  📺 YouTube
</a>
```

#### **Tracking de Acesso a Seções Específicas**

```typescript
// Para medir interesse em diferentes áreas
const handleSectionAccess = (sectionName: string) => {
  trackEvent({
    action: "VIEW",
    targetType: "SECTION",
    pagePath: window.location.pathname,
    targetId: sectionName,
    props: {
      timeOnPage: Date.now() - pageLoadTime,
    },
  });
};

// Exemplos:
// Seção "Sobre Mim"
handleSectionAccess("about_coach");

// Seção "Depoimentos"
handleSectionAccess("testimonials");

// Seção "Contato"
handleSectionAccess("contact_section");
```

---

### **🎯 3. Implementação Prática por Componente**

#### **Página /coach Principal**

```typescript
import useTrack from "@/hooks/useTrack";

export default function CoachPage() {
  const { trackEvent } = useTrack();

  useEffect(() => {
    // Track page view
    trackEvent({
      action: "VIEW",
      targetType: "PAGE",
      pagePath: "/coach",
    });
  }, []);

  const products = [
    { id: "planilha_iniciante", name: "Planilha Iniciante", price: 67 },
    { id: "planilha_intermediario", name: "Planilha Intermediário", price: 97 },
    { id: "planilha_avancado", name: "Planilha Avançado", price: 127 },
  ];

  return (
    <div>
      <h1>Coach - Planilhas de Treino</h1>

      {products.map((product) => (
        <div
          key={product.id}
          onMouseEnter={() =>
            trackEvent({
              action: "HOVER",
              targetType: "PRODUCT",
              targetId: product.id,
              props: { price: product.price.toString() },
            })
          }
        >
          <h3>{product.name}</h3>
          <p>R$ {product.price}</p>

          <button
            onClick={() => {
              // Track button click
              trackEvent({
                action: "CLICK",
                targetType: "BUTTON",
                targetId: `buy_${product.id}`,
                props: {
                  productName: product.name,
                  price: product.price.toString(),
                  buttonType: "purchase_cta",
                },
              });

              // Redirect to checkout
              router.push(`/checkout?product=${product.id}`);
            }}
          >
            Comprar Agora
          </button>
        </div>
      ))}

      {/* Links Sociais */}
      <div className="social-links">
        <a
          href="https://t.me/seu_bot"
          onClick={() =>
            trackEvent({
              action: "CLICK",
              targetType: "EXTERNAL_LINK",
              targetId: "telegram_bot",
              props: { context: "coach_page" },
            })
          }
        >
          💬 Tire Dúvidas no Telegram
        </a>

        <a
          href="https://instagram.com/seu_perfil"
          onClick={() =>
            trackEvent({
              action: "CLICK",
              targetType: "SOCIAL_LINK",
              targetId: "instagram",
              props: { context: "coach_page" },
            })
          }
        >
          📸 Me Siga no Instagram
        </a>
      </div>
    </div>
  );
}
```

#### **Página de Checkout**

```typescript
export default function CheckoutPage() {
  const { trackEvent } = useTrack();
  const [formStep, setFormStep] = useState("contact");

  useEffect(() => {
    trackEvent({
      action: "VIEW",
      targetType: "PAGE",
      pagePath: "/checkout",
      targetId: "checkout_start",
    });
  }, []);

  const handleFormSubmit = async (formData: any) => {
    // Track form submission
    trackEvent({
      action: "SUBMIT",
      targetType: "FORM",
      pagePath: "/checkout",
      targetId: "purchase_form",
      props: {
        step: formStep,
        productId: formData.productId,
      },
    });

    try {
      const result = await processPurchase(formData);

      // Track successful purchase
      trackEvent({
        action: "PURCHASE",
        targetType: "PRODUCT",
        pagePath: "/checkout",
        targetId: formData.productId,
        purchaseId: result.purchaseId,
        props: {
          value: formData.amount,
          currency: "BRL",
        },
      });

      router.push("/success");
    } catch (error) {
      // Track failed purchase
      trackEvent({
        action: "ERROR",
        targetType: "PURCHASE",
        pagePath: "/checkout",
        targetId: "purchase_failed",
        props: {
          errorType: error.message,
        },
      });
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      {/* Form fields with individual tracking */}
      <input
        type="email"
        onFocus={() =>
          trackEvent({
            action: "FOCUS",
            targetType: "FORM_FIELD",
            targetId: "email_field",
          })
        }
        onBlur={() =>
          trackEvent({
            action: "BLUR",
            targetType: "FORM_FIELD",
            targetId: "email_field",
          })
        }
      />

      <button type="submit">Finalizar Compra</button>
    </form>
  );
}
```

---

### **📊 4. Eventos para Análise de Comportamento**

#### **Scroll Tracking (Engagement)**

```typescript
useEffect(() => {
  let maxScroll = 0;

  const handleScroll = throttle(() => {
    const scrollPercent = Math.round(
      (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
    );

    if (scrollPercent > maxScroll && scrollPercent % 25 === 0) {
      maxScroll = scrollPercent;
      trackEvent({
        action: "SCROLL",
        targetType: "PAGE",
        pagePath: window.location.pathname,
        targetId: `scroll_${scrollPercent}`,
        props: { scrollPercent: scrollPercent.toString() },
      });
    }
  }, 1000);

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);
```

#### **Time on Page**

```typescript
useEffect(() => {
  const startTime = Date.now();

  const trackTimeOnPage = () => {
    const timeSpent = Math.round((Date.now() - startTime) / 1000);
    trackEvent({
      action: "TIME_SPENT",
      targetType: "PAGE",
      pagePath: window.location.pathname,
      props: { seconds: timeSpent.toString() },
    });
  };

  // Track at 30s, 60s, 120s intervals
  const intervals = [30, 60, 120].map((seconds) =>
    setTimeout(trackTimeOnPage, seconds * 1000)
  );

  return () => intervals.forEach(clearTimeout);
}, []);
```

---

### **🎯 5. Resultados Esperados nas Métricas**

Com esse tracking implementado, você conseguirá:

#### **Funil de Conversão Coach:**

- **Page Views**: Quantas pessoas acessam /coach
- **Product Interest**: Hover/clique em produtos específicos
- **Purchase Intent**: Cliques em "Comprar"
- **Form Submissions**: Preenchimento do checkout
- **Purchases**: Compras finalizadas
- **Taxa de Conversão**: % que vai de view → purchase

#### **Análise de Canais:**

- **Telegram Clicks**: Quantos clicam para ir ao bot
- **Social Media**: Qual rede social tem mais tráfego
- **Context Analysis**: De onde vem mais conversões (coach, header, footer)

#### **Comportamento:**

- **Engagement**: Tempo na página, scroll depth
- **Drop-off Points**: Onde usuários abandonam o funil
- **Device Analysis**: Mobile vs Desktop performance

### **📈 Dashboard Insights:**

```
🎯 Funil Coach:
• 1.000 visualizações /coach
• 250 interessados em produtos (25%)
• 100 cliques em "Comprar" (10%)
• 30 formulários submetidos (3%)
• 15 compras finalizadas (1.5%)

📱 Canais Sociais:
• Telegram: 180 cliques (18% CTR)
• Instagram: 120 cliques (12% CTR)
• YouTube: 45 cliques (4.5% CTR)

🔍 Insights:
• Planilha Intermediário: 60% das compras
• Mobile: 70% do tráfego, 40% das conversões
• Maior abandono: Formulário de pagamento
```

Com essa implementação, você terá dados precisos para otimizar cada etapa do funil e maximizar conversões! 🚀
