import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FaceSnapComponent } from './face-snap/face-snap.component';
import { FaceSnap } from './models/face-snap-model';
import {UpperCasePipe ,DatePipe} from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FaceSnapComponent,DatePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  implements OnInit{
   mysnap!:FaceSnap [];

   ngOnInit(): void {
     this.mysnap = [new FaceSnap('cheikh tidiane',"une petite description de cheikh","ppyang.jpg",new  Date()),
      new FaceSnap('papa',"une petite description de cheikh","OIP.jpg",new Date() )];
 
   }
}
