import { isDevMode } from '@angular/core';
import {createReducer, MetaReducer, on} from '@ngrx/store';
import {ExperienceState, ProjectsState} from "../../../interfaces/state.interface";
import {loadProjects, loadProjectsFailure, loadProjectsSuccess} from "../actions/projects.actions";

export const initialState: ProjectsState = {
  projects: {
    projectsData: [],
    loading: false,
    error: null
  },
};

export const projectsReducer = createReducer(
  initialState,
  on(loadProjects, state => ({ ...state, loading: true })),
  on(loadProjectsSuccess, (state, { projects }) => ({
    ...state,
    projectsData: projects,
    loading: false,
    error: null
  })),
  on(loadProjectsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  }))
);

export const metaReducers: MetaReducer<ProjectsState>[] = isDevMode() ? [] : [];
