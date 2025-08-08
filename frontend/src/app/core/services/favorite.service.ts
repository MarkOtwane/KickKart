import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class FavoriteService {
  private lovedProducts = new BehaviorSubject<any[]>([]);
  lovedProducts$ = this.lovedProducts.asObservable();

  toggleProduct(product: any) {
    const current = this.lovedProducts.value;
    const exists = current.find((p) => p.id === product.id);

    if (exists) {
      this.lovedProducts.next(current.filter((p) => p.id !== product.id));
    } else {
      this.lovedProducts.next([...current, product]);
    }
  }

  getLovedProducts() {
    return this.lovedProducts.value;
  }

  clearFavorites() {
    this.lovedProducts.next([]);
  }
}
