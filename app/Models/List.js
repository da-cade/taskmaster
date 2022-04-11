import { generateId } from "../Utils/generateId.js";


export class List {
  constructor({id, listName, numTasks, numTasksCompleted, color}){
    this.id = id || generateId()
    this.listName = listName,
    this.numTasks = numTasks || 0
    this.numTasksCompleted = numTasksCompleted || 0
    this.color = color || ''
    
    if(!this.listName){
      throw new Error ("A list item requires a name.")
    }
    if(this.listName.length <= 3 || this.listName.length >= 15){
      throw new Error ("Keep the name between 3 and 15 characters")
    }
  }
  get ListTemplate(){
    return /*html*/ `
    <div class="col-md-4 col-sm-6 col-xs-12 d-flex justify-content-center g-0 p-2 list-col">
      <div class="d-flex flex-column list-box shadow rounded-top rounded-bottom">
        <div class="list-header rounded-top ps-1" style="outline-color: ${this.color}!important; box-shadow: inset 0px 0px 30px 0px ${this.color};">
          <div class="d-flex align-items-center">
            <h6 class="ms-3 mb-0 my-1">${this.listName}</h6>
            <button class="ms-auto btn btn-delete" onclick="app.listsController.deleteList('${this.id}')"><i
            class="mdi mdi-delete-circle-outline"></i></button>
          </div>
          <div class="d-flex justify-content-center">
            <span id="${this.id}-completion-value">${this.numTasks > 0 ? this.numTasksCompleted + ' /' : ''}</span>
            <span id="${this.id}-total-tasks">${this.numTasks > 0 ? this.numTasks + '  Completed': ''}</span><!-- ternary here to not show if second value is 0 --> 
          </div>
        </div>
        <div class="list-body" id="task-template-landing-${this.id}">
          <!-- tasks go here -->
        </div>
        <form class="mt-auto px-1" id="task-${this.id}" onsubmit="app.tasksController.addTask('${this.id}')">
          <div class="task-form my-2" id='task-container-${this.id}'>
          <!--task form drawn here-->
          </div>
        </form>
      </div>
    </div>
    `
  }

}