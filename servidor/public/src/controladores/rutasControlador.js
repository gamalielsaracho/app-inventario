
var page=require("page");

console.log(page)
exports.rutas = function() {
	page('/', index)
	page('/hola', hola)
	page()


	function index() {
		$('.main-content').html('<h1>index</h1>')
	}

	function hola() {
		$('.main-content').html('<h1>Hola</h1>')
	}
	// page('*', function(){
	//   $('body').text('Not found!')
	// })
}

