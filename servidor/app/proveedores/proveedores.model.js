import connection from '../../config/conection'


exports.listar = function(callback){
	var q =`
		SELECT * FROM proveedores
	`

	var opciones = {
		sql:q,
		nestTables:false
	}

	return conection.query(opciones, callback)
	conection.end()
}

exports.mostrar = function(callback, datos){
	var q=`
		SELECT * FROM proveedores WHERE id_proveedor = ?
	`

	var opciones = {
		sql:q,
		nestTables:false
	}

	return conection.query(opciones, [datos.id_proveedor], callback)
	conection.end()
}

exports.registrar = function(callback, datos){
	var q=`
		INSERT INTO proveedores (
			nombre_pro, 
			ndocumento_pro, 
			dv_pro, 
			estado_pro) VALUES (LOWER(?), LOWER(?), LOWER(?), LOWER(?))
	`

	if(datos.nombre_pro){
		datos.nombre_pro.trim()
	}

	if(datos.ndocumento_pro){
		datos.ndocumento_pro.trim()
	}

	if(datos.dv_pro){
		datos.dv_pro.trim()
	}

	if(datos.estado_pro){
		datos.estado_pro.trim()
	}

	var opciones = {
		sql = q,
		nestTables = false
	}
	return conection.query(opciones, [datos], callback)
	conection.end()
}

exports.editar = function(datos, callback){
	var q=`UPDATE proveedores SET 
		nombre_pro = ?,
		ndocumento_pro = ?,
		dv_pro = ?,
		estado_pro = ? WHERE id_proveedor = ? `

	if(datos.nombre_pro){
		datos.nombre_pro.trim()
	}

	if(datos.ndocumento_pro){
		datos.ndocumento_pro.trim()
	}

	if(datos.dv_pro){
		datos.dv_pro.trim()
	}

	if(datos.estado_pro){
		datos.estado_pro.trim()
	}

	return connection.query(opciones,
		[
			datos.nombre_pro,
			datos.ndocumento_pro,
			datos.dv_pro,
			datos.estado_pro
		], 
		callback);
	conection.end();

}