import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { CartSummaryPageComponent } from './pages/cart-summary-page/cart-summary-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ProductDetailsPageComponent } from './pages/product-details-page/product-details-page.component';
import { CheckoutPageComponent } from './pages/checkout-page/checkout-page.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';

const routes: Routes = [
  { path: 'products', loadChildren: () => import('./pages/catalog/catalog.module').then(m => m.CatalogModule) },
  { path: 'products/:id', component: ProductDetailsPageComponent},
  { path: "summary", component: CartSummaryPageComponent, pathMatch: "full" },
  {path: "checkout", component: CheckoutPageComponent, pathMatch: "full"},
  { path: "cart",  component: CartPageComponent, pathMatch: "full" },
  { path: "contact", component: ContactPageComponent, pathMatch: "full" },
  { path: "catalog", redirectTo: "products", pathMatch: "full" },
  { path: "produtos", redirectTo: "products", pathMatch: "full" },
  { path: "carrinho", redirectTo: "cart", pathMatch: "full" },
  { path: "contato", redirectTo: "contact", pathMatch: "full" },
  { path: "support", redirectTo: "contact", pathMatch: "full" },
  { path: "suporte", redirectTo: "contact", pathMatch: "full" },
  { path: "help", redirectTo: "contact", pathMatch: "full" },
  { path: "ajuda", redirectTo: "contact", pathMatch: "full" },
  { path: "", redirectTo: "products", pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
