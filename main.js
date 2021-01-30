Webcam.set({
    height:300,
    width:350,
    image_format:'png',
    png_quality:100
});
        var camera = document.getElementById("camera");
Webcam.attach('#camera')
  function capture(){
      Webcam.snap(function(data_uri){
          document.getElementById("result").innerHTML ="<img id='captured_image' src="+data_uri+"></img>";    
      })
  }
   console.log("ml5 version", ml5.version);
   var classifier = ml5.imageClassifier('not yet added', modelLoaded );
 function modelLoaded(){
     console.log("model is loaded");
 }