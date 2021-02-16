const inquirer = require('inquirer');
require('colors');

const qOpts = [
    {
        type: 'list',
        name: 'opt',
        message: 'What do you wish to do?',
        choices: [
            {
                value: '1',
                name: '1. Create'
            },
            {
                value: '2',
                name: '2. Show'
            },
            {
                value: '3',
                name: '3. Completed tasks'
            },
            {
                value: '4',
                name: '4. Pending tasks'
            },
            {
                value: '5',
                name: '5. Complete task'
            },
            {
                value: '6',
                name: '6. Delete task'
            },
            {
                value: '0',
                name: '0. Quit'
            }
        ]
    }
]

const inquirerMenu = async() => {
    console.clear();
    console.log('===================================='.green);
    console.log('          Select one option         '.green);
    console.log('====================================\n'.green);

    const { opt } = await inquirer.prompt(qOpts);
    return opt;
}

const pause = async() => {
    await inquirer.prompt([{
        type: 'input',
        name: 'opt',
        message: `\nPresione ${'ENTER'.green} para continuar`,
    }]);
}

module.exports = {
    inquirerMenu,
    pause
}