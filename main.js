
Webcam.set({
    width:350,
    height:300,
    Image_format:'png',
    png_quality: 100
});

camera=document.getElementById("camera");
Webcam.attach('camera');

function take_snapshot(){
    Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}
console.log('ml5 version', ml5.version);

classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/DpKvg6HRn/model.json', modelLoaded);

function modelLoaded(){
    console.log('modelLoaded');
}

function identifyImgae(){
    img=document.getElementById("captured_image");
    classifier.classify(img, gotResult);
}

function gotResult(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("person").innerHTML=results[0].label;
        document.getElementById("accuracy").innerHTML=results[0].confidence.toFixed(3);
    }
}