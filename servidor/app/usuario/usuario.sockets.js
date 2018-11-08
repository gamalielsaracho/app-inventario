import Usuario from './usuario.model'

import jwt from 'jsonwebtoken'
import config from '../../config'

var privateKey = config.key.privateKey
var tokenExpiry = config.key.tokenExpiry

export default (socket, io) => {
	function listarUsuarios() {
		Usuario.listar(function(err, usuarios) {
			if(err) {
				return socket.emit('listar_usuarios', { error: 'Ocurrió un error, intente más tarde.' })
			}

			return io.sockets.emit('listar_usuarios', { usuarios: usuarios })
		})
	}

	socket.on('listar_usuarios', () => {
		listarUsuarios()
	})


	socket.on('mostrar_usuario', (datos) => {
		Usuario.mostrar(datos, (err, usuario) => {
			if(err) {
				return socket.emit('mostrar_usuario', { error: 'Ocurrió un error, intente más tarde.' })
			}

			return socket.emit('mostrar_usuario', usuario[0])
		})
	})


	socket.on('registrar_usuario', (datos) => {

		Usuario.verificarExistente(datos, (err, usuarioExistente) => {
			if(err) {
				return socket.emit('registrar_usuario', { error: 'Ocurrió un error, intente más tarde.' })
			}

			if (usuarioExistente[0]) {
				return socket.emit('registrar_usuario', { error: 'Este usuario ya existe.' })
			} else {
				Usuario.registrar(datos, (err) => {
					if(err) {
						return socket.emit('registrar_usuario', { error: 'Ocurrió un error, intente más tarde.' })
					}

					return socket.emit('registrar_usuario', { mensaje: 'Se registró exitosamente.' })
				})
			}
		})
	})


	socket.on('editar_usuario', (datos) => {
		Usuario.verificarExistente(datos, (err, usuarioExistente) => {
			if(err) {
				return socket.emit('editar_usuario', { error: 'Ocurrió un error, intente más tarde.' })
			}

			if (usuarioExistente[0]) {
				return socket.emit('editar_usuario', { error: 'Este usuario ya existe.' })
			} else {
				Usuario.editar(datos, (err) => {
					if(err) {
						return socket.emit('editar_usuario', { error: 'Ocurrió un error, intente más tarde.' })
					}

					return socket.emit('editar_usuario', { mensaje: 'Se modificó exitosamente.' })
				})
			}
		})
	})


	socket.on('autenticar_usuario', (datos) => {
		Usuario.verificarExistente(datos, (err, usuarioEncontrado) => {
			if(err) {
				console.log(err)
				return socket.emit('autenticar_usuario', { error: 'Ocurrió un error, intente más tarde.' })
			}


			var usuario = usuarioEncontrado[0]

			console.log(usuario)
			if(usuario) {
				// if(usuario.password_usuario != datos.password_usuario) {
				// 	return socket.emit('autenticar_usuario', { error: 'La contraseña es incorrecta.' })
				// }

				const datosToken = {
					id_usuario: usuario.id_usuario,
					alias_usuario: usuario.alias_usuario,
					estado_usuario: usuario.estado_usuario
				}

				const token = jwt.sign(datosToken, privateKey, { expiresIn: tokenExpiry })

				socket.emit('autenticar_usuario', { 
					token: token,
					mensaje: 'Bienvenido.' 
				})

			} else {
				return socket.emit('autenticar_usuario', { error: 'Este usuario no existe.' })
			}

		})
	})

	socket.on('eliminar_usuario', (datos) => {
		Usuario.eliminar(datos, (err) => {
			if(err) {
				return socket.emit({ error: 'Ocurrió un error, intente más tarde.' })
			}

			return socket.emit('eliminar_usuario', { mensaje: 'Se eliminó exitosamente.' })
		})
	})
}