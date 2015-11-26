//this refers to the element that was clicked
$('#mainA').on('click', 'button', logEvent);

function logEvent(event) {
    console.log(event.target);
    console.dir(event);
}

$('table').on('click', 'td', sayName);
function sayName(event) {
    console.log(event);
    console.log(event.target);
    console.log(event.target.textContent);
    console.log( $(this).text() );
}
$('#hide_tabel').on('click', function() {
    $('table').slideUp(1000);
});
$('#tog').on('click', function() {
    $('table').toggle(1000);
});



