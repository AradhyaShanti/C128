leftwristx = 0;
leftwristy = 0;

rightwristx = 0;
rightwristy = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log("model Loaded!");
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);

        leftwristx = results[0].pose.leftWrist.x;
        leftwristy = results[0].pose.leftWrist.y;
        console.log("LeftWrist X = " + leftwristx + ", LeftWrist Y = " + leftwristy);

        rightwristx = results[0].pose.rightWrist.x;
        rightwristy = results[0].pose.rightWrist.y;
        console.log("RightWrist X = " + rightwristx + ", RightWrist Y = " + rightwristy);
    }
}

function draw() {
    image(video, 0, 0, 600, 500);
}
