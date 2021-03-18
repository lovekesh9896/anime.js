let ani1 = anime({
	targets: '#plus1',
	rotate: '1turn',
	// loop: true,
	easing: 'spring(1, 80, 10, 0)',
	autoplay: false,
});

let ani2 = anime({
	targets: '#plus2',
	rotate: '1turn',
	// loop: true,
	easing: 'spring(1, 80, 10, 0)',
	autoplay: false,
	delay: 100,
});

let button1 = document.getElementById('button');
button1.addEventListener('click', function () {
	ani1.play();
	ani2.play();
});
// seection 2

// let ani3 = anime({
//     targets: '#ball',
//     autoplay: false,
//     transform:{

//     }
// })

let ball = document.getElementById('ball');
let isMouseDown = false;
let data = {
	x: 0,
	y: 0,
};
ball.addEventListener('mousedown', (e) => {
	console.log(e);
	isMouseDown = true;
	data.x = e.pageX;
	data.y = e.pageY;
});

document.addEventListener('mousemove', (e) => {
	// console.log(e);
	if (isMouseDown) {
		// ball.style.position = 'sticky';
		ball.style.transform = `translate(${e.clientX - data.x}px, ${
			e.clientY - data.y
		}px)`;
	}
});

let button2 = document.getElementById('button2');
button2.addEventListener('click', function () {});
