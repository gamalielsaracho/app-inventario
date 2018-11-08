import mysql from 'mysql'

import config from './index'

var dataBase = {
	host: '127.0.0.1',
	user: 'root',
	password: '',
	database: 'inventario_uc'
}

export default mysql.createConnection(dataBase, function(err, connection) {
	if(err) {
		console.log('Error connecting '+err.stack)
		return
	}


	connection.connect((err, success) => {
		if(err) {
			console.log('Error connecting '+err.stack)
			return
		}
		// console.log(success)

		return success
	})
})