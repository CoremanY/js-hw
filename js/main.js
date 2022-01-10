/* eslint-disable no-unused-vars */
/* eslint-disable func-style */
/* eslint-disable require-jsdoc */

let container = null;
let prevIndicator = null;

function createContainer() {
	myCarousel = document.createElement('div');
	myCarousel.setAttribute('id', 'carousel');
	
	document.querySelector('body').appendChild(myCarousel);

	container = document.querySelector('#carousel');
}

function createSlides(n) {
	mySlides = document.createElement('ul');
	mySlides.setAttribute('class', 'slides');

	for (let i = 0; i <= 6; i++) {
		let slide = document.createElement('li');
		let plug = document.createElement('a');

		slide.setAttribute('class', i === 0 ? 'slides__item active' : 'slides__item');

		plug.setAttribute('href', '#');
		slide.appendChild(plug);
		mySlides.appendChild(slide);
	}

	container.appendChild(mySlides);
}


function createIndicators(n) {
	myIndicators = document.createElement('div');
	myIndicators.setAttribute('class', 'indicators');
	
	function myIndicatorsItem() {
		let result = [];
		
		for (let i = 0; i <= 6; i++) {
			let indicator = document.createElement('span');
			indicator.setAttribute('class', 'indicators__item');
			indicator.dataset.slideTo = i;
			i === 0 && indicator.classList.add('active');
			result.push(indicator);
		}
		return result;
		
	};
	container.append(myIndicators);
	myIndicators.append(...myIndicatorsItem());
}


function indicatorsHandler(evt) {
	let target = evt.target;

	if (target.classList.contains('indicators__item')) {
		target.style.backgroundColor = 'red';

		if (prevIndicator !== null) prevIndicator.removeAttribute('style');

		prevIndicator = target;
	}
}

function setListener() {
	let myIndicators = document.querySelector('div.indicators');
	myIndicators.addEventListener('click', indicatorsHandler);
}


function createControls() {
	let myControls = document.createElement('div');
	myControls.setAttribute('class', 'controls');
	
	const PREV = '<div class="controls__item controls__prev"><i class="fas fa-chevron-left"></i></div>';
	const NEXT = '<div class="controls__item controls__next"><i class="fas fa-chevron-right"></i></div>';
	const PAUSE = '<div class="controls__item controls__pause"><i class="fas fa-play"></i></div>';
	myControls.innerHTML = PREV + NEXT + PAUSE;

	container.append(myControls);
}



function createStyle() {
	styleContainer = document.createElement('style');
	let styleCode = `
    .controls,
    .slides {
      position: relative;
    }
    .indicators {
      display: flex;
    }
    .indicators__item {
      display: block;
      width: 20px;
      height: 20px;
      background-color: gray;
      margin: 5px;
      border-radius: 10px;
    }`;


	styleContainer.innerHTML = styleCode;
	container.appendChild(styleContainer);
};


function createCarousel(slidesCount = 5) {
	createContainer();
	container = document.querySelector('#carousel');
	createSlides(slidesCount);
	createIndicators(slidesCount);
	createControls();
	createStyle();
	setListener();
}
createCarousel();