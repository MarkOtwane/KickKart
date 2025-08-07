import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ProductsService } from '../../core/services/products.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
})
export class AdminCreateProductComponent {
  productForm: FormGroup;
  loading = false;
  error = '';
  success = '';

  categories = ['CLOTHING', 'SHOES', 'BAGS', 'JEWELRY', 'ACCESSORIES'];

  constructor(
    private fb: FormBuilder,
    private productsService: ProductsService,
    private router: Router
  ) {
    this.productForm = this.fb.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      image: ['', [Validators.required]], // Assume it's a URL string
      category: ['', [Validators.required]],
      price: ['', [Validators.required, Validators.min(0)]],
      brand: ['', [Validators.required]],
      size: ['', [Validators.required]],
      stock: ['', [Validators.required, Validators.min(0)]],
    });
  }

  async onSubmit() {
    console.log('Form value:', this.productForm.value);
    console.log('Form valid:', this.productForm.valid);

    if (this.productForm.invalid) {
      this.error = 'Please fill all required fields correctly.';
      return;
    }

    this.loading = true;
    this.error = '';
    this.success = '';

    const rawData = { ...this.productForm.value };

    try {
      const product = await this.productsService.createProduct(rawData);
      this.success = 'Product created successfully! Redirecting...';
      setTimeout(() => {
        this.router.navigate(['/products']);
      }, 2000);
    } catch (error: any) {
      console.error('Product creation error:', error);
      if (typeof error === 'string') {
        this.error = error;
      } else if (error?.error?.message?.message) {
        this.error = error.error.message.message;
      } else if (error?.error?.message) {
        this.error = error.error.message;
      } else if (error?.message) {
        this.error = error.message;
      } else {
        this.error = 'Failed to create product. Please try again.';
      }
    } finally {
      this.loading = false;
    }
  }
}
