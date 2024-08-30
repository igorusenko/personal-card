import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import {provideStore, StoreModule} from '@ngrx/store';
import {provideAnimations} from "@angular/platform-browser/animations";
import {EffectsModule} from "@ngrx/effects";
import {experienceReducer} from "./core/ngRx/experience/reducers/experience.reducer";
import {ExperienceEffects} from "./core/ngRx/experience/effects/experience-effects";
import {projectsReducer} from "./core/ngRx/projects/reducers/projects.reducer";
import {ProjectsEffects} from "./core/ngRx/projects/effects/projects-effects";

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), provideStore(), provideAnimations(),
    importProvidersFrom(StoreModule.forRoot({ experience: experienceReducer, projects: projectsReducer }), EffectsModule.forRoot([ExperienceEffects, ProjectsEffects]))
  ]
};
