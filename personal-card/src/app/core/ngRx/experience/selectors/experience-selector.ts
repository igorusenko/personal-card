import { createSelector } from '@ngrx/store';
import {ExperienceState, ExperienceStateModel} from '../../../interfaces/state.interface';

export const selectExperienceState = (state: ExperienceState) => state.experience;

export const selectExperienceData = createSelector(
  selectExperienceState,
  (state: ExperienceStateModel) => state.experienceData
);

export const selectLoading = createSelector(
  selectExperienceState,
  (state: ExperienceStateModel) => state.loading
);

export const selectError = createSelector(
  selectExperienceState,
  (state: ExperienceStateModel) => state.error
);
