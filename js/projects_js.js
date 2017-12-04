window.onscroll = function () { scrollToTop() };

function scrollToTop() {
   if (document.documentElement.clientWidth > 769 &&(document.body.scrollTop > 500 || document.documentElement.scrollTop > 500)) {
       document.getElementById("anchor-link").style.display = "block";
   } else {
       document.getElementById("anchor-link").style.display = "none";
   }
}// JavaScript Document