$(document).ready(function() {
    
    /* Manipulating Elements */
        //Getting and Setting
        // .html() .text() .attr() .width()  .height() .position() .val() <- Get or set the value of form elements.
        $( "#myDiv p:first" ).html( "New <strong>first</strong> paragraph!" );
    
    
    /* ===================== */
    
    
    /* Moving, Copying, and Removing Elements */
        // .insertAfter(), .after(), .insertBefore(), .before(), .appendTo(), append() 
        // if need a refernce to the element use .<--->To
        var li = $( "#composers li:first" ).appendTo( "#composers" ); // moves the first element to the end
        console.log(li.text()); // -> Bach
        //otherwise can use .append(), ...
        $( "#myList" ).append( $( "#myList li:first" ) );
        
        // above methods moves the element, use .clone() if need to copy
        $("#composers li:last").clone().insertBefore("#composers li:first"); // copy last li to the beginning of the list
        
    /* Removing Elements */
    // .remove() : removes and returns elements with no data or events
    // .detach() : removes and returns with data and events 
    // .empty() : deletes element's inner HTML
    
    
    /* Data Methods */
    $("#myDiv").data("index", 123);
    console.log ($( "#myDiv" ).data( "index" ));
    
    /* ===================== */    
    
    $("a").attr({
        href:"www.sap.com",
        title:'sap website'
    }).addClass('bgred');
    
    $("input[name='first-name'").addClass('bgred');
    $("#inst li.bgred").addClass('brd-green');
    $("ul.randomClass li:first").addClass('bgblue');
    $("tr:odd").addClass('bgblue');
    $("ul.randomClass li:gt(1)").addClass('bgorange');
    $("form :input").addClass('brd-green');
    
    if( $(".randomClass").length) {
        $(".randomClass").append('This is TRUE').addClass('brd-green');
    }
    
    $("ul.randomClass li").not(".sh").addClass('wfont');
    $("ul.randomClass li").filter('.arvo').addClass('rfont');
    $("ul.randomClass li").eq(6).addClass('brd-green');
    
    //console.log($("ul.randomClass li:first").clone().appendTo("ul.randomClass").text());

    
    //var instList = $("#inst").append($("#inst li:first"));
    //console.log(instList.text());
    

    
});


