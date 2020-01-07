"use strict";

const white_keys = ["z", "x", "c", "v", "b", "n", "m"];
const black_keys = ["s", "d", "g", "h", "j"];

const keys = document.querySelectorAll(".keys");
const whiteKeys = document.querySelectorAll(".key.white");
const blackKeys = document.querySelectorAll(".key.black");

keys.forEach(key => {
  key.addEventListener("click", () => playNote(key));
});
