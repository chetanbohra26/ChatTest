const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 6969;

/*
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/public/index.html');
});
*/

app.use(express.static(__dirname + '/public'));

io.on('connection', (socket) => {
	console.log('Client connected..!');
	socket.on('outgoingMsg', msg => {
		io.emit('incomingMsg', msg);
	});
	//socket.emit('msg', 'User Connected..!');
});

http.listen(port, (err) => {
	if (err) throw err;
	console.log('Listening on port', port);
})