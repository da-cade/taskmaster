import { ProxyState } from "../AppState.js"
import { List } from "../Models/List.js"
import { Task } from "../Models/Task.js"
import { Pop } from "./Pop.js"

export function saveState() {
  let data = {
    lists: ProxyState.toDoLists,
    tasks: ProxyState.tasks
  }
  window.localStorage.setItem('taskmaster', JSON.stringify(data))
}


export function loadState() {
  try {
    let data = window.localStorage.getItem('taskmaster')
    if (data) {
      let obj = JSON.parse(data)
      ProxyState.toDoLists = obj.lists.map(list => new List(list))
      ProxyState.tasks = obj.tasks.map(task => new Task(task))
    }
  } catch (error) {
      console.error("We couldn't find any save data", "error")
      // Pop.toast(error.message, "error")
  }
}