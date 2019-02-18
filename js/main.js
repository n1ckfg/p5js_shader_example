"use strict";

let img;
let shader_test;

function preload() {
	img = loadImage("./images/cow.jpg");	
	shader_test = loadShader("./js/shaders/blank.vert", "./js/shaders/invert.frag");
}

function setup() {
	createCanvas(640, 480, WEBGL);
}

function draw() {	
	background(0);

	texture(img);
	plane(500);

	push();
	translate(-width/2, -height/2, 0);
	for (let i=0; i<10; i++) {
		fill(255,0,0);
		rect(random(width), random(height),20,20);
	}
	pop();

	shader(shader_test);
	shader_test.setUniform("tex0", get());
	rect(0, 0, width, height, 1, 1);
}