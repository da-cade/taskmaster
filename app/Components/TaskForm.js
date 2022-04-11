
export function getTaskForm(formID){
  return /*html*/ `
  <label for="${formID}" name="taskContent" class="form-label visually-hidden">Create Task</label>
  <input type="text" minlength='3' maxlength='50' class="form-control" id="taskContent" aria-describedby="create-task"
  placeholder="Add a Task...">
  `
}