(function () {
    $('#searchStr').focus();

    var socket = io.connect();

    $(document).ready(function () {
        socket.on('searchResponse', function (data) {
            // post the server response
            document.getElementById('lbl').innerHTML = data;
        })
    });

    // submit search to server
    $( 'form[name=search]' ).submit(function( event ) {
        event.preventDefault();
        var searchStr = document.getElementById('searchStr').value;
        console.log('searched for: ' + searchStr);
        socket.emit('search', searchStr);
    });
})();
