import { createSelector } from '@ngrx/store';
import {ProjectsState, ProjectsStateModel} from "../../../interfaces/state.interface";

export const selectProjectsState = (state: ProjectsState) => state.projects;

export const selectProjectsData = createSelector(
  selectProjectsState,
  (state: ProjectsStateModel) => state.projectsData
);

export const selectLoading = createSelector(
  selectProjectsState,
  (state: ProjectsStateModel) => state.loading
);

export const selectError = createSelector(
  selectProjectsState,
  (state: ProjectsStateModel) => state.error
);
