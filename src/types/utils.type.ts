import {IconSizes} from '../constants';

export interface SuccessResponse<Data> {
  message: string;
  data: Data;
}

export interface ErrorResponse<Data> {
  message: string;
  data?: Data;
}
export type IconSizeProps = {
  iconSizes: keyof typeof IconSizes;
};

// Cú pháp `-?` sẽ loại bỏ undefined của key optional
export type NoUndefinedFiled<T> = {
  [P in keyof T]-?: NoUndefinedFiled<NonNullable<T[P]>>;
};
