export interface Event {
  id: string;
  title: string;
  date: Date;
  time: string;
  organization: string;
  location: string;
  attendees: string[];
  link?: string;
  status?: string;
  distances?: string[];
  promoImageUrl?: string;
  city: string;
  uf: string;
}
