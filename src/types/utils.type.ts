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
