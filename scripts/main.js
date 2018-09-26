//TODO fix shake
//TODO animations
//TODO randomly generate accent color
//TODO offerings page

const timeBetweenAnim = 3000;
let titleIndex = 0;
let titleList = ['Creators\'', 'Programmers\'', 'Photographers\'', 'Producers\'', 'Designers\'', 'Influencers\''];
document.addEventListener("DOMContentLoaded", function(event) {
    setInterval(() => {
        let textEle = document.getElementById('animatedLogoText');
        console.log('animating the stuff');
        textEle.classList.add("animateFadeOut");
        setTimeout(() => {
            nextName(textEle);
            textEle.classList.remove("animateFadeOut");
            textEle.classList.add("animateFadeIn");
        }, 1000);
    }, timeBetweenAnim);
});
function nextName(element) {
    titleIndex++;
    if (titleIndex === titleList.length) {
        titleIndex = 0;
    }
    element.innerText = titleList[titleIndex];
}

setInterval(() => new WOW().init(), 8000);

$(document).ready(() => {
    goHome();
});

$('#home_button').click(goHome);
$('#about_button').click(goAbout);
$('#contact_button').click(goContact);

function goHome() {
    $('#small_logo').hide();
    $('#wrapper').load('home.html');
}

function goAbout() {
    $('#small_logo').show();
    $('#wrapper').load('about.html');
}

function goContact() {
    $('#small_logo').show();
    $('#wrapper').load('contact.html');
}