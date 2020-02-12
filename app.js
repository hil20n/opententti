var tulostus = document.getElementById("tulostusbtn");
tulostus.onclick = function(){
    document.querySelector(".active").classList.remove("active");
    document.querySelector("#divtulostus").classList.add("active");
}

var kuvapiilotus = document.getElementById("kuvanpiilotusbtn");
kuvapiilotus.onclick = function(){
    document.querySelector(".active").classList.remove("active");
    document.querySelector("#divkuvanpiilotus").classList.add("active");
}

var otsikonvaihto = document.getElementById("otsikonvaihtobtn");
otsikonvaihto.onclick = function(){
    document.querySelector(".active").classList.remove("active");
    document.querySelector("#divotsikonvaihto").classList.add("active");
}

var takaisin = document.getElementById("takaisinbtn");
takaisin.onclick = function(){
    document.querySelector(".active").classList.remove("active");
    document.querySelector("#divhome").classList.add("active");
}

var takaisin2 = document.getElementById("takaisin2btn");
takaisin2.onclick = function(){
    document.querySelector(".active").classList.remove("active");
    document.querySelector("#divhome").classList.add("active");
}

var takaisin3 = document.getElementById("takaisin3btn");
takaisin3.onclick = function(){
    document.querySelector(".active").classList.remove("active");
    document.querySelector("#divhome").classList.add("active");
}
