import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import {provideStore, StoreModule} from '@ngrx/store';
import {provideAnimations} from "@angular/platform-browser/animations";
import {EffectsModule, provideEffects} from "@ngrx/effects";
import {experienceReducer} from "./core/ngRx/experience/reducers/experience.reducer";
import {ExperienceEffects} from "./core/ngRx/experience/effects/experience-effects";

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), provideStore(), provideAnimations(),
    importProvidersFrom(StoreModule.forRoot({ experience: experienceReducer }), EffectsModule.forRoot([ExperienceEffects]))
  ]
};
