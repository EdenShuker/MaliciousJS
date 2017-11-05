$(document).ready(function(){
    // set a listener on the textbox
    $('#input').on("change", function (evt){
        var text = $('#input').val();
        // the {text:text} sends a parameter named text with the
        $.get('/shout', {text:text})
            .done(function (data) {
                console.log(data);
                $('#results').prepend('<li>'+data['result']+'</li>');
                $('#input').val(' '); // reset the textbox
            })
            .fail(function (xhr) {
                alert('Problem contacting server');
                console.log(xhr);
            });
    });
});