function preload()
{

}

function setup()
{
    canvas=createCanvas(500,500);
    canvas.position(560 ,100);
    video=createCapture(VIDEO);
    video.size(550,500);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);

}

function modelLoaded()
{
    console.log("Model is loaded");
}


function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);

    }
    

}

function draw()
{
    background('#106895');

}

