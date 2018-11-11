//TODO fill content on offerings
//TODO offerings icons
//TODO animation lock

//TODO blog page
//TODO projects page

const timeBetweenAnim = 6000;
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
    ind = Math.floor(Math.random() * colorList.length);
	
	let accentStyle = getStyleRule('.accentText');
    accentStyle.color = colorList[ind];
	
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
    
	goHome();

    // $(".accentText").css("color", colorList[ind]);

    if (ind + 1 > colorList.length) {
        ind = 0;
    } else {
        ind++;
    }
});

$('#home_button').click(goHome);
$('#about_button').click(() => go('about'));
$('#contact_button').click(() => go('contact'));
$('#offerings_button').click(() => go('offerings'));

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
	
	if ($('#wrapper').hasClass('page_transition_in'))
		$('#wrapper').removeClass('page_transition_in');
	$('#wrapper').addClass('page_transition');

	if ($('#small_logo').css('display') !== 'none')
		$('#small_logo').fadeOut(1000);
	
	setTimeout(() => {
    	$('#wrapper').load('home.html', () => {
			$('#wrapper').removeClass('page_transition');
			$('#wrapper').addClass('page_transition_in');
		});
	}, 1000);

    let accentStyle = getStyleRule('.accentText');
    accentStyle.color = colorList[ind];
}

function go(location) {
	clearInterval(timer);
	if ($('#wrapper').hasClass('page_transition_in'))
		$('#wrapper').removeClass('page_transition_in');
	$('#wrapper').addClass('page_transition');
	
	setTimeout(() => {
		$('#small_logo').fadeIn(1000);
    	$('#wrapper').load(`${location}.html`, () => {
			$('#wrapper').removeClass('page_transition');
			$('#wrapper').addClass('page_transition_in');
		});
	}, 1000);

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