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
    if (autoscroll) setTimeout(start_autoscroll, 10);
}