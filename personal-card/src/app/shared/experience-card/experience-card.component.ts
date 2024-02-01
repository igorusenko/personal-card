import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {IExperience} from "../../core/interfaces/experience.interface";

@Component({
  selector: 'app-experience-card',
  standalone: true,
  imports: [],
  templateUrl: './experience-card.component.html',
  styleUrl: './experience-card.component.scss'
})
export class ExperienceCardComponent {

  @Input() experience: IExperience;
  @Input() active: boolean;
  @Input() opacity: boolean;
  @Output() mouseEnter: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() mouseLeave: EventEmitter<boolean> = new EventEmitter<boolean>();

}
