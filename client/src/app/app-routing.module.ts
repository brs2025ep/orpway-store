import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { ProductPageComponent } from './product-page/product-page.component';

const routes: Routes = [
  { path: 'products', loadChildren: () => import('./catalog/catalog.module').then(m => m.CatalogModule) },
  { path: 'products/:id', component: ProductPageComponent},
  { path: "checkout", component: CheckoutComponent, pathMatch: "full" },
  { path: "contact", component: ContactPageComponent, pathMatch: "full" },
  { path: "catalog", redirectTo: "products", pathMatch: "full" },
  { path: "produtos", redirectTo: "products", pathMatch: "full" },
  { path: "cart", redirectTo: "checkout", pathMatch: "full" },
  { path: "carrinho", redirectTo: "checkout", pathMatch: "full" },
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
