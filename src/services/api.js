class Service {

  tasks = [{ id: 1, spec: 'Task: realize the read data from Google Analytics' }, 
           { id: 2, spec: 'Task: reverse puse check of changes' },
           { id: 3, spec: 'Task: develop the qiuck local app.' }
          ];

  view() {
    return this.tasks;
  }

  getNewID() {
    let maxID = 0;
    this.tasks.forEach((item, index) => {
      if (item.id > maxID) {
        maxID = item.id;
      }
    });
    return maxID + 1;
  }

  add(_spec) {
    let _id = this.getNewID();
    this.tasks.push({ id: _id, spec: _spec });
  }

  del(id) {
    console.log('@Service @del');
    let _index;
    for (_index = 0; _index <= this.tasks.length; _index++) {
      if (this.tasks[_index].id === id) {
        break;
      }
    }
    this.tasks.splice(_index, 1);
  }

  edit(id, spec) {
    let i;
    for (i = 0; i < this.tasks.length; i++) {
      if (this.tasks[i].id == id) {
        console.log('= found =');
        break;
      }
    }
    this.tasks[i].spec = spec;
    console.log(this.tasks);
  }

}

const service = new Service();
export default service;

