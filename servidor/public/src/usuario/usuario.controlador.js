
import DashBoard from './vistas/dashboard'
var page=require("page");
require( 'datatables.net-dt' )();

// import ListarUsuarios from './vistas/ListarUsuarios'

import { socket } from '../middleware'


// $('.contenedor-principal-paginas').html(DashBoard())

exports.entrar = function() {
	// alert('jjjjjjjjjjj')



	$('.page-wrapper').load('src/usuario/vistas/login.html', function(){
		$("#form-usuario").on('submit', function(e){
			e.preventDefault();

			socket.emit('autenticar_usuario', $(this).serializeFormJSON())
			
			socket.on('autenticar_usuario', (data) => {
				toastr.clear();
				if (data.error) {
					toastr.error(data.error);
				} else {
					toastr.success(data.mensaje);
					// data es la respuesta que nos dio el servidor.
					// despues de que el usuario envió el formulario.
					const token = data.token
					// localStorage.setItem('tokenUsuario', token)

					// page.redirect('/dashboard') --> No funciona con el de la 
					// libreria page, hasò..
					//  este nomas ya.
					document.location.href = '/dashboard'
				}
				
			})
			
		});

	})
}

function enviarDatosEntrar() {
	// body...
}


exports.dashboard = function() {
	$('.contenedor-principal-paginas').html(DashBoard())
	$(".main-content").load('src/usuario/vistas/ListarUsuarios.html', function(){
		$('#example').DataTable();
	});
}


exports.listar = function() {
	$('.contenedor-principal-paginas').html(DashBoard())
	$('.main-content').load('src/usuario/vistas/ListarUsuarios.html', function(){

	})

	/*var usuarios = [
		{
			id: 1,
			nombre: 'fffffff'
		},
		{
			id: 2,
			nombre: 'ggggggg'
		},
		{
			id: 3,
			nombre: 'fffkkkkffff'
		},
		{
			id: 4,
			nombre: 'llllllll'
		}
	]
	// $('.contenedor-principal-paginas').html(DashBoard(), () => {
		$(".main-content").load('src/usuario/vistas/ListarUsuarios.html', () => {
			// console.log('listo')
			usuarios.map(function (usuario) {
				var data = `<tr class="tr-shadow">
			        <td>
			            <label class="au-checkbox">
			                <input type="checkbox">
			                <span class="au-checkmark"></span>
			            </label>
			        </td>
			        <td>${usuario.nombre}</td>
			        <td>
			            <span class="block-email">lori@example.com</span>
			        </td>
			        <td class="desc">Samsung S8 Black</td>
			        <td>2018-09-27 02:12</td>
			        <td>
			            <span class="status--process">Processed</span>
			        </td>
			        <td>$679.00</td>
			        <td>
			            <div class="table-data-feature">
			                <button class="item" data-toggle="tooltip" data-placement="top" title="Send">
			                    <i class="zmdi zmdi-mail-send"></i>
			                </button>
			                <button onclick="abrirFormulario()" class="item" data-toggle="tooltip" data-placement="top" title="Edit">
			                    <i class="zmdi zmdi-edit"></i>
			                </button>
			                <button class="item" data-toggle="tooltip" data-placement="top" title="Delete">
			                    <i class="zmdi zmdi-delete"></i>
			                </button>
			                <button class="item" data-toggle="tooltip" data-placement="top" title="More">
			                    <i class="zmdi zmdi-more"></i>
			                </button>
			            </div>
			        </td>
			    </tr>
			    <tr class="spacer"></tr>`

			    $('.listar-usuarios').append(data)
			})
		})*/
	// })
}

exports.eliminar = function(id) {
	// body...
}

function abrirFormulario() {
	// body...
	alert('abrirFormulario')
}

exports.editar = function(id) {
	// body...
}



exports.crear = function(datosFormulario) {
	// body...
}


// export default listar 