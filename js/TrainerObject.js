function TrainerObject(trainerName, trainerPicture, trainerDescription ){
    this.trainerName = trainerName;
    this.trainerPicture = trainerPicture;
    this.trainerDescription = trainerDescription;
}
        
        var sørenPicture = new Image();
        sørenPicture.src = "../pictures/pexels-photo-703009.jpeg";
        
        var søren = new TrainerObject(
            "Søren", 
             sørenPicture, 
            "Han hedder søren"
        );

        var katrinePicture = new Image();
        katrinePicture.src = "../pictures/katrine.jpeg";
        
        var katrine = new TrainerObject(
            "Katrine", 
             katrinePicture, 
            "Hun hedder Katrine"
        );

        var andersPicture = new Image();
        andersPicture.src = "../pictures/bodybuilder-weight-training-stress-38630.jpeg";
        var anders = new TrainerObject(
            "Anders",
            andersPicture,
            "Han hedder Anders"
        )

        var trainerArray = [];
        trainerArray.push(søren);
        trainerArray.push(katrine);
        trainerArray.push(anders);