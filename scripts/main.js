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