document
  .getElementById("LandingSection")
  .addEventListener("mousemove", (event) => {
    let XPos = +event.clientX / +window.innerWidth;
    let YPos = +event.clientY / +window.innerHeight;
    document.getElementById("__TheChair").style.transform = `translate(${
      2 * -XPos
    }rem, ${7 - 2 * YPos}rem)`;
    document.getElementById("__TheLamp").style.transform = `translate(${
      -9 + 3 * XPos
    }rem, ${1 + 2 * YPos}rem)`;
  });
// ..............................
function exit() {
  document.getElementById("navright").style.display = "none";
}
function myFunction() {
  document.getElementById("navright").style.display = "flex";
}
// ...................
function exitlift() {
  document.getElementById("navlift").style.display = "none";
}
function exitbars() {
  document.getElementById("navlift").style.display = "flex";
}

// .................................
//   document.getElementById("bars").onclick = function() {myFunction()};
// function myFunction() {
//   document.getElementById("navbar").classList.toggle("show");
// }
// const bars =document.getElementById('bars');
// const navbar =document.getElementById('navbar');
// bars.onclick= function(){
//   bars.classList.toggle('active');
//   navbar.classList.toggle('active');
// }
// window.onscroll = function() {myFunction()};

// function myFunction() {
//   if (document.documentElement.scrollTop > 50) {
//     document.getElementById("MainHeader").className = "MainHeader";
//   } else {
//     document.getElementById("MainHeader").className = "MainHeader";
//   }
// }
// var MainHeader = document.querySelector('#MainHeader');

// function updateStyle() {
//   if (document.body.scrollTop >= 20 || document.documentElement.scrollTop >= 20 ) {
//     MainHeader.classList.add('MainHeader');
//   } 
//   else {
//     MainHeader.classList.remove('MainHeader');
//   }
// }

// document.addEventListener('scroll', updateStyle);
// .....................................
// function myFunction() {
//   document.getElementById("myDIV").style.position="fixed";
// }
// function scrollFunction() {
//   if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//     document.getElementById("MainHeader").style.position= "fixed";
//   } else {
//     document.getElementById("MainHeader").style.position = "sticky";
//   }
// }