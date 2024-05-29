export interface PriceRange {
  id: string;
  name: string;
  min: number;
  max: number;
}
export const priceRanges: PriceRange[] = [
  {
    id: '1',
    name: '0-100k',
    min: 0,
    max: 100,
  },
  {
    id: '2',
    name: '100-200k',
    min: 100,
    max: 200,
  },
  {
    id: '3',
    name: '200-300k',
    min: 200,
    max: 300,
  },
];
