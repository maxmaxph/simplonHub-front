export interface Store {
  id: number;
  name: string;
  phone: string;
  categories: any;
  comments: any;
  averageNote?: number | string;
  number: string | null;
  street: string | null;
  city: string | null;
  zip: string | null;
  web: string | null;
  map: string | null;
  description: string | null;
  user_id: number;
  picture_id: number | null;
}