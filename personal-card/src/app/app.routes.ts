import { Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {WelcomeComponent} from "./pages/welcome/welcome.component";

export const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'welcome', component: WelcomeComponent},
  {path: '', redirectTo: 'welcome', pathMatch: 'full'}
];
