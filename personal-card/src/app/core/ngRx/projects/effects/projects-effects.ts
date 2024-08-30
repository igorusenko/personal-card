import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {MockDataService} from "../../../services/mock/mock-data.service";
import {catchError, map, of, switchMap} from "rxjs";
import {loadProjects, loadProjectsFailure, loadProjectsSuccess} from "../actions/projects.actions";

@Injectable()
export class ProjectsEffects {
  constructor(
    private actions$: Actions,
    private mockDataService: MockDataService
  ) {}

  loadProjects$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadProjects),
      switchMap(() =>
        this.mockDataService.getProjects().pipe(
          map(projects => loadProjectsSuccess({ projects })),
          catchError(error => of(loadProjectsFailure({ error })))
        )
      )
    )
  );
}
