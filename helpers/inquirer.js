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
                name: `${'1.'.green} Create`
            },
            {
                value: '2',
                name: `${'2.'.green} Show`
            },
            {
                value: '3',
                name: `${'3.'.green} Completed tasks`
            },
            {
                value: '4',
                name: `${'4.'.green} Pending tasks`
            },
            {
                value: '5',
                name: `${'5.'.green} Complete task`
            },
            {
                value: '6',
                name: `${'6.'.green} Delete task`
            },
            {
                value: '0',
                name: `${'0.'.green} Quit`
            }
        ]
    }
]

const inquirerMenu = async() => {
    console.clear();
    console.log('===================================='.green);
    console.log('          Select one option         '.white);
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

const readInput = async(message) => {
    const question = [
        {
            type: 'input',
            name: 'desc',
            message,
            validate(value) {
                if(value.length === 0){
                    return 'Please enter a valid value';
                }
                return true;
            }
        }
    ];
    const {desc} = await inquirer.prompt(question);
    return desc;
}

const listTasksToDelete = async( tasks = [] ) => {
    const choices = tasks.map( (task, i) => {
        return {
            value: task.id,
            name: `${i + 1}`.green + ' ' + task.desc
        }
    });

    choices.unshift({
        value: '0',
        name: '0.'.green + 'Cancelar'
    })
    
    const { id } = await inquirer.prompt([{
        type: 'list',
        name: 'id',
        message: 'Delete',
        choices
    }]);
    
    return id;
}

const confirm = async(message) => {
    const { ok } = await inquirer.prompt([{
        type: 'confirm',
        name: 'ok',
        message
    }]);
    return ok;
}

module.exports = {
    inquirerMenu,
    pause,
    readInput,
    listTasksToDelete,
    confirm
}