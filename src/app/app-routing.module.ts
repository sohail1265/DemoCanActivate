import { Routes } from '@angular/router';
import { AuthGuardService } from './auth-guard.service'
import { ContactComponent } from './contact/contact.component'
import { HomeComponent } from './home/home.component'
import { LoginComponent } from './login/login.component'
import { ProductComponent } from './product/product.component'
 

 
export const appRoutes: Routes = [
  { path: 'product', component: ProductComponent, canActivate : [AuthGuardService] },
  { path: 'home', component: HomeComponent },
  { path: 'login', component:LoginComponent},
  { path: 'contact', component: ContactComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];