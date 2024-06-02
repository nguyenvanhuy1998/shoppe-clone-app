export interface Category {
  _id: string;
  name: string;
}
export interface RatingStar extends Category {
  star: number;
}
export interface PriceRange extends Category {
  min: number;
  max: number;
}
