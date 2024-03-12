const uuidlib= require('uuid');
  
function generateId() {
	        return uuidlib.v3('alv8Zao2oP', uuidlib.v4());
	}

module.exports = generateId
