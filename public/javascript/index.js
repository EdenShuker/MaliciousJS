(function () {
    // set initial focus on the text-input
    $("#msg").focus();
})();

(function () {
    var socket = io.connect();
    // post msg of users on the screen
    $(document).ready(function () {
        socket.on('PostMessage', function (data) {
            console.log("msg is: " + data);
            var ul = document.getElementById('msgs');
            var li = document.createElement("li");
            li.appendChild(document.createTextNode(data));
            ul.appendChild(li);
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