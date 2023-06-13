const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const nbSlide = slides.length;
const right = document.querySelector('.arrow_right');
const left = document.querySelector('.arrow_left');
let count = 0;

function slideRight(){
	if(count < nbSlide - 1){
		count++;
	} else {
		count = 0;
	}

	console.log(count);

}

right.addEventListener('click', slideRight)

function slideLeft(){
	if(count > 0){
		count--;
	} else {
		count = nbSlide - 1;
	}

	console.log(count);

}

left.addEventListener('click', slideLeft)