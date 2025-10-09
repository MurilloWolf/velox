import { cn } from "@/lib/utils";

import type { CoachTheme } from "../presentation/themes";
import type { PanelContent } from "../presentation/types";

type PanelProps = {
  theme: CoachTheme;
  content: PanelContent;
};

export default function Panel({ theme, content }: PanelProps) {
  const { label, title, description, highlights } = content;
  const highlightItems = highlights?.items ?? [];
  const hasHighlights = highlightItems.length > 0;

  return (
    <div
      className={cn(
        "mb-8 overflow-hidden rounded-3xl border p-1",
        theme.hero.wrapper
      )}
    >
      <div
        className={cn(
          "flex flex-col justify-between gap-6 rounded-[calc(theme(borderRadius.3xl)-0.5rem)] px-6 py-6 md:flex-row md:items-center",
          theme.hero.inner
        )}
      >
        <div>
          {label && (
            <span
              className={cn(
                "inline-flex items-center gap-3 rounded-full border px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em]",
                theme.hero.label
              )}
            >
              {label}
            </span>
          )}
          <h2 className={cn("mt-2 text-2xl font-semibold", theme.hero.heading)}>
            {title}
          </h2>
          {description && (
            <p className={cn("mt-2 max-w-xl text-sm", theme.hero.description)}>
              {description}
            </p>
          )}
        </div>
        {hasHighlights && (
          <div
            className={cn(
              "flex w-full max-w-xs flex-col gap-3 rounded-2xl border p-4 text-sm",
              theme.hero.quickCard
            )}
          >
            {highlights?.title && (
              <span className={cn("font-semibold", theme.hero.quickHeading)}>
                {highlights.title}
              </span>
            )}
            <ul className={cn("space-y-2", theme.hero.quickText)}>
              {highlightItems.map((item, index) => (
                <li key={item} className="flex items-center gap-2">
                  <span
                    className={cn(
                      "inline-flex h-2 w-2 rounded-full",
                      theme.hero.bullets[index] ?? theme.hero.bullets[0]
                    )}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
