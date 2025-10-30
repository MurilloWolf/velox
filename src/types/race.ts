export type RaceEvent = {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  link?: string;
  status?: string;
  distances?: string[];
};

export type RaceApiItem = {
  id: string;
  title: string;
  organization?: string;
  distances?: string[];
  date: string;
  location?: string;
  city?: string;
  state?: string;
  link?: string;
  time?: string | null;
  status?: string;
};

export type RaceApiResponse = {
  success: boolean;
  data?: RaceApiItem[];
};

export type FetchRacesResult =
  | { races: RaceEvent[]; error: null }
  | { races: null; error: string };
