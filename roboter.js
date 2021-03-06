'use strict';

const roboter = require('roboter');

roboter
	.workOn('server')
	.equipWith(task => {
		task('universal/analyze', {
			src: ['**/*.js', '!node_modules/**/*.js'],
			rules: '.eslintrc.json'
		});
		task('universal/license', {
			disable: true
		});
	})
.start();
