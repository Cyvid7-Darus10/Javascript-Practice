function setup()
{
	//create a large square canvas
	createCanvas(900, 900);
}

function draw()
{
	strokeWeight(10);
	fill(200, 0, 0);
	rect(100, 50, 600, 600);
	
	fill(200,100,0);
	rect(0,50,100,600);

	fill(0,0,100);
	rect(0,600,700,100);

	fill(100,100,100);
	rect(700,50,100,650);

	fill(50,100,50);
	rect(0,700,700,100);
	
	fill(180,122,56);
	rect(700,700,100,100);

}