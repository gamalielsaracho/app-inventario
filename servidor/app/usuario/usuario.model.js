import connection from '../../config/connection'


exports.listar = function (callback) {
	
	var q = `
		SELECT * FROM usuarios
	`

	var opciones = {
		sql: q, 
		nestTables: false
	}

	return connection.query(opciones, callback)

	connection.end()
}


exports.mostrar = function (datos, callback) {
	var q = `
		SELECT * FROM usuarios WHERE id_usuario = ?
	`

	var opciones = {
		sql: q, 
		nestTables: false
	}

	return connection.query(opciones, [datos.id_usuario], callback);

	connection.end();
}


exports.verificarExistente = function (datos, callback) {
	var q = `
		SELECT * FROM usuarios WHERE alias_usuario = ? AND password_usuario=MD5(?)
	`

	var opciones = {
		sql: q, 
		nestTables: false
	}

	return connection.query(opciones, [datos.alias_usuario, datos.password_usuario], callback);

	connection.end();
}

exports.registrar = function (datos, callback) {
	var q = `
		INSERT INTO usuarios (
			id_usuario,
			alias_usuario,
			password_usuario) VALUES (null, LOWER(?), LOWER(?))
	`

	if(datos.alias_usuario){
		datos.alias_usuario.trim()
	}

	if(datos.password_usuario){
		datos.password_usuario.trim()
	}

	if(datos.password_usuario){
		datos.password_usuario.trim()
	}

	var opciones = {
		sql: q, 
		nestTables: false
	}

	return connection.query(opciones, [datos], callback);

	connection.end();
}

exports.editar = function (datos, callback) {
	var q = `
		UPDATE usuarios SET
			alias_usuario = LOWER(?),
			password_usuario = LOWER(?),
			estado_usuario = ?
		WHERE 
			id_usuario = ?
	`

	if(datos.alias_usuario){
		datos.alias_usuario.trim()
	}

	if(datos.password_usuario){
		datos.password_usuario.trim()
	}

	var opciones = {
		sql: q, 
		nestTables: false
	}

	return connection.query(opciones, [ datos.alias_usuario, 
										datos.password_usuario, 
										datos.estado_usuario,
										datos.id_usuario], callback);

	connection.end();
}


// exports.entrar = function (datos, callback) {
// 	var q = `
// 		SELECT * FROM usuarios WHERE alias_usuario = ? AND password_usuario = ?
// 	`

// 	var opciones = {
// 		sql: q, 
// 		nestTables: false
// 	}

// 	return connection.query(opciones, [datos.alias_usuario, datos.password_usuario], callback);

// 	connection.end();
// }

exports.eliminar = function (datos, callback) {
	var q = `
		DELETE FROM usuarios WHERE id_usuario = ?
	`

	var opciones = {
		sql: q, 
		nestTables: false
	}

	return connection.query(opciones, [datos.id_usuario], callback);

	connection.end();
}