// Padronização das actions conforme playbook
export const AnalyticsActions = {
  // Actions padronizadas do playbook
  VIEW: "VIEW",
  CLICK: "CLICK",
  SUBMIT: "SUBMIT",
  FILTER: "FILTER",
  OPEN: "OPEN",
  CLOSE: "CLOSE",
  PURCHASE: "PURCHASE",

  // Manter para compatibilidade (deprecated - usar as padronizadas acima)
  PAGE_VIEW: "VIEW",
  BUTTON_CLICK: "CLICK",
  FORM_SUBMIT: "SUBMIT",
  CHAT_WIDGET_OPENED: "OPEN",
  CHAT_WIDGET_CLOSED: "CLOSE",
  ACCESS_FREE_CONTENT: "SUBMIT", // Form submit do conteúdo gratuito
  CHECKOUT_INTENT: "VIEW", // View do checkout step
  CHECKOUT_COMPLETED: "PURCHASE",
} as const;
