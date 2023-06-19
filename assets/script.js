const slides = [
	{
		image: 'slide1.jpg', alt: 'image 1',
		tagLine :"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		image: 'slide2.jpg', alt: 'image 2',
		tagLine :"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		image: 'slide3.jpg', alt: 'image 3',
		tagLine :"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		image: 'slide4.png', alt: 'image 4',
		tagLine: "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const nbSlide = slides.length;
const right = document.querySelector('.arrow_right');
const left = document.querySelector('.arrow_left');
const dots = document.querySelector('.dot');
let count = 0;

function slideRight(){
	if(count < nbSlide - 1){
		count++;
	} else {
		count = 0;
	}

	console.log(count);

  setActiveDot();

  document.querySelector('.banner-img').src = "assets/images/slideshow/" + slides[count].image;

  document.querySelector('#banner p').innerHTML = slides[count].tagLine;

}

right.addEventListener('click', slideRight)

function slideLeft(){
  if(count > 0){
      count--;
  } else {
      count = nbSlide - 1;
  }

  console.log(count);

  setActiveDot();

  document.querySelector('.banner-img').src = "assets/images/slideshow/" + slides[count].image;

  document.querySelector('#banner p').innerHTML = slides[count].tagLine;
  
}

left.addEventListener('click', slideLeft)

function setActiveDot() {
  const dots = document.querySelectorAll('.dot');
  dots.forEach(dot => dot.classList.remove('dot_selected'));
  dots[count].classList.add('dot_selected');
}