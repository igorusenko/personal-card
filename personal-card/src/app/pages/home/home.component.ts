import {Component, HostListener, importProvidersFrom, OnInit} from '@angular/core';
import {FooterComponent} from "../../layouts/footer/footer.component";
import {HeaderComponent} from "../../layouts/header/header.component";
import {Router, RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {NgForOf} from "@angular/common";
import {MockDataService} from "../../core/services/mock/mock-data.service";
import {forkJoin, Observable} from "rxjs";
import {IExperience} from "../../core/interfaces/experience.interface";
import {IProject} from "../../core/interfaces/projects.interface";
import {ExperienceCardComponent} from "../../shared/experience-card/experience-card.component";
import {ProjectCardComponent} from "../../shared/project-card/project-card.component";
import {Store} from "@ngrx/store";
import {loadExperience} from "../../core/ngRx/experience/actions/experience-actions";
import {GlowingDirective} from "../../core/directives/glowing.directive";
import {ExperienceState, ProjectsState} from "../../core/interfaces/state.interface";
import {
  selectError,
  selectExperienceData,
  selectLoading
} from "../../core/ngRx/experience/selectors/experience-selector";
import {selectProjectsData} from "../../core/ngRx/projects/selectors/projects-selector";
import {loadProjects} from "../../core/ngRx/projects/actions/projects.actions";

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
    ProjectCardComponent,
    GlowingDirective,
  ],
  providers: [MockDataService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit{
  experienceData$: Observable<IExperience[]>;
  projectsData$: Observable<IProject[]>;

  experienceItems: Array<IExperience> = [];
  projectItems: Array<IProject> = [];
  activeExperience: number | null = null;
  activeProject: number | null = null;
  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    // this.updateFragment();
  }
  constructor(private router: Router,
              private experienceStore: Store<ExperienceState>,
              private projectsStore: Store<ProjectsState>,
  ) {
    this.experienceData$ = experienceStore.select(selectExperienceData);
    this.projectsData$ = projectsStore.select(selectProjectsData);
  }

  ngOnInit() {
    this.getExperience();
    this.getProjects();
  }

  getExperience(): void {
    this.experienceStore.dispatch(loadExperience());

    this.experienceData$.subscribe(experience => {
      this.experienceItems = experience;
    })
  }

  getProjects(): void {
    this.projectsStore.dispatch(loadProjects());

    this.projectsData$.subscribe(projects => {
      this.projectItems = projects;
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
