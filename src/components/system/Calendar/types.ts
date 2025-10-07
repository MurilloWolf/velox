export interface Event {
  id: string;
  title: string;
  date: Date;
  time: string;
  description: string;
  location: string;
  attendees: string[];
  link?: string;
  status?: string;
  distances?: string[];
}
