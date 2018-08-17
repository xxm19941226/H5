module.exports = {
	path:{
		all:'index',
		cn:'H5'
	},
	prod: { //部署正式服务器上
        host: '10.25.4.238', //ip地址
        user: 'nginx', //帐号
        pass: 'e2oMvaYKn8tjIXbCgobD', //密码
        port: 992, //端口
	    remotePath: '/data/czkcms/html/event/test/' //部署到服务器的路径
    },
	tinypng:{
		// key:'U1mInfMwJvJae6oLipVlH_vW7aR5M-PL',
		// key:'Mm3TE-esvH5SlKQeNt_bqhox3DTPpAlQ',
		key:'pnTA839oxQsOzcIvjZPeMZUMuatpQfDI',
	}
}