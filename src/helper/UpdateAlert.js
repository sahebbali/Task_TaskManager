import Swal from "sweetalert2";
import { getTaskDetails } from "./SessionHelper";

export function UpdateToDO(id, status) {
  // Retrieve tasks from local storage
  const tasks = getTaskDetails();

  // Find the task with the specified id
  const taskToUpdate = tasks.find((task) => task.id === id);

  if (taskToUpdate) {
    Swal.fire({
      title: "Change Status",
      input: "select",
      inputOptions: {
        New: "New",
        Completed: "Completed",
        Progress: "Progress",
        Canceled: "Canceled",
      },
      inputValue: status,
    }).then((result) => {
      if (result && result.value) {
        // Update the status of the task
        taskToUpdate.status = result.value;

        // Find the index of the task in the array
        const indexToUpdate = tasks.findIndex((task) => task.id === id);

        // Update the task in the array
        if (indexToUpdate !== -1) {
          tasks[indexToUpdate] = taskToUpdate;

          // Save the updated tasks back to local storage
          localStorage.setItem("myData", JSON.stringify(tasks));

          console.log("Selected value:", result.value);
          window.location.reload();
        } else {
          console.error("Task not found in the array.");
        }
      } else {
        console.error("Result or result.value is undefined or falsy.");
      }
    });
  } else {
    // Handle the case where the task with the specified id was not found
    Swal.fire({
      title: "Error",
      text: "Task not found",
      icon: "error",
    });
  }
}
