import '../scss/main.scss';
import moment from 'moment';

/* place your code below */

console.log(moment().startOf('day').fromNow());

const firstName = "Zuza";
const age = "21";

console.log(`Nazywam się ${firstName} i mam ${age} lat`);
console.log(
  `Dopiero się uczę, ale mam nadzieję, że nie stracę zapału i za parę miesięcy będę wymiatać!`
);

console.log(`Wymiatać w znaczeniu, wymiatać użyciem podstawy podstaw :)`);

const heading = document.querySelector(".foodie-article__header--js");

function helloWorld() {
  console.log(`Witaj świecie! Nazywam się ${firstName} i mam ${age} lat`);
}

helloWorld();

const calculate = (myNumber) => (myNumber + 3)*7;

const deathStar = {
    diameter: 120000,
    fire: (target) => {
    console.log(`${target} destroyed 💥`)
  	},
  	isOperating: true,
  	levels: 357,
  	name: 'Death Star',
    population: 10000,
    isLightOn: true,
    commander: {
      name: 'Darth Vader',
      age: 44
      }
    }
    
    console.log(deathStar.name)

    console.log(deathStar.commander.name)

    deathStar.fire('Rebel Ship')

    const myProperty = 'name'

    const showMeProperty = (myProperty) => {
      console.log(`Twoja własność ${myProperty} to: ${deathStar[myProperty]}`);
    }

    showMeProperty('levels')

  if (2===2){
    console.log('tak');
  }

    const humanOne = {
      name: 'Janek',
      age: 21
    }
    
    const humanTwo = {
      name: 'Zuza',
      age: 22
    }
    

    if (humanOne.age > humanTwo.age) {
      console.log('HumanOne jest starszy')
    } else {
      console.log('HumanOne jest młodszy lub są równolatkami');
    }

    const myNumber = 7;

    switch(myNumber) {
      case 5:
        console.log ('hi 5')
      break;
      case 3:
        console.log ('hi 3');
      break;
      default:
        console.log('hi osobo bez numeru porządkowego')
    }

    const hamburger = document.querySelector('.hamburger--js');

    hamburger.addEventListener ('click' , () => {
      const nav = document.querySelector('.navigation--js');
      nav.classList.toggle('navigation--open');
    });

  