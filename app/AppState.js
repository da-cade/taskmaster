import { List } from "./Models/List.js"
import { Task } from "./Models/Task.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

let listPojos = [
  {id: '', listName: "Garden", numTasks: '', color: '#4400FF'},
  {id: '', listName: "Grocery", numTasks: '', color: '#FFF833'},
  {id: '', listName: "Experiments", numTasks: '', color: '#00FF6E'}]
let garden = new List(listPojos[0])
let grocery = new List(listPojos[1])
let expirements = new List(listPojos[2])

let taskPojos = [
  {id: '', taskContent: "Weed the planter boxes", parentListId: garden.id, completed: ''},
  {id: '', taskContent: "Entire fried chicken", parentListId: grocery.id, completed: ''},
  {id: '', taskContent: "Marmelade", parentListId: grocery.id, completed: ''},
  {id: '', taskContent: "Cat head feet?", parentListId: expirements.id, completed: ''},
  {id: '', taskContent: "Eat an entire fried chicken in one sitting", parentListId: expirements.id, completed: ''}]

let weeding = new Task(taskPojos[0])
let friedChicken = new Task(taskPojos[1])
let marmelade = new Task(taskPojos[2])
let catGMO = new Task(taskPojos[3])
let eatChicken = new Task(taskPojos[4])

class AppState extends EventEmitter {
  /** @type {import('./Models/List').List[]} */
  toDoLists = [garden, grocery, expirements]
  tasks = [weeding, friedChicken, marmelade, catGMO, eatChicken]
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
