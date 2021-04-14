"use strict";

var menuNav = document.getElementById('menu-nav');

var menuTrigger = document.getElementById('menu_trigger');

menuTrigger.onclick = function() {
  if (menuNav.style.display ==="contents"){
    menuNav.style.display = "none";
  } else {
    menuNav.style.display = "contents";
  }
  console.log("The menu has be toggled!")
}
