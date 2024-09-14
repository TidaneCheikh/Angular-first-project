import { Component, OnInit } from '@angular/core';
import { FaceSnapListComponent } from "./face-snap-list/face-snap-list.component";
import { HeaderComponent } from './header/header.component';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{

}
