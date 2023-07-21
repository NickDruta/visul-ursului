export interface ProductRecord {
  id: string;
  name: string;
  description: string;
  image: string;
  isAvailable?: boolean;
  isHot?: boolean;
}