img = " ";

function preload()
{
    img = loadImage('dog_cat.jpg');
}

function draw()
{
    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    text("DOG", 90, 40);
    noFill();
    stroke("#FF0000");
    rect(70, 50, 450, 350);
}

function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
}