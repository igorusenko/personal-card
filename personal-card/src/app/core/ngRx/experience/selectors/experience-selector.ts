import { createSelector } from '@ngrx/store';
import {AppState, ExperienceState} from '../../../interfaces/state.interface';

export const selectExperienceState = (state: AppState) => state.experience;

export const selectExperienceData = createSelector(
  selectExperienceState,
  (state: ExperienceState) => state.experienceData
);

export const selectLoading = createSelector(
  selectExperienceState,
  (state: ExperienceState) => state.loading
);

export const selectError = createSelector(
  selectExperienceState,
  (state: ExperienceState) => state.error
);
