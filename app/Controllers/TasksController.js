import { ProxyState } from "../AppState.js"
import { Pop } from "../Utils/Pop.js"
import { tasksService } from "../Services/TasksService.js"
import { getTaskForm } from "../Components/TaskForm.js"

function _drawTasks(){
  ProxyState.toDoLists.forEach(listItem => {
    let indivListContentTemplate = ""
    let templatePageID = "task-template-landing-"
    
    const tasks = ProxyState.tasks.filter(taskItem => (listItem.id === taskItem.parentListId))
    templatePageID += listItem.id
    
    tasks.forEach(t => indivListContentTemplate += t.TaskTemplate)

    let formID = "task-container-" + listItem.id
    document.getElementById(templatePageID).innerHTML = indivListContentTemplate
    // put this in a form doc
    document.getElementById(formID).innerHTML = getTaskForm(formID)
  })
}


export class TasksController{
  constructor(){
    ProxyState.on("toDoLists", _drawTasks)
    ProxyState.on("tasks", _drawTasks)
    _drawTasks()
  }
  addTask(suppliedParentID){
    try {
      event.preventDefault()
      // @HTMLFormElement
      const formElem = event.target
      const formData = {
        id: '',
        // @ts-ignore
        taskContent: formElem.taskContent.value,
        parentListId: suppliedParentID,
        completed: ''
        }
      tasksService.addTask(formData)
      const input = "task-container-" + suppliedParentID
      document.getElementById(input).querySelector('input').focus()
    } catch (error) {
        console.error("TASK FORM ADDITION ERROR", "error")
        Pop.toast(error.message, "error")
    }
  }
  async deleteTask(taskID){
    if(await Pop.confirm() && ProxyState.tasks.find(task => (task.id === taskID))
    ){
      tasksService.deleteTask(taskID)
    }
  }
  changeCompletion(taskID){
    if(ProxyState.tasks.filter(t => t.id === taskID)){
      tasksService.changeCompletion(taskID)
    }
  }
}