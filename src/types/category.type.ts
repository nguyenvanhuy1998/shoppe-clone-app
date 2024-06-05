export interface Category {
  _id: string;
  name: string;
}
export type RatingStar = Category;
export interface PriceRange extends Category {
  min: number;
  max: number;
}
