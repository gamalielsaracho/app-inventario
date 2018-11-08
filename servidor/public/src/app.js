
 // var usuarioCtrl = require('../usuario/usuario.controlador')

import page from 'page'

const d = 5	
// alert(d)

require('./usuario/usuario.rutas').rutas();

// Para los componentes que se cargan en la pagina principal.
require('./principal/principal.controlador')()



 // usuarioCtrl.listar()

 // $(".header-mobile.d-block.d-lg-none").load("src/vistas/menumobile.html")
 // $(".header-desktop").load("src/vistas/headerdesktop.html")
					// $.getScript("js/main.js");
 
 

 // $(".menu-sidebar.d-none.d-lg-block").load("src/vistas/menusidebar.html")
 	// ",function(){
	// 				$.getScript("js/main.js");
	// 			});
 	// , function(){
	// 		$(".header-desktop").load("src/vistas/headerdesktop.html",function(){
	// 			$(".menu-sidebar.d-none.d-lg-block").load("src/vistas/menusidebar.html",function(){
	// 				$.getScript("js/main.js");
	// 			});
	// 		});
	// 	})