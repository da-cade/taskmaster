import { generateId } from "../Utils/generateId.js";


export class Task {
  constructor({id, taskContent, parentListId, completed}){
    this.id = id || generateId(),
    this.taskContent = taskContent,
    this.parentListId = parentListId || '' /* REVIEW this will eventually lose the pipes */
    this.completed = completed || false
    
    if(!this.taskContent){
      throw new Error ("These tasks gotta have names")
    }
    if((this.taskContent).length <= 1){
      throw new Error ("Your task needs to be longer than one letter, buddy")
    }
  }

  get TaskTemplate(){
    return /*html*/`
    <div class="task-row p-2">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="${this.id}-${this.completed}" onclick="app.tasksController.changeCompletion('${this.id}')" ${this.completed ? 'checked' : ''}>
        <label class="form-check-label pe-1" for="${this.id}-${this.completed}" ${this.completed === false ? '' : "style='text-decoration: line-through;'"}>${this.taskContent}</label>
      </div>
      <button class="ms-auto btn btn-delete" onclick="app.tasksController.deleteTask('${this.id}')"><i class="mdi mdi-delete-circle-outline"></i>
      </button>
    </div>
    `
  }
  // set TaskCompleted(taskID){
  //   (taskID ? :)
  // }
}