import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './sandbok/dashboard/dashboard.component';
import { TablesComponent } from './sandbok/tables/tables.component';
import { FormsComponent } from './sandbok/forms/forms.component';
import { TypographyComponent } from './sandbok/typography/typography.component';
import { MapsComponent } from './sandbok/maps/maps.component';
import { NotificationsComponent } from './sandbok/notifications/notifications.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import { LoginComponent } from './Auth/login/login.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {path: 'dashboard', component: DashboardComponent ,canActivate:[AuthGuard] },
  {path: 'forms', component: FormsComponent},
  {path: 'tables', component: TablesComponent},
  {path: 'typography', component: TypographyComponent},
  {path: 'maps', component: MapsComponent},
  {path: 'notifications', component: NotificationsComponent},
  {path: 'addUser', component: AddUserComponent},
  {path: 'login', component: LoginComponent  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
    canActivate: [AuthGuard]
  },
  { path: 'auth', loadChildren: () => import('./Auth/auth.module').then(m => m.AuthModule) },
  { path: 'supplier', loadChildren: () => import('./supplier/supplier.module').then(m => m.SupplierModule) },
  { path: 'orders', loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule) },
  { path: 'secuirty', loadChildren: () => import('./secuirty/secuirty.module').then(m => m.SecuirtyModule) },
  
  { path: '**', redirectTo: '/dashboard' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule],
})
export class AppRoutingModule { }
