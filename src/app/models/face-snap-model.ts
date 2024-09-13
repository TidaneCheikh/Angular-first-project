export class FaceSnap{
    location ! :string;
    constructor( public title :string, public description :string , public image :string, public date:Date){

    }
    setLocation(location:string ) : void {
         this.location=location
    }
    withLocation(location : string) : FaceSnap{
        this.setLocation(location);
        return this
    }
}