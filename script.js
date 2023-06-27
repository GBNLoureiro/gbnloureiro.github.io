/*
GOAL: Open Hamburguer menu on user's click
*/ 
var navBar = document.getElementById('navegador');
var navContent = document.getElementById('navContent');
var navLinks = document.getElementById('navLinks');
var navLogo = document.getElementById('navLogo');
var logo = document.getElementById('logo');
var navLinksAbout = document.getElementById('navLinksAbout');
var navLinksHome = document.getElementById('navLinksHome');
var navLinksContact = document.getElementById('navLinksContact');
var navLinksProject = document.getElementById('navLinksProject');
var menuLogo = document.getElementById('hMenu');

menuLogo.onclick = function openNav() {
  navBar.style.height = "100%";
  navContent.style.flexDirection = "column";
  navContent.style.alignItems = "flex-start";
  navLinks.style.display = "flex";
  navLinks.style.backgroundSize = "contain";
  navLinks.style.alignItems = "flex-start";
  navLogo.style.height = "40px";
  navLogo.style.width = "40px";
  navLogo.style.backgroundImage = "url(images/close_icon.jpg)";
  logo.style.display = "none";
  menuLogo.style.display = "none";

    navLogo.onclick = function closeNav() {
      navBar.style.height = "60px";
      navContent.style.flexDirection = "row";
      navContent.style.alignItems = "center";
      navContent.style.justifyContent = "stretch";
      navLinks.style.display = "none";
      navLogo.style.height = "60px";
      navLogo.style.width = "100%";
      navLogo.style.backgroundImage = "none";
      logo.style.display = "flex";
      menuLogo.style.display = "flex";
      menuLogo.style.height = "40px";
      menuLogo.style.width = "40px";
      menuLogo.style.backgroundImage = "url(images/h_menu.jpg)";
      menuLogo.style.backgroundRepeat = "no-repeat";
      menuLogo.style.backgroundSize = "contain";
      }
  };
