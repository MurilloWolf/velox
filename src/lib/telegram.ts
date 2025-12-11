const BOT_BROWSER_URL = "https://web.telegram.org/a/#8475526575";
const SUPPORT_PHONE_NUMBER = "+5518997708504";
const SUPPORT_FALLBACK_URL = "https://t.me/+5518997708504";

const rawBotUrl = process.env.NEXT_PUBLIC_BOT_URL?.trim();
const rawBotId = process.env.NEXT_PUBLIC_BOT_ID?.trim();

const normalizeBotId = (id?: string) =>
  id?.replace(/^@/, "").replace(/^#/, "") || "8475526575";

const buildBotWebUrl = (baseUrl?: string, botId?: string) => {
  if (!baseUrl) return undefined;

  const normalizedId = normalizeBotId(botId);
  const url = baseUrl.replace(/\/$/, "");

  if (url.includes("#")) return `${url}${normalizedId}`;

  const separator = url.endsWith("/") ? "" : "/";
  return `${url}${separator}${normalizedId}`;
};

const BOT_ID = normalizeBotId(rawBotId);
const BOT_WEB_URL =
  buildBotWebUrl(rawBotUrl, rawBotId) ||
  `${BOT_BROWSER_URL.split("#")[0]}#${BOT_ID}`;
const BOT_TME_URL = `https://t.me/${BOT_ID}`;
const BOT_APP_URL = /^\d+$/.test(BOT_ID)
  ? `tg://user?id=${BOT_ID}`
  : `tg://resolve?domain=${BOT_ID}`;

export const TELEGRAM_BOT_WEB_URL = BOT_WEB_URL;

const TELEGRAM_LINKS = {
  bot: {
    appUrl: BOT_APP_URL,
    fallbackUrl: BOT_WEB_URL || BOT_TME_URL,
  },
  support: {
    appUrl: `tg://resolve?phone=${SUPPORT_PHONE_NUMBER}`,
    fallbackUrl: SUPPORT_FALLBACK_URL,
  },
  team: {
    appUrl: `tg://resolve?phone=${SUPPORT_PHONE_NUMBER}`,
    fallbackUrl: SUPPORT_FALLBACK_URL,
  },
} as const;

export type TelegramTarget = keyof typeof TELEGRAM_LINKS;

type TelegramLinkConfig = (typeof TELEGRAM_LINKS)[TelegramTarget];

type OpenTelegramOptions = {
  fallbackDelayMs?: number;
  openFallbackInNewTab?: boolean;
};

const isMobileDevice = () => {
  if (typeof navigator === "undefined") {
    return false;
  }

  return /android|iphone|ipad|ipod/i.test(navigator.userAgent);
};

const openInNewTab = (url: string) => {
  window.open(url, "_blank", "noopener,noreferrer");
};

const openInSameTab = (url: string) => {
  window.location.href = url;
};

const triggerFallback = (
  fallbackUrl: string,
  openInNewTabPreference?: boolean
) => {
  if (openInNewTabPreference === false) {
    openInSameTab(fallbackUrl);
    return;
  }

  openInNewTab(fallbackUrl);
};

export const openTelegramTarget = (
  target: TelegramTarget,
  options?: OpenTelegramOptions
) => {
  if (typeof window === "undefined") {
    return;
  }

  const { appUrl, fallbackUrl } = TELEGRAM_LINKS[target];
  const fallbackDelay = options?.fallbackDelayMs ?? 1200;

  if (!isMobileDevice()) {
    triggerFallback(fallbackUrl, options?.openFallbackInNewTab);
    return;
  }

  let hasNavigatedAway = false;

  const cleanup = () => {
    hasNavigatedAway = true;
    document.removeEventListener("visibilitychange", handleVisibilityChange);
    window.removeEventListener("pagehide", cleanup);
  };

  const handleVisibilityChange = () => {
    if (document.visibilityState === "hidden") {
      cleanup();
    }
  };

  document.addEventListener("visibilitychange", handleVisibilityChange);
  window.addEventListener("pagehide", cleanup, { once: true });

  const fallbackTimer = window.setTimeout(() => {
    if (!hasNavigatedAway) {
      triggerFallback(fallbackUrl, options?.openFallbackInNewTab);
    }
    cleanup();
  }, fallbackDelay);

  window.addEventListener(
    "focus",
    () => {
      window.clearTimeout(fallbackTimer);
      cleanup();
    },
    { once: true }
  );

  openInSameTab(appUrl);
};

export const getTelegramLink = (target: TelegramTarget): TelegramLinkConfig =>
  TELEGRAM_LINKS[target];

export { TELEGRAM_LINKS };
