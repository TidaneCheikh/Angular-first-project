import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap-model';
import { FaceSnapComponent } from '../face-snap/face-snap.component';
import { FaceSnapService } from '../services/face-snaps.service';


@Component({
  selector: 'app-face-snap-list',
  standalone: true,
  imports: [FaceSnapComponent],
  templateUrl: './face-snap-list.component.html',
  styleUrl: './face-snap-list.component.css'
})
export class FaceSnapListComponent implements OnInit{
  faceSnap !:FaceSnap[];
  constructor(private faceSnapsService : FaceSnapService){}

   ngOnInit(): void {

    this.faceSnap=this.faceSnapsService.getFaceSnap();
 
 
   }

}
