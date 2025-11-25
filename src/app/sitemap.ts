import path from "node:path";
import fs from "node:fs";

import type { MetadataRoute } from "next";

import { buildCoachPresentation } from "@/app/coach/presentation/config";
import { getCoachContentByLocale } from "@/app/coach/presentation/content";
import { seo } from "@/lib/seo";
import { defaultLocale } from "@/i18n/config";

const { navigationSections } = buildCoachPresentation(
  getCoachContentByLocale(defaultLocale)
);

type RouteConfig = {
  path: string;
  searchParams?: Record<string, string>;
  file?: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
};

const baseRoutes: RouteConfig[] = [
  {
    path: "/",
    file: "src/app/page.tsx",
    priority: 1,
    changeFrequency: "weekly",
  },
  {
    path: "/calendar",
    file: "src/app/calendar/page.tsx",
    priority: 0.9,
    changeFrequency: "daily",
  },
  {
    path: "/coach",
    file: "src/app/coach/page.tsx",
    priority: 0.8,
    changeFrequency: "weekly",
  },
  {
    path: "/faq",
    file: "src/app/faq/page.tsx",
    priority: 0.6,
    changeFrequency: "monthly",
  },
  {
    path: "/info",
    file: "src/app/info/page.tsx",
    priority: 0.6,
    changeFrequency: "monthly",
  },
  {
    path: "/privacy",
    file: "src/app/privacy/page.tsx",
    priority: 0.4,
    changeFrequency: "yearly",
  },
  {
    path: "/sponsors",
    file: "src/app/sponsors/page.tsx",
    priority: 0.5,
    changeFrequency: "monthly",
  },
];

const coachSectionSourceFiles: Record<string, string> = {
  nutrition: "src/app/coach/presentation/content/nutrition/config.ts",
  training: "src/app/coach/presentation/content/training/config.ts",
  prompts: "src/app/coach/presentation/content/ai/config.ts",
};

const coachRoutes: RouteConfig[] = navigationSections.flatMap((section) => {
  const sectionFile =
    coachSectionSourceFiles[section.id] ?? "src/app/coach/page.tsx";

  const rootEntry: RouteConfig = {
    path: "/coach",
    searchParams: { section: section.id },
    file: sectionFile,
    priority: 0.7,
    changeFrequency: "weekly",
  };

  const subsectionEntries =
    section.subsections?.map((subsection) => {
      const subsectionRoot = subsection.id.split("-")[0] ?? section.id;
      const subsectionFile =
        coachSectionSourceFiles[subsectionRoot] ?? sectionFile;

      return {
        path: "/coach",
        searchParams: { section: subsection.id },
        file: subsectionFile,
        priority: 0.6,
        changeFrequency: "monthly",
      } satisfies RouteConfig;
    }) ?? [];

  return [rootEntry, ...subsectionEntries];
});

const buildUrl = (route: RouteConfig) => {
  const url = new URL(route.path, seo.siteUrl);
  if (route.searchParams) {
    for (const [key, value] of Object.entries(route.searchParams).sort(
      ([a], [b]) => a.localeCompare(b)
    )) {
      url.searchParams.set(key, value);
    }
  }
  return url.toString();
};

const getLastModified = (file?: string) => {
  if (!file) {
    return undefined;
  }

  try {
    const stats = fs.statSync(path.join(process.cwd(), file));
    return stats.mtime;
  } catch {
    return undefined;
  }
};

const buildEntry = (route: RouteConfig): MetadataRoute.Sitemap[number] => {
  const url = buildUrl(route);
  const lastModified = getLastModified(route.file);

  return {
    url,
    ...(lastModified ? { lastModified } : {}),
    changeFrequency: route.changeFrequency,
    priority: Number(route.priority.toFixed(2)),
  };
};

const orderedRoutes = [...baseRoutes, ...coachRoutes].sort((a, b) => {
  if (b.priority !== a.priority) {
    return b.priority - a.priority;
  }

  return buildUrl(a).localeCompare(buildUrl(b));
});

const sitemapEntries = (() => {
  const seen = new Set<string>();
  const entries: MetadataRoute.Sitemap[number][] = [];

  for (const route of orderedRoutes) {
    const entry = buildEntry(route);
    if (seen.has(entry.url)) {
      continue;
    }

    seen.add(entry.url);
    entries.push(entry);
  }

  return entries;
})();

export default function sitemap(): MetadataRoute.Sitemap {
  return sitemapEntries;
}
