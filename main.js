var predction_1;
var predction_2;
Webcam.set({
    height:300,
    width:350,
    image_format:'png',
    png_quality:100
});
        var camera = document.getElementById("camera");
    Webcam.attach(camera)
  function capture(){
      Webcam.snap(function(data_uri){
          document.getElementById("result").innerHTML = "<img id='captured_image' src="+data_uri+"></img>";    
      })
  }
   console.log("ml5 version", ml5.version);
   var classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/FVxMeXPAw/model.json', modelLoaded );
 function modelLoaded(){
     console.log("model is loaded");
 }
function speak(){
    var synth = window.speechSynthesis;
    var speak_data_1 = "First Emotion"+predction_1;
    var speak_data_2 = "Second Emotion"+predction_2;
    var utterthis = new SpeechSynthesisUtterance(speak_data_1+speak_data_2 );
    synth.speak(utterthis);
}
function check(){
    var img = document.getElementById("captured_image");
    classifier.classify(img, got_result);
}
function got_result(error,result){
    if(error){
        console.error(error);
    }
    else{
        console.log(result);
        document.getElementById("result_emotion_name").innerHTML=result[0].label;
        document.getElementById("result_emotion_name2").innerHTML = result[1].label;
        predction_1 = result[0].label;
        predction_2 = result[1].label;
        speak();
        if(predction_1 == "Best"){
            document.getElementById("update_emoji").innerHTML = "&#128077;"; 
        }
        if(predction_1 == "Amazing"){
            document.getElementById("update_emoji").innerHTML = "&#128076;"; 
        }
        if(predction_1 == "Victory"){
            document.getElementById("update_emoji").innerHTML = "&#9996;"; 
        }
        if(predction_2 == "Best"){
            document.getElementById("update_emoji2").innerHTML = "&#128077;"; 
        }
        if(predction_2 == "Amazing"){
            document.getElementById("update_emoji2").innerHTML = "&#128076;"; 
        }
        if(predction_2 == "Victory"){
            document.getElementById("update_emoji2").innerHTML = "&#9996;"; 
        }
    }
}