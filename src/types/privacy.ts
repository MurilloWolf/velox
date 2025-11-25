export type PrivacyBullet = {
  strong?: string;
  text?: string;
  note?: string;
};

export type PrivacySection = {
  id: string;
  title: string;
  paragraphs?: string[];
  bullets?: PrivacyBullet[];
  closing?: string;
};

export type PrivacyPageContent = {
  lastUpdate: string;
  hero: {
    title: string;
    subtitleLabel: string;
  };
  sections: PrivacySection[];
  contact: {
    email: {
      label: string;
      value: string;
    };
    instagram: {
      label: string;
      value: string;
      href: string;
    };
  };
  footer: string;
};
