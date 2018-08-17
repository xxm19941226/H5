var os = require('os')
var interfaces = os.networkInterfaces()
var addresses = []
module.exports = function() {
	for (var k in interfaces) {
	    for (var k2 in interfaces[k]) {
	        var address = interfaces[k][k2]
	        if (address.family === 'IPv4' && !address.internal && (address.address.match(/192.168/g) || address.address.match(/172.16/g))) {
	            addresses.push(address.address)
	        }
	    }
	}
	console.log('局域网ip ：'+addresses)
	return addresses
}

