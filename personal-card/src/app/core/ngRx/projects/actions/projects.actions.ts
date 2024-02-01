import {createAction, props} from "@ngrx/store";
import {IProject} from "../../../interfaces/projects.interface";

export const loadProjects = createAction('[Projects] Load Projects');
export const loadProjectsSuccess = createAction('[Projects] Load Projects Success', props<{projects: Array<IProject>}>());
export const loadProjectsFailure = createAction('[Projects] Load Projects Failure', props<{ error: any }>());
