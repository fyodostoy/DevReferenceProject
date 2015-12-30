//this refers to the element that was clicked
$('#mainA').on('click', 'button', logEvent);

function logEvent(event) {
    console.dir(event);
    console.log(event.target);
}

$('table').on('click', 'td', sayName);
function sayName(event) {
    console.log(event); //m.Event { ... }
    console.log(event.target); // <td>a1</td>
    console.log(event.target.textContent); // a1
    console.log( $(this).text() ); // a1
}
$('#hide_tabel').on('click', function() {
    $('table').slideUp(1000);
});
$('#tog').on('click', function() {
    $('table').toggle(1000);
});



