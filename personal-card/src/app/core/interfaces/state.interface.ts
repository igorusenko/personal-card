import {IExperience} from "./experience.interface";
import {IProject} from "./projects.interface";

export interface AppState {
  experience: ExperienceState;
}

export interface ExperienceState {
  experienceData: IExperience[];
  loading: boolean;
  error: any;
}

export interface ProjectsState extends AppState{
  projects: Array<IProject>;
}
