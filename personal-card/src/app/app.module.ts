import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ExperienceEffects} from "./core/ngRx/experience/effects/experience-effects";
import {provideStore, StoreModule} from "@ngrx/store";
import {experienceReducer} from "./core/ngRx/experience/reducers/experience.reducer";
import {EffectsModule} from "@ngrx/effects";
import {provideRouter} from "@angular/router";
import {routes} from "./app.routes";
import {provideClientHydration} from "@angular/platform-browser";
import {provideAnimations} from "@angular/platform-browser/animations";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot({ experience: experienceReducer }),
    EffectsModule.forRoot([ExperienceEffects])
  ],
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideStore(),
    provideAnimations(),
  ]
})
export class AppModule { }
