import { createAction, props } from '@ngrx/store';
import { IExperience } from '../../../interfaces/experience.interface';

export const loadExperience = createAction('[Experience] Load Experience');

export const loadExperienceSuccess = createAction(
  '[Experience] Load Experience Success',
  props<{ experience: IExperience[] }>()
);

export const loadExperienceFailure = createAction(
  '[Experience] Load Experience Failure',
  props<{ error: any }>()
);
