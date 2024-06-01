export interface RatingStar {
  _id: string;
  name: string;
  star: number;
}
export const ratingStars: RatingStar[] = [
  {
    _id: '1',
    name: 'Từ 1 sao',
    star: 1,
  },
  {
    _id: '2',
    name: 'Từ 2 sao',
    star: 2,
  },
  {
    _id: '3',
    name: 'Từ 3 sao',
    star: 3,
  },
  {
    _id: '4',
    name: 'Từ 4 sao',
    star: 4,
  },
  {
    _id: '5',
    name: '5 sao',
    star: 5,
  },
];
