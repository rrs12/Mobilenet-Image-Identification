Webcam.set({
    height: 300,
    width: 310,
    image_format: "png",
    png_quality: 90,
    flip_horiz:true,
    constrains: {
        facingMode: "environent"
    }
})
Webcam.attach("#camera")

function capture(){
    Webcam.snap(function (data_uri){
        
        document.getElementById("result").innerHTML="<img id='captured_image' src='"+data_uri+"'/>"
    }
    )

}
function modelLoaded(){
    console.log("Model Loaded!")
}

classifier=ml5.imageClassifier('MobileNet', modelLoaded)

function check()
{
    img= document.getElementById("captured_image")
    classifier.classify(img, gotResult)
}
function gotResult(error,results){
if(error){
    console.error(error)
}
else{
    console.log(results)
    document.getElementById("object_name").innerHTML=results[0].label
}
}