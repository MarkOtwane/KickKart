import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { environment } from '../../../../enviroment/enviroment';
import { ApiResponse } from '../models/api-response.model';
const API = environment.apiUrl;

@Injectable({ providedIn: 'root' })
export class ProductsService {
  constructor(private http: HttpClient) {}

  // GET all products
  async getAllProducts(): Promise<any[]> {
    const response = await firstValueFrom(
      this.http.get<ApiResponse<any[]>>(`${API}/products`)
    );
    return response.data;
  }

  // GET product by ID
  async getProductById(id: string): Promise<any> {
    const response = await firstValueFrom(
      this.http.get<ApiResponse<any>>(`${API}/products/${id}`)
    );
    return response.data;
  }

  // POST create new product
  async createProduct(data: any): Promise<any> {
    const response = await firstValueFrom(
      this.http.post<ApiResponse<any>>(`${API}/products/create`, data)
    );
    return response.data;
  }

  // PATCH update product
  async updateProduct(productId: string, data: any): Promise<any> {
    const response = await firstValueFrom(
      this.http.patch<ApiResponse<any>>(`${API}/products/${productId}`, data)
    );
    return response.data;
  }

  // DELETE product
  async deleteProduct(productId: string): Promise<any> {
    const response = await firstValueFrom(
      this.http.delete<ApiResponse<any>>(`${API}/products/${productId}`)
    );
    return response.data;
  }

  // Static dropdown categories (based on Prisma enum)
  getCategoryOptions(): string[] {
    return ['CLOTHING', 'SHOES', 'BAGS', 'JEWELRY', 'ACCESSORIES'];
  }
}
