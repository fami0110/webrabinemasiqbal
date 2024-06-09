// Get url data query
let url = window.location.href;
let query = url.split('?', 2)[1];

let data = {};
if (query) {
    query.split('&').forEach(item => {
        let split = item.split('=');
        data[split[0]] = split[1];
    });
}

// Get recipient name from query
let recipient = data['kepada'] || '';
$('#recipient').text(decodeURIComponent(recipient));

// open cover event
$('#open').on('click', () => {
    $('header').addClass('open');
    $('audio')[0].play();
});