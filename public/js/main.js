document.addEventListener('DOMContentLoaded', () => {
	const socket = io();

	/* socket.on('msg', (data) => {
		document.write(data);
	}); */

	const msg = document.querySelector('#msg');
	const btnSend = document.querySelector('#btnSend');
	const msgContainer = document.querySelector('#container');

	btnSend.addEventListener('click', () => {
		if (msg.value != '') {
			socket.emit('outgoingMsg', msg.value);
		}
	});

	socket.on('incomingMsg', (msg) => {
		let p = document.createElement('p');
		p.innerHTML = msg;
		msgContainer.appendChild(p);
	});
});