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
}

module.exports = Tasks;