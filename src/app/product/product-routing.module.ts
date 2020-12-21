import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { ProductListComponent } from "./product-list/product-list.component";

const productRoutes: Routes = [
    { 
      path: 'product', 
      component: ProductListComponent
    },
    { 
      path: 'product/:id', 
      component: ProductDetailComponent
    }
];
  
@NgModule({
    declarations: [
        ProductListComponent, 
        ProductDetailComponent
    ],
    imports: [
        RouterModule.forChild(productRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class ProductRoutingModule { 
  
}