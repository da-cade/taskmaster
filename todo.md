// Define items based on design or functionality, then subcategories

// If design, subcategories based on their functions: draw, static, or neither.

// If functional, determine its parenthood and its relationship to the page.

// Advice: "anything can have an onclick", "prevent default immediately when writing form functions"

Plan - 
// One data model? List. 
Properties: name, completed/tasks, tasks
Consult formatting sheets.

Requirements >  All tasks are rendered on load/reload
		[x] Lists are displayed out in columns across the page
		[x] Lists can be Created
		[x] Lists and tasks each have a delete button
		[x] List creation must include a title limited to 3-15 chars
		[x] List creation must include a color picker or minimum 5 different colors
		[x] Lists include a count of all tasks compared to uncompleted tasks
		[x] Each List must have its own Task form REVIEW {refactor }
		[x] Task title/body must be between 3-50 characters
		[x] Tasks can be marked complete, this will persist on reload (stretch 3, lists too?)
		[x] Forms should not submit unless the fields adhere to the requirements
		[x] Lists can be Deleted (this will also delete its tasks)
		[x] Tasks can be Deleted separately from being Complete
		[x] Users are prompted to confirm any delete (stretch 2)
		[x] All Data persists through local storage
       Use localStorage.save/load.JSON.method

Stretch goals > Use something like 'masonry' to render the lists more elegantly
		[x] Use a better popup than window.confirm for a cleaner experience
		[x] Play with styling on completed tasks to include strikethrough
		[] Add Toasts to celebrate completed tasks

Styles >
    [] Fix color picker
    [x] Neon title
      [x] Glow?
    [] On active shape change?
    [x] Change color styling to glow?
    [] Change checkbox checked color (SASS $form-check-input-checked-color: $component-active-color;)
    [] 