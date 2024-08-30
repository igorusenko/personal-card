import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {MockDataService} from "../../../services/mock/mock-data.service";
import {loadExperience, loadExperienceFailure, loadExperienceSuccess} from "../actions/experience-actions";
import {catchError, map, of, switchMap} from "rxjs";

@Injectable()
export class ExperienceEffects {
  constructor(
    private actions$: Actions,
    private mockDataService: MockDataService
  ) {}

  loadExperience$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadExperience),
      switchMap(() =>
        this.mockDataService.getExperience().pipe(
          map(experience => loadExperienceSuccess({ experience })),
          catchError(error => of(loadExperienceFailure({ error })))
        )
      )
    )
  );
}
