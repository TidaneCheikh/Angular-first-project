import { Component, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap-model';
import {UpperCasePipe ,DatePipe} from '@angular/common';




@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [UpperCasePipe,DatePipe],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent {

  @Input() facesnap !: FaceSnap;

  

}
