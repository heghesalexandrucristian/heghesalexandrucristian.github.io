window.onload = function () {
    var delayTime = 700;
    anime.timeline({ loop: false })
        .add({
            targets: '.name',
            scale: [10, 1],
            opacity: [0, 1],
            easing: "easeOutCirc",
            duration: delayTime,
            delay: (el, i) => delayTime * i
        });

    var totalNameElements = document.getElementsByClassName('name').length;
    setTimeout(function () {
        addExternalLinks();
    }, delayTime * totalNameElements);
}


function addExternalLinks() {
    anime({
        targets: '.githubLink',
        translateX: ((window.innerWidth / 2) * (-1)),
        opacity: [1, 0],
        direction: 'reverse',
        easing: 'easeInOutSine',
        duration: 1600,
    });

    anime({
        targets: '.linkedinLink',
        translateX: (window.innerWidth / 2),
        opacity: [1, 0],
        direction: 'reverse',
        easing: 'easeInOutSine',
        duration: 1600,
    });
}
