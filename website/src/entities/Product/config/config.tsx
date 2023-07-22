export interface ProductRecord {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  isAvailable?: boolean;
  isHot?: boolean;
}