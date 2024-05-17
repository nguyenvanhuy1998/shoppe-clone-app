import axios, {AxiosError, HttpStatusCode} from 'axios';

// Sau khi kiểm tra có phải là lỗi axios error không
// chuyển đổi lỗi unknown thành lỗi AxiosError nhất định
export function isAxiosError<T>(error: unknown): error is AxiosError<T> {
  return axios.isAxiosError(error);
}

// Kiểm tra có phải lỗi 422 không
export function isAxiosUnprocessableEntityError<FormError>(
  error: unknown,
): error is AxiosError<FormError> {
  return (
    isAxiosError(error) &&
    error.response?.status === HttpStatusCode.UnprocessableEntity
  );
}
export function formatVND(value: number): string {
  return new Intl.NumberFormat('de-DE').format(value);
}
export function formatNumberToSocialStyle(num: number): string {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'm';
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'k';
  } else {
    return num.toString();
  }
}
