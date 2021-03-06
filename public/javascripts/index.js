(function () {
    // set initial focus on the text-input
    $("#msg").focus();
})();

(function () {
    var socket = io.connect();
    // post msg of users on the screen
    $(document).ready(function () {
        socket.on('PostMessage', function (data) {
            var ul = document.getElementById('msgs');

            // add each msg from the list to the screen
            data.forEach(function (msg) {
                console.log("msg is: " + msg);
                var li = document.createElement("li");

                // line below will take the '<script>...</script>' as part of the string
                // li.appendChild(document.createTextNode(msg));

                // line below will make '<script>...</script>' as script tag but yet doesn't run
                // maybe because of the browser that prevents it

                li.innerHTML = msg;
                ul.appendChild(li);
            })
        });
    });

    // send your msg by clicking enter
    $(document).on('keydown', function (key) {
        var code = (key.keyCode ? key.keyCode : key.which);
        if (code == 13) { //Enter keycode
            submitMsg();
        }
    });

    function submitMsg() {
        // send msg
        var msg = document.getElementById('msg');
        socket.emit('sendMsg', msg.value);
        // clear text
        msg.value = '';
    }
})();