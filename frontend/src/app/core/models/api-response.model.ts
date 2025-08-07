export interface ApiResponse<T> {
  success: boolean;
  timestamp: string;
  data: T;
}

export interface ProductsResponse {
  sent: any[];
  received: any[];
}
