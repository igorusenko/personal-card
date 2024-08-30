import { isDevMode } from '@angular/core';
import {createReducer, MetaReducer, on} from '@ngrx/store';
import {ExperienceState} from "../../../interfaces/state.interface";
import {loadExperience, loadExperienceFailure, loadExperienceSuccess} from "../actions/experience-actions";

export const initialState: ExperienceState = {
  experience: {
      experienceData: [],
      loading: false,
      error: null
  },
};

export const experienceReducer = createReducer(
  initialState,
  on(loadExperience, state => ({ ...state, loading: true })),
  on(loadExperienceSuccess, (state, { experience }) => ({
    ...state,
    experienceData: experience,
    loading: false,
    error: null
  })),
  on(loadExperienceFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  }))
);

export const metaReducers: MetaReducer<ExperienceState>[] = isDevMode() ? [] : [];
