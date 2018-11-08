import express from 'express'
import bodyParser from 'body-parser'

var path = require('path');

let app = express()
// let routes = require('./app/routes')

let server = require('http').Server(app)

let io = require('socket.io')(server)

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

app.use(bodyParser.urlencoded({ extended:false }))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'public')));

// view engine setup
app.get('/', (req, res) => {
	// ...
	// console.log(__dirname)
	res.sendfile('./index.html')
})

app.get('/hola', (req, res) => {
	res.sendfile('./index.html')
})

app.get('/entrar', (req, res) => {
	res.sendfile('./index.html')
})

app.get('/dashboard', (req, res) => {
	res.sendfile('./index.html')
})

app.get('/dashboard/usuarios', (req, res) => {
	res.sendfile('./index.html')
})


io.on('connection', function (socket) {
	console.log('Un usuario Conectado.')
	
	// require('././app/usuario/usuario.sockets')(socket, io)

	socket.on('disconnect', function () {
		console.log('El usuario se Desconecto.')
	})
})


server.listen(3000, (err) => {
	if(err) {
		console.log(`Error al correr el servidor 3000`)
		return
	}

	console.log(`Corriendo en el puerto 3000`)
})