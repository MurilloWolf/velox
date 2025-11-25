const calendarPage = {
  hero: {
    title: "Calendário de Eventos",
    subtitle: "Fique de olho nas próximas corridas",
  },
  upcoming: {
    title: "Próximas Corridas",
    viewDetailsLabel: "Ver detalhes",
  },
  emptyState:
    "Nenhuma corrida encontrada para os próximos meses. Volte mais tarde para conferir novas atualizações.",
  errorState:
    "Não foi possível carregar as corridas agora. Tente novamente em alguns instantes.",
  calendarGrid: {
    weekdays: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
    viewMoreLabel: "Ver mais ({count})",
  },
  eventDetail: {
    registrationLabel: "Inscrições",
    distancesLabel: "Distâncias",
    addressLabel: "Endereço",
    viewOnMaps: "Ver no Maps",
    registrationClosed: "Inscrições encerradas",
    registrationButton: "Inscrever-se na Corrida",
    status: {
      OPEN: "Aberto",
      CLOSED: "Encerradas",
      COMING_SOON: "Em Breve",
      CANCELLED: "Evento Cancelado",
      UNKNOWN: "Status Desconhecido",
    },
  },
  listModal: {
    title: "Eventos do Dia",
  },
};

export default calendarPage;
