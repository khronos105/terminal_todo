
require('colors');
const { 
    inquirerMenu, 
    pause,
    readInput,
    listTasksToDelete,
    confirm,
    checkCompleteList
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
                tasks.listTasks();
                break;
            case '3':
                tasks.listByState();
                break;
            case '4':
                tasks.listByState(false);
                break;
            case '5':
                const ids = await checkCompleteList(tasks.listArr);
                tasks.toggleCompleted(ids);
                break;
            case '6':
                const id = await listTasksToDelete(tasks.listArr);
                if(id !== '0'){
                    const ok = await confirm('Are you sure?');
                    if(ok) {
                        tasks.delete(id);
                        console.log('Task was deleleted successfully!');
                    }
                }
                break;
        }

        saveDB(tasks.listArr);

        await pause();
    }while(opt !== '0');
}

main();