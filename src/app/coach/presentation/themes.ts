export type CoachRootSection = "nutrition" | "training" | "prompts";

export type CoachThemeHeader = {
  container: string;
  title: string;
  button: string;
};

export type CoachThemeOverlays = {
  top: string;
  bottom: string;
};

export type CoachThemeHero = {
  wrapper: string;
  inner: string;
  label: string;
  heading: string;
  description: string;
  quickCard: string;
  quickHeading: string;
  quickText: string;
  bullets: string[];
};

export type CoachThemeSidebar = {
  container: string;
  inactive: string;
  hover: string;
  active: string;
  icon: string;
  divider: string;
  subtext: string;
  subHover: string;
  subActive: string;
};

export type CoachTheme = {
  header: CoachThemeHeader;
  overlays: CoachThemeOverlays;
  hero: CoachThemeHero;
  sidebar: CoachThemeSidebar;
};

export const SECTION_THEMES: Record<CoachRootSection, CoachTheme> = {
  nutrition: {
    header: {
      container:
        "border-[#1f5c32]/80 bg-gradient-to-r from-[#10301a]/90 via-[#174423]/80 to-[#1f5c32]/70",
      title: "text-[#d5fe46]",
      button: "hover:bg-[#1f5c32]/35 hover:text-[#d5fe46]",
    },
    overlays: {
      top: "bg-[radial-gradient(circle_at_top,_rgba(79,214,125,0.22),_rgba(3,7,18,0.92)_60%)]",
      bottom:
        "bg-[radial-gradient(circle_at_bottom,_rgba(213,254,70,0.18),_rgba(3,7,18,0)_65%)]",
    },
    hero: {
      wrapper:
        "border-[#1f5c32]/60 bg-gradient-to-br from-[#132c1c]/70 via-[#08160e]/60 to-[#0f3b26]/65 shadow-[0_20px_60px_-40px_rgba(19,82,42,0.85)]",
      inner: "bg-[#081910]/85",
      label: "border-[#4fd67d]/40 bg-[#4fd67d]/10 text-[#9bffbf]",
      heading: "text-[#d5fe46]",
      description: "text-[#c9f6db]",
      quickCard: "border-[#4fd67d]/35 bg-[#4fd67d]/12 text-[#d4ffe5]",
      quickHeading: "text-[#9bffbf]",
      quickText: "text-[#d4ffe5]",
      bullets: ["bg-[#d5fe46]", "bg-[#4fd67d]", "bg-[#9bffbf]"],
    },
    sidebar: {
      container:
        "border-r border-[#0f2919]/80 bg-[#06140d]/95 text-[#b7eccc] shadow-[0_25px_60px_-45px_rgba(16,48,26,0.6)]",
      inactive: "text-[#b7eccc]",
      hover: "hover:text-[#efffed]",
      active:
        "border-[#4fd67d]/45 bg-[#123923]/70 text-[#efffed] shadow-[0_15px_45px_-28px_rgba(79,214,125,0.6)]",
      icon: "text-[#8ee8b3]",
      divider: "border-[#0f2919]/60",
      subtext: "text-[#93d9b1]",
      subHover: "hover:text-[#efffed]",
      subActive: "text-[#d5fe46]",
    },
  },
  training: {
    header: {
      container:
        "border-[#9c3b00]/80 bg-gradient-to-r from-[#411700]/90 via-[#632300]/80 to-[#9c3b00]/70",
      title: "text-[#ff9448]",
      button: "hover:bg-[#ff8a3c]/20 hover:text-[#ffe0cc]",
    },
    overlays: {
      top: "bg-[radial-gradient(circle_at_top,_rgba(255,138,60,0.28),_rgba(3,7,18,0.9)_60%)]",
      bottom:
        "bg-[radial-gradient(circle_at_bottom,_rgba(255,166,86,0.2),_rgba(3,7,18,0)_65%)]",
    },
    hero: {
      wrapper:
        "border-[#9c3b00]/60 bg-gradient-to-br from-[#321205]/70 via-[#1a0904]/60 to-[#4a2008]/65 shadow-[0_20px_60px_-40px_rgba(156,59,0,0.8)]",
      inner: "bg-[#1c0d05]/85",
      label: "border-[#ff8a3c]/40 bg-[#ff8a3c]/10 text-[#ffbd85]",
      heading: "text-[#ff9448]",
      description: "text-[#ffd8c0]",
      quickCard: "border-[#ff8a3c]/30 bg-[#ff8a3c]/10 text-[#ffe1cc]",
      quickHeading: "text-[#ffbd85]",
      quickText: "text-[#ffe1cc]",
      bullets: ["bg-[#ff8a3c]", "bg-[#ffd166]", "bg-[#ffb347]"],
    },
    sidebar: {
      container:
        "border-r border-[#2f1306]/80 bg-[#1a0b04]/95 text-[#ffe1cc] shadow-[0_25px_60px_-45px_rgba(65,23,0,0.55)]",
      inactive: "text-[#ffe1cc]",
      hover: "hover:text-[#fff4eb]",
      active:
        "border-[#ff8a3c]/45 bg-[#4a2008]/70 text-[#fff4eb] shadow-[0_15px_40px_-28px_rgba(255,138,60,0.55)]",
      icon: "text-[#ff9448]",
      divider: "border-[#2f1306]/60",
      subtext: "text-[#ffcfad]",
      subHover: "hover:text-[#fff4eb]",
      subActive: "text-[#ff8a3c]",
    },
  },
  prompts: {
    header: {
      container:
        "border-[#0f2d52]/80 bg-gradient-to-r from-[#000c5a]/85 via-[#03143a]/80 to-[#052f3f]/70",
      title: "text-[#64a8ff]",
      button: "hover:bg-[#364ff2]/20 hover:text-[#d5fe46]",
    },
    overlays: {
      top: "bg-[radial-gradient(circle_at_top,_rgba(54,79,242,0.28),_rgba(3,7,18,0.85)_60%)]",
      bottom:
        "bg-[radial-gradient(circle_at_bottom,_rgba(213,254,70,0.18),_rgba(3,7,18,0)_65%)]",
    },
    hero: {
      wrapper:
        "border-[#0f2d52]/70 bg-gradient-to-br from-[#031a3a]/70 via-[#050a16]/60 to-[#052f3f]/65 shadow-[0_20px_60px_-40px_rgba(3,9,36,0.9)]",
      inner: "bg-[#030914]/85",
      label: "border-[#64a8ff]/40 bg-[#64a8ff]/10 text-[#9bc7ff]",
      heading: "text-[#64a8ff]",
      description: "text-[#d3e8ff]",
      quickCard: "border-[#64a8ff]/30 bg-[#64a8ff]/10 text-[#d3e8ff]",
      quickHeading: "text-[#9bc7ff]",
      quickText: "text-[#d3e8ff]",
      bullets: ["bg-[#364ff2]", "bg-[#64a8ff]", "bg-[#94c2ff]"],
    },
    sidebar: {
      container:
        "border-r border-[#0f2337]/80 bg-[#060a12]/95 text-[#cbd9ff] shadow-[0_25px_60px_-45px_rgba(3,18,40,0.9)]",
      inactive: "text-[#cbd9ff]",
      hover: "hover:text-white",
      active:
        "border-[#1c8cff]/60 bg-[#1c375e]/70 text-white shadow-[0_15px_45px_-28px_rgba(28,140,255,0.6)]",
      icon: "text-[#64a8ff]",
      divider: "border-[#0f2337]/60",
      subtext: "text-[#9fb7ff]",
      subHover: "hover:text-white",
      subActive: "text-[#64a8ff]",
    },
  },
};
