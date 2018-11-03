//TODO animations
//TODO offerings page

const timeBetweenAnim = 3000;
let titleIndex = 0;
const titleList = ['Creators\'', 'Programmers\'', 'Photographers\'', 'Producers\'', 'Designers\'', 'Influencers\''];
const colorList = ['#e5553d', '#bfb1d5', '#adddcf', '#abe1fd', '#f0e0a2'];
let timer;
let ind;

function nextName(element) {
    titleIndex++;
    if (titleIndex === titleList.length) {
        titleIndex = 0;
    }
    element.innerText = titleList[titleIndex];
}

$(document).ready(() => {
    goHome();

    ind = Math.floor(Math.random() * colorList.length);
    setInterval(() => {
        if (ind + 1 > colorList.length) {
            ind = 0;
        } else {
            ind++;
        }

        $(".accentText").animate({
            color: colorList[ind]
        }, 750);
    }, 10000);

    let accentStyle = getStyleRule('.accentText');
    accentStyle.color = colorList[ind];

    // $(".accentText").css("color", colorList[ind]);

    if (ind + 1 > colorList.length) {
        ind = 0;
    } else {
        ind++;
    }
});

$('#home_button').click(goHome);
$('#about_button').click(goAbout);
$('#contact_button').click(goContact);
$('#offerings_button').click(goOfferings);

function goHome() {
    timer = setInterval(() => {
        let textEle = document.getElementById('animatedLogoText');
        textEle.classList.add("animateFadeOut");
        setTimeout(() => {
            nextName(textEle);
            textEle.classList.remove("animateFadeOut");
            textEle.classList.add("animateFadeIn");
        }, 1000);
    }, timeBetweenAnim);

    $('#small_logo').hide();
    $('#wrapper').load('home.html');

    let accentStyle = getStyleRule('.accentText');
    accentStyle.color = colorList[ind];
}

function goAbout() {
    clearInterval(timer);
    $('#small_logo').show();
    $('#wrapper').load('about.html');

    let accentStyle = getStyleRule('.accentText');
    accentStyle.color = colorList[ind];
}

function goContact() {
    clearInterval(timer);
    $('#small_logo').show();
    $('#wrapper').load('contact.html');

    let accentStyle = getStyleRule('.accentText');
    accentStyle.color = colorList[ind];
}

function goOfferings() {
    clearInterval(timer);
    $('#small_logo').show();
    $('#wrapper').load('offerings.html');

    let accentStyle = getStyleRule('.accentText');
    accentStyle.color = colorList[ind];
}

function getStyleRule(name) {
    for(var i=0; i<document.styleSheets.length; i++) {
        var ix, sheet = document.styleSheets[i];
        for (ix=0; ix<sheet.cssRules.length; ix++) {
            if (sheet.cssRules[ix].selectorText === name)
                return sheet.cssRules[ix].style;
        }
    }
    return null;
}