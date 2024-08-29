import {IExperience} from "./experience.interface";
import {IProject} from "./projects.interface";

export interface AppState {
  experienceData: IExperience[],
  loading: boolean,
  error: null
}

export interface ProjectsState extends AppState{
  projects: Array<IProject>;
}
