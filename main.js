song1=" ";
song2=" ";
lx = 0;
ly = 0;
rx = 0;
ry = 0;
function preload(){
    song1 = loadSound("cheese.mp3");
    song2 = loadSong("random.mp3");
    
}
function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();

    posenet = ml5.poseNet(video,modelloaded);
    posenet.on('pose',gotposes);
}
function gotposes(result){
    if(result.length > 0){
        console.log(result);

        lx = result[0].pose.leftWrist.x;
        ly = result[0].pose.leftWrist.y;
        rx = result[0].pose.rightWrist.x;
        ry = result[0].pose.rightWrist.y;
        console.log("the x and y coordinates of left wrist " + lx + ly);
        console.log("the x and y coordinates of right wrist " + rx + ry);
    }
}
function modelloaded(){
    console.log("posenet on");
}
function draw(){
    image(video,0,0,600,500);
}
