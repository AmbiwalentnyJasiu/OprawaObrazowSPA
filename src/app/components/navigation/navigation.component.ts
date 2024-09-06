import { Component, input } from '@angular/core';
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import {MatListItem, MatNavList} from "@angular/material/list";
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatNavList,
    MatListItem,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {
  title = input.required<string>()
  navItems = [
    {name: 'Listwy', path: 'frames'},
    {name: 'Klienci', path: 'clients'},
    {name: 'Zamówienia', path: 'orders'},
    {name: 'Dostawcy', path: 'suppliers'},
    {name: 'Dostawy', path: 'deliveries'},
  ]
}
