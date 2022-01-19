export interface AddResponse {
  value: number;
}
export interface MultiplyResponse {
  value: number;
}
export interface NumbersResponse {
  value: number;
  action: 'add' | 'multiply';
}
