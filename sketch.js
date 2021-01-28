function setup() {
	createCanvas(window.innerWidth, window.innerHeight);
	background(51);

	let len = 12;
	let angle = PI / 16;
	for (let i = 1; i <= 5000; i++) {
		// translate(20, 22);
		let arr = [];
		let p = i;
		do {
			arr.push(p);
			p = collatz(p);
		} while (p !== 1);
		arr.push(1);
		arr.forEach((point) => {
			if (point === 1) {
				resetMatrix();
				translate(width / 2, height / 2);
			}
			// translate(30, 30);

			if (point % 2 === 0) {
				rotate(angle);
			} else {
				rotate(-angle);
			}
			strokeWeight(4);
			stroke("rgba(255,204,0,0.1)");

			line(0, 0, 0, -len);
			text(point, 0, 0);
			translate(0, -len);
		});
	}
}

function collatz(n) {
	if (n % 2 === 0) {
		return n / 2;
	} else {
		return (3 * n + 1) / 2;
	}
}
