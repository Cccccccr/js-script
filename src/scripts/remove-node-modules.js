const shell = require('shelljs');

shell.exec('find ./* -name node_modules | xargs rm -rf');
