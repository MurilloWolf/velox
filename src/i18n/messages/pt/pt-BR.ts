import homePage from "./pages/home";
import sponsorsPage from "./pages/sponsors";
import privacyPage from "./pages/privacy";
import calendarPage from "./pages/calendar";
import infoPage from "./pages/info";
import header from "./layout/header";
import footer from "./layout/footer";
import common from "./layout/common";

const ptBR = {
  localeLabel: "Português (Brasil)",
  pages: {
    home: homePage,
    sponsors: sponsorsPage,
    privacy: privacyPage,
    calendar: calendarPage,
    info: infoPage,
  },
  home: homePage,
  sponsors: sponsorsPage,
  privacy: privacyPage,
  calendar: calendarPage,
  info: infoPage,
  layout: {
    header,
    footer,
    common,
  },
  calendar: {
    title: "Calendário de Eventos",
    subtitle: "Fique de olho nas próximas corridas",
  },
} as const;

export default ptBR;
