import { Routes } from '@angular/router';
import {FramesListComponent} from "./components/frames-list/frames-list.component";
import {FramesFormComponent} from "./components/frames-form/frames-form.component";
import {OrdersListComponent} from "./components/orders-list/orders-list.component";
import {OrdersFormComponent} from "./components/orders-form/orders-form.component";
import {DeliveriesFormComponent} from "./components/deliveries-form/deliveries-form.component";
import {DeliveriesListComponent} from "./components/deliveries-list/deliveries-list.component";
import {SuppliersListComponent} from "./components/suppliers-list/suppliers-list.component";
import {SuppliersFormComponent} from "./components/suppliers-form/suppliers-form.component";
import {ClientsListComponent} from "./components/clients-list/clients-list.component";
import {ClientsFormComponent} from "./components/clients-form/clients-form.component";
import {AuthGuard} from "./guards/auth.guard";
import {LoginComponent} from "./components/login/login.component";

export const routes: Routes = [
  {path: 'login', component: LoginComponent, pathMatch: 'full'},
  {path: "frames", component: FramesListComponent, pathMatch: "full", canActivate: [AuthGuard]},
  {path: "frames/:id", component: FramesFormComponent, canActivate: [AuthGuard]},
  {path: "orders", component: OrdersListComponent, pathMatch: "full", canActivate: [AuthGuard]},
  {path: "orders/:id", component: OrdersFormComponent, canActivate: [AuthGuard]},
  {path: "deliveries", component: DeliveriesListComponent, pathMatch: "full", canActivate: [AuthGuard]},
  {path: "deliveries/:id", component: DeliveriesFormComponent, canActivate: [AuthGuard]},
  {path: "suppliers", component: SuppliersListComponent, pathMatch: "full", canActivate: [AuthGuard]},
  {path: "suppliers/:id", component: SuppliersFormComponent, canActivate: [AuthGuard]},
  {path: "clients", component: ClientsListComponent, pathMatch: "full", canActivate: [AuthGuard]},
  {path: "clients/:id", component: ClientsFormComponent, canActivate: [AuthGuard]},
];
