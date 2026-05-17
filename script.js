// MOBILE MENU

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.onclick = () => {
  navLinks.classList.toggle("active");
};

// TYPING EFFECT

const words = [
  "Web Designer",
  "Web Developer",
  "Creative Developer"
];

let wordIndex = 0;
let charIndex = 0;

const typing = document.querySelector(".typing");

function type(){

  if(charIndex < words[wordIndex].length){

    typing.textContent += words[wordIndex].charAt(charIndex);

    charIndex++;

    setTimeout(type,100);

  }

  else{

    setTimeout(erase,1500);

  }

}

function erase(){

  if(charIndex > 0){

    typing.textContent = words[wordIndex].substring(0,charIndex-1);

    charIndex--;

    setTimeout(erase,50);

  }

  else{

    wordIndex++;

    if(wordIndex >= words.length){
      wordIndex = 0;
    }

    setTimeout(type,500);

  }

}

document.addEventListener("DOMContentLoaded",type);

// CUSTOM CURSOR

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove",(e)=>{

  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";

});