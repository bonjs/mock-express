var router = {
	'/': 'hello world',
	'/admin': {
	    'list|1-10': [{
	        'id|+1': 1
	    }]
	},
	'/userList': {
	    'userList|10': [{
	       'id': /\w{32}/,
        	'name': /[a-z]{3,6}/
	    }]
	},
	'/user': {
		'id': /\w{32}/,
        'name': /[a-z]{3,6}/
	}
};
exports.router = router;