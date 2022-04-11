import { ProxyState } from "../AppState.js"
import { listsService } from "../Services/ListService.js"
import { tasksService } from "../Services/TasksService.js"
import { loadState, saveState } from "../Utils/LocalStorage.js"
import { Pop } from "../Utils/Pop.js"

function _drawLists(){
  let tempListTemplate = ""
  listsService.tallyTasks()
  ProxyState.toDoLists.forEach(listItem => tempListTemplate += listItem.ListTemplate)
  document.getElementById('list-container').innerHTML = tempListTemplate
  saveState()
}

export class ListsController {
  constructor(){
    loadState()
    ProxyState.on("toDoLists", _drawLists)
    ProxyState.on("tasks", _drawLists)
    _drawLists()
  }
  addList(){
    try {
      event.preventDefault()
      /**@type {HTMLFormElement} */
      // @ts-ignore
      const formElem = event.target
      const formData = {
        id: '',
        listName: formElem.listName.value,
        numTasks: '',
        color: formElem.colorpicker.value}
      listsService.addList(formData)
      formElem.reset()
      } catch (error){
      console.error('[ADD_LIST_FORM_ERROR]', error)
      Pop.toast(error.message, 'error')
    }
  }

  async deleteList(listId){
    if(await Pop.confirm("Delete this List?", "You can't undo this.", "warning", "Yes, I'm sure.")
    && ProxyState.toDoLists.find(list => (list.id === listId))
    ){
      let matchingTasks = ProxyState.tasks.filter(task => listId === task.parentListId)
      matchingTasks.forEach(mt => tasksService.deleteTask(mt.id))
      listsService.deleteList(listId)
    }
  }
}