import {IExperience} from "./experience.interface";
import {IProject} from "./projects.interface";
import {ComonState} from "./common-state.interface";

export interface ExperienceState {
  experience: ExperienceStateModel;
}

export interface ExperienceStateModel extends ComonState {
  experienceData: IExperience[];
}

export interface ProjectsState {
  projects: ProjectsStateModel;
}

export interface ProjectsStateModel extends ComonState {
  projectsData: IProject[];
}

