const argv = require('./config/yargs').argv;
const colors = require('colors');



let comando = argv._[0]

switch (comando) {
    case 'listar':
        console.log('====================='.green);
        console.log('Listar'.red);
        console.log('====================='.green);
        break;

    case 'crear':
        console.log('crear');
        break;

    default:
        console.log('comando no reconocido');
}

//let argv2 = process.argv;
//console.log(argv);
//console.log(argv2);

//console.log(argv.base);
//console.log(argv.limite);

//let parametro = argv[2];
//let base = parametro.split('=')[1]

//console.log(base);