let welcome_text_element1 = document.getElementById("header__welcome-text1");
let welcome_text_element2 = document.getElementById("header__welcome-text2");
let welcome_text_element3 = document.getElementById("header__welcome-text3");
let welcome_text_element4 = document.getElementById("header__welcome-text4");
let welcome_text_element5 = document.getElementById("header__welcome-text5");
let welcome_text_element6 = document.getElementById("header__welcome-text6");
let welcome_text_element7 = document.getElementById("header__welcome-text7");
let welcome_text_element8 = document.getElementById("header__welcome-text8");
let welcome_text_element9 = document.getElementById("header__welcome-text9");
let welcome_text_element10 = document.getElementById("header__welcome-text10");
let welcome_text_element11 = document.getElementById("header__welcome-text11");
let welcome_text_element12 = document.getElementById("header__welcome-text12");
let welcome_text_element13 = document.getElementById("header__welcome-text13");
let welcome_text_element14 = document.getElementById("header__welcome-text14");
let welcome_text_element15 = document.getElementById("header__welcome-text15");
let welcome_text_element16 = document.getElementById("header__welcome-text16");

let iit_text_element = document.getElementById("header__iit");

let array = [
  welcome_text_element1,
  welcome_text_element2,
  welcome_text_element3,
  welcome_text_element4,
  welcome_text_element5,
  welcome_text_element6,
  welcome_text_element7,
  welcome_text_element8,
  welcome_text_element9,
  welcome_text_element10,
  welcome_text_element11,
  welcome_text_element12,
  welcome_text_element13,
  welcome_text_element14,
  welcome_text_element15,
  welcome_text_element16,
];

const welcome_text = "Hi,Welcome here";
let iit_text = "IIT CITY, PAKISTAN";

let i = 0;
let interval_timeout = 0;

interval_timeout = setInterval(() => {
  if (i < welcome_text.length) {
    array[i].textContent = welcome_text.charAt(i);
    i++;
  } else {
    clearInterval(interval_timeout);
    window.location.replace("SaadZafar-portfolio.html");
  }
}, 150);

iit_text_element.textContent = iit_text;
