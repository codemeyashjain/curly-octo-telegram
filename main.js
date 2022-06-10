function preload(){

}
function setup(){
    canvas=createCanvas(400,400);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(400,400);
    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotposes);
}
function modelLoaded(){
    console.log("Pose net is initialized");
}
function gotposes(results){
    if(results.length>0){
        console.log(results);}
        wrist_rightX = results[0].pose.rightWrist.x;
        wrist_leftX = results[0].pose.leftWrist.x;
        difference = floor(wrist_rightX-wrist_leftX);
 }

function draw(){
    background('#ed9953');
    textSize(difference);
    fill(0, 102, 153);
    text('word', 10, 60);

}
