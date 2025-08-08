import { Component } from '@angular/core';
import { FeaturedItemsComponent } from './featured-items/featured-items.component';
import { FooterComponent } from './footer/footer.component';
import { HeroBannerComponent } from './hero-banner/hero-banner.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { ShopByCategoryComponent } from './shop-by-category/shop-by-category.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroBannerComponent,
    FeaturedItemsComponent,
    ShopByCategoryComponent,
    NewsletterComponent,
    FooterComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {}
