const BOT_BROWSER_URL = "https://web.telegram.org/a/#8475526575";
const SUPPORT_PHONE_NUMBER = "+5518997708504";
const SUPPORT_FALLBACK_URL = "https://t.me/+5518997708504";

const resolveConfiguredBotUrl = () => {
  if (process.env.NEXT_PUBLIC_BOT_URL) {
    const identifier = process.env.NEXT_PUBLIC_BOT_ID
      ? `#${process.env.NEXT_PUBLIC_BOT_ID}`
      : "";

    return `${process.env.NEXT_PUBLIC_BOT_URL}${identifier}`;
  }

  return BOT_BROWSER_URL;
};

export const TELEGRAM_BOT_WEB_URL = resolveConfiguredBotUrl();

const TELEGRAM_LINKS = {
  bot: {
    appUrl: TELEGRAM_BOT_WEB_URL,
    fallbackUrl: TELEGRAM_BOT_WEB_URL,
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
