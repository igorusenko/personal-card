import { Component } from '@angular/core';
import {FooterComponent} from "../../layouts/footer/footer.component";
import {HeaderComponent} from "../../layouts/header/header.component";
import {RouterOutlet} from "@angular/router";
import {animate, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    FooterComponent,
    HeaderComponent,
    RouterOutlet
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  animations: [
    trigger('changeBackgroundColor', [
      transition(':enter', [
        style({ backgroundColor: '#000000' }),
        animate('3s', style({ backgroundColor: '#cbcbcb' }))
      ])
    ])
  ]
})
export class HomeComponent {

}
