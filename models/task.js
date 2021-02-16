const { v4:uuidv4 } = require('uuid');

class Task{
    id = '';
    desc = '';
    completedAt = null;

    constructor( desc ) {
        this.id = uuidv4();
        this.desc = desc;
    }

    get details(){
        let msg = `Title: ${this.desc}:: `;
        (this.completedAt) ? msg += `Completed at: ${this.completedAt}`.green : msg += `Status: Pending`.red;
        return msg;
    }
}

module.exports = Task;