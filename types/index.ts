export interface Tower {
  id: string;
  name: string;
  description: string;
  floors: number;
  color: string;
  image: string;
}

export interface Floor {
  id: string;
  number: number;
  towerId: string;
  apartments: Apartment[];
}

export type Status = "available" | "sold" | "reserved";

export interface Apartment {
  id: string;
  floorId: string;
  unit: string;
  type: string;
  area: number;
  rooms: number;
  bathrooms: number;
  price: number;
  thumbnail: string;
  layoutImage: string;
  features: string[];
  status: Status;
}

export type ViewType = "towers" | "floors" | "apartments" | "apartment-detail";
