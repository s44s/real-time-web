var form = document.getElementsByTagName('form');
var radiobuttons = document.querySelectorAll('input[type="radio"]')
var socket = io();

form[0].addEventListener('submit', function(e){
	var message = document.getElementById('m');
	e.preventDefault();
	socket.emit('chat message', message.value);
	message.value = '';
});

socket.on('chat message', function(msg){
	var messages = document.getElementById('messages');
	var li = document.createElement('li');
	var textnode = document.createTextNode(msg);         // Create a text node
	li.appendChild(textnode);
	messages.appendChild(li);
});

for (i = 0; i < radiobuttons.length; i++) {
	radiobuttons[i].addEventListener('change', function(el){
		var backgroundColor = el.srcElement.value
		socket.emit('background change', backgroundColor);
	})
}

socket.on('background color', function(color){
	radiobuttons.forEach(function(el){
		if(el.value == color) {
			el.checked = true;
			document.body.style.backgroundColor = color;
		}
	})
});
