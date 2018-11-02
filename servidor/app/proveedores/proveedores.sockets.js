import Proveedores from './proveedores.model'
import config from '../../config'

export default(socket, io)=>{
	function ListarProveedores(){
		Proveedores.listar(function(err, proveedores){
			if(err){
				return socket.emit('listar_proveedores', {error: "Error, consulte con el departamento de Informática."})
			}
			return io.sockets.emit('listar_proveedores', {proveedores: proveedores})
		});
	}

	socket.on('listar_proveedores',()=>{
		ListarProveedores()
	});


	socket.on('mostrar_proveedores',(datos)=>{
		Proveedores.mostrar(datos, (err, proveedor)=>{
			if(err){
				return socket.emit('mostrar_proveedores', {error: "Error, consulte con el departamento de Informática"})
			}
			return socket.emit('mostrar_proveedores', proveedor[0])
		});
	});

	socket.on('registrar_proveedor', (datos)=>{
		Proveedores.registrar(datos,(err)=>{
			if(err){
				return socket.emit('registrar_proveedor', {error: "Error, consulte con el departamento de Informática"});
			}
			return socket.emit('registrar_proveedor', mensaje:"¡Listo!");
		});
	});

	socket.on('editar_proveedor', (datos)=>{
		Proveedores.editar(datos, (err)=>{
			if(err){
				return socket.emit('editar_proveedor',{error: "Error, consulte con el departamento de Informática"})
			}
			return socket.emit('editar_proveedor', mensaje:"¡Actualizado!");
		});
	});

}
