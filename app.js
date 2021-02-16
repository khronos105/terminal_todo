
require('colors');
const { 
    inquirerMenu, 
    pause,
    readInput
} = require('./helpers/inquirer');
const { saveDB, readDB } = require('./helpers/saveFile');
const Task = require('./models/task');
const Tasks = require('./models/tasks');

const main = async() => {
    console.clear();
    let opt = '';
    const tasks = new Tasks();

    const dbTasks = readDB();
    if(dbTasks){
        tasks.loadData(dbTasks);
    }

    do{
        opt = await inquirerMenu();

        switch(opt){
            case '1':
                const desc = await readInput('Description:');
                tasks.createTask(desc);
                break;
            case '2':
                console.log(tasks.listArr);
                break;
        }

        saveDB(tasks.listArr);

        await pause();
    }while(opt !== '0');
}

main();