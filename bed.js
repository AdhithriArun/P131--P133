img = "";
status = "";

function preload()
{
    img = loadImage("bed.jpg");
}

function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded()
{
    console.log("Model Loaded!");
    status = true;
    objectDetector.detect(img, gotResults);
}

function gotResults(error, results)
{
   if(error)
   {
    console.log(error);
   }
   console.log(results);
}

function draw()
{
    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    text("Bed", 150, 120);
    noFill();
    stroke("#FF0000");
    rect(140, 100, 300, 270);

    fill("#FF0000");
    text("Sofa", 450, 148);
    noFill();
    stroke("#FF0000");
    rect(440, 130, 170, 150);
}