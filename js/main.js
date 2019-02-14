let shader_sharpen;
let img;

function setup() {
	createCanvas(640, 480, WEBGL);
	
	img = loadImage("../images/something.jpg");	
	shader_sharpen = new p5.Shader(this._renderer, vert, frag);
}

function draw() {	
	shader_sharpen.setUniform("tex0", img);
	shader_sharpen.setUniform("iResolution", [width, height,0]);
	shader_sharpen.setUniform("imgWidth", img.width);
	shader_sharpen.setUniform("imgHeight", img.height);
	shader(shader_sharpen);
	
	translate(-width/2, -height/2);
  	noStroke();
	rect(0, 0, width, height, 1, 1);
}