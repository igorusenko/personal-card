import {Component, OnInit} from '@angular/core';
import {FooterComponent} from "../../layouts/footer/footer.component";
import {HeaderComponent} from "../../layouts/header/header.component";
import {ActivatedRoute, RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {animate, style, transition, trigger} from "@angular/animations";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    FooterComponent,
    HeaderComponent,
    RouterOutlet,
    RouterLink,
    NgForOf,
    RouterLinkActive
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit{

  navItems: Array<string> = [
    'ABOUT', 'EXPERIENCE', 'PROJECTS'
  ];
  activeRoute: string | null = '';
  constructor(private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.route.fragment.subscribe(fragment => {
      this.activeRoute = fragment;
    });
  }


  glowingCursor(event: any): void{
    let x = event.clientX || event.touches[0].clientX
    let y = event.clientY || event.touches[0].clientY

    document.documentElement.style.setProperty('--cursorX', x + 'px')
    document.documentElement.style.setProperty('--cursorY', y + 'px')
  }

}
