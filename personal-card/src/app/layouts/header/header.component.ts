import { Component } from '@angular/core';
import {animate, style, transition, trigger} from "@angular/animations";
import {NgForOf} from "@angular/common";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {INav} from "../../core/interfaces/nav.interface";
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  navItems: Array<INav> = [
    {name: 'about', coord: 0},
    {name: 'experience', coord: 50},
    {name: 'projects', coord: 100}
  ];
  activeScrolling: boolean = true;
  activeRoute: string | null = '';
  constructor(private route: ActivatedRoute) {
    this.routeListener();
  }

  routeListener(): void {
    this.route.fragment.subscribe(fragment => {
      this.activeRoute = fragment;
      if (fragment) {
        this.scrollTo(fragment);
      }
    });
  }
  scrollTo(fragment: string): void {
    try {
      const element = document.getElementById(fragment);
      if (element) {
        this.activeScrolling = false;
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } catch (e) {
      console.error('Error scrolling to fragment:', e);
    }
  }
}
