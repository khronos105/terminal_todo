const { resolve } = require('path');

require('colors');

const menu = () => {

    return new Promise( resolve => {
        console.clear();
        console.log('===================================='.green);
        console.log('          Select one option         '.green);
        console.log('====================================\n'.green);
    
        console.log(`${ '1.'.green } Create`);
        console.log(`${ '2.'.green } Show`);
        console.log(`${ '3.'.green } Completed tasks`);
        console.log(`${ '4.'.green } Pending tasks`);
        console.log(`${ '5.'.green } Finish task`);
        console.log(`${ '6.'.green } Delete task`);
        console.log(`${ '0.'.green } Quit`);
    
        const readLine = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
    
        readLine.question('Seleccione una opcion: ', (opt) => {
            readLine.close();
            resolve(opt);
        });
    });

}

const pause = () => {
    return new Promise( resolve => {
        const readLine = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readLine.question(`\nPresione ${'ENTER'.green} para continuar\n`, (opt) => {
            readLine.close();
            resolve();
        });
    });
}

module.exports = {
    menu,
    pause
}