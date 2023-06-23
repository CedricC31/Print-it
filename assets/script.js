"use strict";

// ******************** CONSTANTS/VARIABLE ********************

const slides = [
  {
    image: 'slide1.jpg',
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>"
  },
  {
    image: 'slide2.jpg',
    tagLine: "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
  },
  {
    image: 'slide3.jpg',
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>"
  },
  {
    image: 'slide4.png',
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>"
  }
];

const left = document.querySelector('.arrow_left');
const right = document.querySelector('.arrow_right');
const imgBanner = document.querySelector('.banner-img');
const tagLineElement = document.querySelector('#banner p');

const nbSlide = slides.length;
let count = 0;

// ******************** FUNCTIONS ********************

/**
 * Définit le point actif dans une liste de points en ajoutant la classe
 * 'dot_selected' au point avec l'index spécifié et en la supprimant de tous les
 * autres points.
 */
function setActiveDot() {
  const dot = document.querySelectorAll('.dot');
  dot.forEach(dot => dot.classList.remove('dot_selected'));
  dot[count].classList.add('dot_selected');
}

/**
 * Fait glisser l'image de la bannière vers la droite et met à jour la ligne de texte et les indicateurs de point.
 */
function slideRight() {
  if (count < nbSlide - 1) {
    count++;

  } else {
    count = 0;
  }

  setActiveDot();

  const tagLine = slides[count].tagLine;

  imgBanner.src = "assets/images/slideshow/" + slides[count].image;
  imgBanner.setAttribute('alt', tagLine);

  const prefixText = tagLine.substring(0, tagLine.indexOf('<span>'));
  const spanElement = document.createElement('span');

  tagLineElement.innerText = prefixText;
  spanElement.textContent = tagLine.match(/<span>(.*?)<\/span>/)[1];

  tagLineElement.appendChild(spanElement);
}

/**
 * Fait glisser l'image de la bannière vers la droite et met à jour la ligne de texte et les indicateurs de point.
 */
function slideLeft() {
  if (count > 0) {
    count--;

  } else {
    count = nbSlide - 1;
  }

  setActiveDot();

  const tagLine = slides[count].tagLine;

  imgBanner.src = "assets/images/slideshow/" + slides[count].image;
  imgBanner.setAttribute('alt', tagLine);
  
  const prefixText = tagLine.substring(0, tagLine.indexOf('<span>'));
  const spanElement = document.createElement('span');

  tagLineElement.innerText = prefixText;
  spanElement.textContent = tagLine.match(/<span>(.*?)<\/span>/)[1];

  tagLineElement.appendChild(spanElement);
}

/**
 * Ajoute des écouteurs d'événements aux éléments "left" et "right" qui déclenchent les fonctions "slideLeft" et "slideRight".
 */
function addEventListener() {
  left.addEventListener('click', slideLeft);
  right.addEventListener('click', slideRight);
}

// ******************** MAIN ********************

addEventListener();