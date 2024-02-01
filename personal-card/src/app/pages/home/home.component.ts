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
import {ExperienceCardComponent} from "../../shared/experience-card/experience-card.component";
import {ProjectCardComponent} from "../../shared/project-card/project-card.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    FooterComponent,
    HeaderComponent,
    RouterOutlet,
    RouterLink,
    NgForOf,
    RouterLinkActive,
    ExperienceCardComponent,
    ProjectCardComponent
  ],
  providers: [MockDataService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit{
  experienceItems: Array<IExperience> = [];
  projectItems: Array<IProject> = [];
  activeExperience: number | null = null;
  activeProject: number | null = null;
  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    // this.updateFragment();
  }
  constructor(private dataService: MockDataService, private router: Router
  ) {

  }

  ngOnInit() {
    this.getData();
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

  updateFragment() {
    const sectionsArray = Array.from(document.querySelectorAll('[id]'));
    let activeSectionId = '';

    sectionsArray.filter(x => x.id !== 'ng-state').forEach(section => {
      const top = section.getBoundingClientRect().top;
      if (top >= 0 && top <= 100) {
        activeSectionId = section.id;
        console.log(section.id)
      }
    });

    if (activeSectionId) {
      this.router.navigate([], { fragment: activeSectionId, queryParamsHandling: 'merge' });
    }
  }

  protected readonly Boolean = Boolean;
}
