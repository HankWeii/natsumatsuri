
var openicon = document.getElementById("open");
var styleopen = window.getComputedStyle(openicon);
var movebottom = styleopen.getPropertyValue("bottom");
var openscale = 0;
movebottom = parseInt(movebottom);
var iconopacity = 100;
var dark = document.getElementById("silder");
var darkstyle = window.getComputedStyle(dark);
var darkopacity = 100;

function openmove(){
    var animeID2 = window.setInterval(function(){
        if(movebottom <= -20){
            window.clearInterval(animeID2);
            openmove2();
            return;
        }
        movebottom = movebottom -10;
        openicon.style.bottom = movebottom + "px";
    },2);
}



function openmove2(){
    var animeID3 = window.setInterval(function(){
        if(movebottom >= 100){
            window.clearInterval(animeID3);
            console.log(movebottom);
            openmove3();
            return;
        }
        movebottom = movebottom +10;
        openicon.style.bottom = movebottom + "px";
    },10);
}

function openmove3(){
    var animeID3 = window.setInterval(function(){
        if(movebottom <= 0){
            window.clearInterval(animeID3);
            console.log(movebottom);
            openmove4();
            return;
        }
        movebottom = movebottom -10;
        openicon.style.bottom = movebottom + "px";
    },10);
}

function openmove4(){
    var animeID3 = window.setInterval(function(){
        if(movebottom >= 50){
            window.clearInterval(animeID3);
            console.log(movebottom);
            openmove5();
            return;
        }
        movebottom = movebottom +10;
        openicon.style.bottom = movebottom + "px";
    },10);
}

function openmove5(){
    var animeID3 = window.setInterval(function(){
        if(movebottom <= 0){
            window.clearInterval(animeID3);
            console.log(movebottom);
            openicon.style.cursor = "pointer";
            document.getElementById("open").onclick = ScaleOpacityDark;
            // setTimeout(Openscale, 500);
            // setTimeout(Opacitydis, 500);
            // setTimeout(darkdis, 500);
            // Openscale();
            // Opacitydis();
            // darkdis();
            return;
        }
        movebottom = movebottom -10;
        openicon.style.bottom = movebottom + "px";
    },10);
}

function Openscale(){
    var animeID3 = window.setInterval(function(){
        openscale = parseInt(openscale);
        if(openscale >= 1000){
            window.clearInterval(animeID3);
            return;
        }
        openscale = openscale +10;
        openicon.style.scale = openscale + "%";
    },10);
}

function Opacitydis(){
    var animeID3 = window.setInterval(function(){
        if(iconopacity <= 0){
            window.clearInterval(animeID3);
            openicon.style.display= "none";
            return;
        }
        iconopacity = iconopacity -3;
        openicon.style.opacity = iconopacity + "%";
    },10);
}

function darkdis(){
    var animeID3 = window.setInterval(function(){
        if(darkopacity <= 0){
            window.clearInterval(animeID3);
            dark.style.display= "none";
            return;
        }
        darkopacity = darkopacity -1;
        dark.style.opacity = darkopacity + "%";
    },10);
}

function ScaleOpacityDark(){
    Openscale();
    Opacitydis();
    darkdis();
}

setTimeout(openmove, 300);
console.log(openscale);


//342
//-230 silder
// open    起始left 374 top: -76% left -12.5% scale 41%
//-168 -380 0
//

//bottom 410-0-200-0-50-0