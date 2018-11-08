
var page=require("page");

var usuarioCtrl = require('./usuario.controlador')

// console.log(page)
// var token = localStorage.getItem('tokenUsuario')
var token = 1


function verificarAutenticacion(token, callback) {
	// body...
	if (!token) {
		console.log('no hay tonken')
		return page.redirect('/entrar')
	} else {
		return callback()
	}
}

exports.rutas = function() {
	page('/', index)
	page('/hola', hola)
	page('/entrar', () => usuarioCtrl.entrar())
	page('/dashboard', () => verificarAutenticacion(token, function () {
		usuarioCtrl.dashboard()
	}))

	page('/dashboard/usuarios', () => verificarAutenticacion(token, function () {
		usuarioCtrl.listar()
	}))

	page()

	function index() {
		$('.contenedor-pagina').html('<h1>index</h1>')
	}

	function hola() {
		$('.contenedor-pagina').html('<h1>Hola</h1>')
	}

	// function entrar() {
		// $('.main-content').html('<h1>entrar</h1>')

		// usuarioCtrl.entrar()
	// }
	// page('*', function(){
	//   $('body').text('Not found!')
	// })
}

