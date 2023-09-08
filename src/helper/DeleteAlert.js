import Swal from "sweetalert2";

export function DeleteToDO(id) {
  return Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      // Retrieve existing data from local storage
      let existingData = JSON.parse(localStorage.getItem("myData")) || [];

      // Find the index of the data entry with the specified id
      const dataIndex = existingData.findIndex((entry) => entry.id === id);

      if (dataIndex !== -1) {
        // Remove the data entry with the specified id
        existingData.splice(dataIndex, 1);

        // Save the updated data (without the removed entry) back to local storage
        localStorage.setItem("myData", JSON.stringify(existingData));
      }
      window.location.reload();
    }
  });
}
