var ship;
var flowers = [];
var drops = [];
var place = 600 / 2;
var numOfFlower;
var level;
var startGame = false;
function setup() {
	createCanvas(600, 400);
	ship = new Ship();
	allOfFlower(12);
	level = new Level();
}

function draw() {
	var x = 1;
	background(51);
	level = new Level(x);
	if (startGame) {
		level.start();
		level.drop();
		game();
	} else {
		level.show();
	}

}

function game(level) {
	ship.show();
	ship.move();
	var right = false;
	for (let i = 0; i < flowers.length; i++) {
		flowers[i].show();
		flowers[i].move();
		if (flowers[i].x > width - flowers[i].r || flowers[i].x < 0 + flowers[i].r) {
			right = true;
		}
	}
	if (right) {
		for (let i = 0; i < flowers.length; i++) {
			flowers[i].shiftDown()
		}
	}
	for (let i = 0; i < drops.length; i++) {
		drops[i].show();
		drops[i].move();
		for (let j = 0; j < flowers.length; j++) {
			if (drops[i].hits(flowers[j])) {
				flowers[j].grow();
				drops[i].remove();
				if (flowers[j].r === 21) {
					flowers[j].remove();
				}
				console.log("water");
			}
		}
	}
	for (let i = drops.length - 1; i >= 0; i--) {
		if (drops[i].toDelete) {
			drops.splice(i, 1);
		}
	}
	for (let i = flowers.length - 1; i >= 0; i--) {
		if (flowers[i].toDelete) {
			flowers.splice(i, 1);
		}
	}
}
allOfFlower = (level) => {
	var sumOfFlower = level;
	var height = 80;
	var xPlace = 0;
	for (let i = 0; i < sumOfFlower; i++) {
		xPlace = i;
		if (i > 5) {
			height = 150;
			xPlace = i - 6;
		}
		if (i > 11) {
			height = 220;
			xPlace = i - 6;
		}
		flowers[i] = new Flower(xPlace * 80 + 80, height);
	}
}
function keyReleased() {
	if (key != ' ') {
		ship.setDir(0);
	}
}
function keyPressed() {
	if (keyCode === ENTER) {
		startGame = true;
		console.log(startGame);
	}
	if (key === ' ') {
		var drop = new Drop(ship.x, height - 60);
		drops.push(drop);
	}
	if (keyCode === RIGHT_ARROW) {
		ship.setDir(4);
	} else if (keyCode === LEFT_ARROW) {
		ship.setDir(-4);
	}
}