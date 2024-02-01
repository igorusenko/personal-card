import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IExperience} from "../../core/interfaces/experience.interface";
import {IProject} from "../../core/interfaces/projects.interface";

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent {
  @Input() project: IProject;
  @Input() active: boolean;
  @Input() opacity: boolean;
  @Output() mouseEnter: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() mouseLeave: EventEmitter<boolean> = new EventEmitter<boolean>();
}
