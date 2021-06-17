


song = "";
leftwristX = 0;
leftwristY = 0;
rightwristX = 0;
rightwristY = 0;
function preload()
{
    song = loadSound("music.mp3");
}

function setup() {
    canvas = createCanvas(600,500)
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    pose.on('pose', gotPoses);
}

function modelloaded ()
{
    console.log('posenet Is Initialized');
}

function draw() 
{
        Image(video, 0, 0, 600, 500);

        fill('#ff0000');
        stroke('#ff0000');

        if(scoreleftWrist >   0.2)

    {
        circle(leftwristX, leftwristY,20);
        inNumberLeftWristY = Number(leftwristY);
        remove_decimal = floor(InNumberLeftWristY);
        leftWristY_divide_1000 = remove_decimals/1000;
        volume = leftWristY_divide_1000 *2 ;
        document.getElementById("volume").innerHTML = "Volume =" + volume;
        song.setVolume(volum);
    }
}

function play()
{
    song.play();
    song.setvolume(10);
    song.rate(100);
}

function gotPoses (results)
{
    if(results.length > 0)
    {

        console.log(results);
        scoreleftWrist = result[0].pose.keypoints[9].score;
        console.log("scoreleftWrist = " + scoreleft);

        leftwristX = result[0].pose.leftwrist.x;
        leftwristY = result[0].pose.leftwrist.y;
        console.log("leftWristX = " + leftwristX +" leftwristY"+ leftwristY);

        rightwristX = result[0].pose.rightwrist.x;
        rightwristY = result[0].pose.rightwrist.y;
        console.log("leftWristX = " + rightwristX +" leftwristY"+ rightwristY);

    }
}







