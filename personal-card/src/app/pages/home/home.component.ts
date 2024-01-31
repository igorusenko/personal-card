import {Component, HostListener, OnInit} from '@angular/core';
import {FooterComponent} from "../../layouts/footer/footer.component";
import {HeaderComponent} from "../../layouts/header/header.component";
import {ActivatedRoute, Router, RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {animate, style, transition, trigger} from "@angular/animations";
import {NgForOf} from "@angular/common";
import {MockDataService} from "../../core/services/mock/mock-data.service";
import {forkJoin} from "rxjs";
import {IExperience} from "../../core/interfaces/experience.interface";
import {IProject} from "../../core/interfaces/projects.interface";

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
  providers: [MockDataService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit{

  navItems: Array<any> = [
    {name: 'about', coord: 0},
    {name: 'experience', coord: 50},
    {name: 'projects', coord: 100}
  ];
  experienceItems: Array<IExperience> = [];
  projectItems: Array<IProject> = [];
  activeRoute: string | null = '';
  activeExperience: number | null = null;
  activeProject: number | null = null;
  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    this.updateFragment();
  }
  constructor(private route: ActivatedRoute, private dataService: MockDataService, private router: Router
  ) {

  }

  ngOnInit() {
    this.routeListener();
    this.getData();
  }

  routeListener(): void {
    this.route.fragment.subscribe(fragment => {
      this.activeRoute = fragment;
      if (fragment) {
        this.scrollTo(fragment);
      }
    });
  }

  getData(): void {
    forkJoin([this.dataService.getExperience(), this.dataService.getProjects()]).subscribe(x => {
      this.experienceItems = x[0];
      this.projectItems = x[1];
    })
  }


  glowingCursor(event: any): void{
    let x = event.clientX || event.touches[0].clientX;
    let y = event.clientY || event.touches[0].clientY;

    document.documentElement.style.setProperty('--cursorX', x + 'px');
    document.documentElement.style.setProperty('--cursorY', y + 'px');
  }

  scrollTo(fragment: string): void {
    try {
      const element = document.getElementById(fragment);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } catch (e) {
      console.error('Error scrolling to fragment:', e);
    }
  }

  updateFragment() {
    const sectionsArray = Array.from(document.querySelectorAll('[id]'));
    let activeSectionId = '';

    sectionsArray.filter(x => x.id !== 'ng-state').forEach(section => {
      const top = section.getBoundingClientRect().top;
      if (top >= 0 && top <= 100) {
        activeSectionId = section.id;
      }
    });

    if (activeSectionId) {
      this.router.navigate([], { fragment: activeSectionId, queryParamsHandling: 'merge' });
    }
  }
}
