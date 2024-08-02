
function setup() {
  createCanvas(windowWidth, 200);
  // background(255);
}

function draw() {
    // cream, blue, red, pink
    var cream_rgb = [255,248,232]
    var blue_rgb = [35, 87, 137]
    var pink_rgb = [232, 170, 175]
    var maroon_rgb = [165, 56, 96]
    var colors = [maroon_rgb, cream_rgb, blue_rgb, cream_rgb, pink_rgb]
    var x = 0
    var y=1
    for (z=0;z<6;z++){
        x = z*(windowWidth/5)
        
        for (i=0; i<5; i++){
            fill(colors[i])
            ellipse(x,100,(windowWidth/70)*(6-i))
        }
    }
}
function windowResized() {
    resizeCanvas(windowWidth, 200);
}
