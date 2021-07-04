function setup(){
    canvas = createCanvas(500, 350);
    canvas.center();
    v1 = createCapture(VIDEO);
    v1.hide();
    identify = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/NHqki6Xdk/model.json",modelLoaded);
    }
    
    function draw(){
    image (v1, 0, 0, 500, 350);
    
    identify.classify(v1, gotResult);
    }

    function modelLoaded(){
console.log("Model has Loaded!");}

function gotResult(error, results){

if (error){
console.error(error);}

else{
console.log(results);

document.getElementById("name").innerHTML = results[0].label;
document.getElementById("percent").innerHTML = results[0].confidence.toFixed(3) * 100 + " %";

if (results[0].label == "Mother"){

document.getElementById("result_image").innerHTML = "<img src = 'Deepa.jpg'width = '40px'>";}


if (results[0].label == "Sister"){

    document.getElementById("result_image").innerHTML = "<img src = 'Srinidhi.jpg'width = '40px'>";}

    if (results[0].label == "Me"){

        document.getElementById("result_image").innerHTML = "<img src = 'Madhuvanthi Karthik-NIS331 copy.JPG'width = '40px'>";}
}




}