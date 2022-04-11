import { ProxyState } from "../AppState.js";
import { Task } from "../Models/Task.js";
import { listsService } from "./ListService.js";

class TasksService{
  changeCompletion(taskID) {
    let task = ProxyState.tasks.find(t => t.id === taskID)
    task.completed ? task.completed = false : task.completed = true
    listsService.tallyTasks()
    ProxyState.tasks = [...ProxyState.tasks]
    ProxyState.toDoLists = [...ProxyState.toDoLists]
  }
  addTask(formData) {
    const newTask = new Task(formData)
    ProxyState.tasks = [newTask, ...ProxyState.tasks]
  }
  deleteTask(taskID) {
    const newTasks = ProxyState.tasks.filter(t => t.id !== taskID)
    ProxyState.tasks = newTasks
  }
}

export const tasksService = new TasksService();