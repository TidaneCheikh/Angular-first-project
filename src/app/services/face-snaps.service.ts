import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap-model";

@Injectable({
    providedIn:'root'

})

export class FaceSnapService{
   private faceSnaps :FaceSnap []=[new FaceSnap('cheikh tidiane',"une petite description de cheikh","ppyang.jpg",new  Date()),
    new FaceSnap('papa',"une petite description de cheikh","OIP.jpg",new Date() ).withLocation('A la fouriere')]
    getFaceSnap() :FaceSnap[]{
        return [...this.faceSnaps];
    }
}