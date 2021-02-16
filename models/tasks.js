const Task = require('./task');
/**
 * _list:
 *  { 'uuid-1234515-123131-2: { id:12, desc: asd, completedAt: 1231231} }
 */
class Tasks{
    _list = {};

    constructor(){
        this._list = {};
    }

    createTask(desc = ''){
        const task = new Task(desc);
        this._list[task.id] = task;
    }

    get listArr() {
        const list = [];
        Object.keys(this._list).forEach(key => {
            list.push(this._list[key]);
        });
        return list;
    }

    loadData(items){
        items.forEach((item) => {
            const task = new Task();
            task.id = item.id;
            task.desc = item.desc;
            task.completedAt = item.completedAt;
            this._list[task.id] = task
        });
    }

    listTasks() {
        this.listArr.forEach((task, i) => {
            let msg = `${i+1}.`.green;
            msg +=  task.details;
            console.log(msg);
        })
    }

    listByState(completed = true) {
        this.listArr
            .filter( item => {
                return (item.completedAt != null && completed == true) || 
                    (item.completedAt == null && completed == false);
            })
            .forEach((task, i) => {
                let msg = `${i+1}.`.green;
                msg +=  task.details;
                console.log(msg);
            }); 
    }

    delete(id = ''){
        if(this._list[id]){
            delete this._list[id];
        }
    }

    toggleCompleted(ids = []){
        ids.forEach( id => {
            const task = this._list[id];
            if( !task.completedAt ){
                task.completedAt = new Date().toISOString();
            }
        });
        this.listArr.forEach( task => {
            if(!ids.includes(task.id)){
                this._list[task.id].completedAt = null;
            }
        })
    }
}

module.exports = Tasks;