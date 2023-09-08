import React, { useRef } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Container, Row } from "react-bootstrap";
import "../../assets/CSS/bootstrap.css";
import { ErrorToast, IsEmpty } from "../../helper/FormHelper";
import { useNavigate } from "react-router-dom";

const Create = () => {
  let titleRef,
    descriptionRef,
    dateRef,
    levelRef = useRef();
  let navigate = useNavigate();

  const CreateNew = () => {
    let title = titleRef.value;
    let description = descriptionRef.value;
    let date = dateRef.value;
    let level = levelRef.value;
    // Function to generate a unique ID
    const generateUniqueId = () => {
      return "_" + Math.random().toString(36).substr(2, 9);
    };
    if (IsEmpty(title)) {
      ErrorToast("Title Required");
    } else if (IsEmpty(description)) {
      ErrorToast("Description Required");
    } else if (IsEmpty(date)) {
      ErrorToast("Due Date Required");
    } else if (IsEmpty(level)) {
      ErrorToast("priority level is Required");
    } else {
      // Generate a unique ID
      const id = generateUniqueId();

      // Retrieve existing data from local storage and parse it
      let existingData = JSON.parse(localStorage.getItem("myData"));

      // If existingData is not an array or is null/undefined, initialize it as an empty array
      if (!Array.isArray(existingData)) {
        existingData = [];
      }

      const task = { id, title, description, date, level, status: "Pending" };

      // Add the new task to the existing data
      existingData.push(task);

      // Convert the array to a JSON string
      const dataJSON = JSON.stringify(existingData);

      // Store the JSON string in local storage
      localStorage.setItem("myData", dataJSON);

      toast.success("Task Created");
      navigate("/AllTask");
    }
  };

  return (
    <Container fluid={true} className="content-body">
      <Row className="d-flex justify-content-center">
        <div className="col-12 col-lg-8  col-sm-12 col-md-8  p-2">
          <div className="card">
            <div className="card-body">
              <h4>Create Task</h4>
              <br />
              <input
                ref={(input) => (titleRef = input)}
                placeholder="Task Title"
                className="form-control animated fadeInUp"
                type="text"
              />
              <br />
              <textarea
                ref={(input) => (descriptionRef = input)}
                rows={5}
                placeholder="Task Description"
                className="form-control animated fadeInUp"
                type="text"
              />
              <br />
              <div className="d-flex gap-5">
                <div>
                  <input
                    ref={(input) => (dateRef = input)}
                    placeholder="Due Date"
                    className="form-control animated fadeInUp"
                    type="date"
                  />
                </div>
                <div className="col-4">
                  <select
                    ref={(select) => (levelRef = select)}
                    className="form-control animated fadeInUp"
                  >
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                  </select>
                </div>
              </div>
              <br />
              <button onClick={CreateNew} className="btn float-end btn-primary">
                Create
              </button>
            </div>
          </div>
        </div>
      </Row>
      <Toaster />
    </Container>
  );
};
export default Create;
