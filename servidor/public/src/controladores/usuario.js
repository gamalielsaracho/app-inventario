
var io = require('socket.io-client')
var socket = io('http://localhost:3000')


exports.listar = function() {
	$(".main-content").load("src/vistas/dashboard.html",function(){
		$(".header-mobile.d-block.d-lg-none").load("src/vistas/menumobile.html", function(){
			$(".header-desktop").load("src/vistas/headerdesktop.html",function(){
				$(".menu-sidebar.d-none.d-lg-block").load("src/vistas/menusidebar.html",function(){
					$.getScript("js/main.js");
				});
			});
		})
	});
}


// export default listar 