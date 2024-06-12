// Get url data query
let url = window.location.href;
let query = url.split('?', 2)[1];
let data = {};
if (query) {
    if (query.includes('#')) query = query.split('#', 2)[0];
    query.split('&').forEach(item => {
        let split = item.split('=');
        data[split[0]] = split[1];
    });
}

// Get recipient name from query
let recipient = data['kepada'] || '';
$('#recipient').text(decodeURIComponent(recipient));

// Audio element handler
let audio = $('audio')[0];

// open cover event
$('#open').on('click', function() {
    $('header').addClass('open');
    audio.volume = 0.5;
    audio.play();
    AOS.init();
    setTimeout(() => $('header').hide(), 2000);
});

// Toogle event handler
let autoscroll = false;
$('#autoscroll').on('click', function() {
    let btn = $(this);
    btn.toggleClass('active');
    if (btn.hasClass('active')) {
        autoscroll = true;
        start_autoscroll();
    } else {
        autoscroll = false;
    }
});

$('#sound').on('click', function() {
    let btn = $(this);
    btn.toggleClass('active');
    if (btn.hasClass('active')) audio.play();
    else audio.pause();
});

function start_autoscroll() {
    window.scrollBy(0, 2);
    if (autoscroll) setTimeout(start_autoscroll, 8);
}

// Time Countdown
let targetDate = new Date('Jun 26, 2024');
let currentDate = new Date();
let remainingTime = targetDate - currentDate;

let countdownInterval = setInterval(function() {
    remainingTime -= 1000;

    if (remainingTime <= 0) {
        clearInterval(countdownInterval);
        return 0;
    }

    let days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    let hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    $('#countdown .days span').text(days);
    $('#countdown .hours span').text(hours);
    $('#countdown .minutes span').text(minutes);
    $('#countdown .seconds span').text(seconds);
}, 1000);