import { ProxyState } from "../AppState.js"
import { List } from "../Models/List.js"


class ListService{
  tallyTasks() {
    ProxyState.toDoLists.forEach(listItem => {
      let listItemID = listItem.id
      const matchedTasks = ProxyState.tasks.filter(t => t.parentListId === listItemID)
      listItem.numTasks = matchedTasks.length
      const matchedCompletedTasks = matchedTasks.filter(mt => mt.completed === true)
      listItem.numTasksCompleted = matchedCompletedTasks.length
      // console.log(listItem)
    })
    // ProxyState.toDoLists = [...ProxyState.toDoLists]
  }
  addList(formData){
    const newList = new List(formData)
    ProxyState.toDoLists = [newList, ...ProxyState.toDoLists]
  }
  deleteList(listId) {
    ProxyState.toDoLists = ProxyState.toDoLists.filter(l => l.id !== listId)
  }
  // changeCompletion(taskID, parentID){
  //   // let tag = parentID + "-completion-value"
  //   let listInstance = ProxyState.toDoLists.find(l => l.id == parentID)
  //   let taskInstance = ProxyState.tasks.find(t => t.id == taskID)
  //   // taskInstance.completed ? listInstance.numTasksCompleted += 1 : listInstance.numTasksCompleted -= 1
  //   // document.getElementById(tag).innerText = listInstance.numTasksCompleted
  // }
}

export const listsService = new ListService();