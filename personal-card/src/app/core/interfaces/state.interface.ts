import {IExperience} from "./experience.interface";
import {IProject} from "./projects.interface";

export interface AppState {
  loading: boolean;
  error: any;
}

export interface ExperienceState extends AppState{
  experience: Array<IExperience>;
}

export interface ProjectsState extends AppState{
  projects: Array<IProject>;
}
