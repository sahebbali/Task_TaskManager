import React, { Fragment, useEffect } from "react";
import { Container } from "react-bootstrap";
import { AiOutlineCalendar, AiOutlineDelete } from "react-icons/all";
import { AiOutlineEdit } from "react-icons/ai";
import { getTaskDetails } from "../../helper/SessionHelper";
import { UpdateToDO } from "../../helper/UpdateAlert";
import { useState } from "react";
import { DeleteToDO } from "../../helper/DeleteAlert";
const New = () => {
  const taskList = getTaskDetails();
  const [listData, setListData] = useState(taskList);
  const [searchStatus, setSearchStatus] = useState(""); // State for status search
  const [searchDueDate, setSearchDueDate] = useState("");
  // Function to filter the list based on searchQuery
  // Function to filter the list based on status and due date
  const filteredList = listData.filter((item) => {
    const statusMatch =
      item.status.toLowerCase().includes(searchStatus.toLowerCase()) ||
      searchStatus === "";

    const dueDateMatch =
      item.date.toLowerCase().includes(searchDueDate.toLowerCase()) ||
      searchDueDate === "";

    return statusMatch && dueDateMatch;
  });
  const handleSearch = () => {
    // Update the listData state with the filtered data
    setListData(filteredList);
  };

  console.log({ filteredList });

  const ResetSearch = () => {
    // Reset the search filters and show all tasks
    setSearchStatus("");
    setSearchDueDate("");
    setListData(taskList);
  };

  const DeleteItem = (id) => {
    DeleteToDO(id).then((result) => {
      console.log(id);
      if (result === true) {
        console.log("Delete Successfull");
      }
    });
  };

  const StatusChangeItem = (id, status) => {
    console.log(id, status);
    UpdateToDO(id, status)
      .then((result) => {
        if (result === true) {
          console.log("Data Updated");
          window.location.reload();
        }
      })
      .catch((error) => {
        console.error("Update failed:", error.message);
      });
    window.location.reload();
  };

  const getStatusBackgroundColorClass = (status) => {
    switch (status) {
      case "Completed":
        return "completed";
      case "Pending":
        return "pending";
      case "Progress":
        return "progress";
      default:
        return "";
    }
  };

  return (
    <Fragment>
      <Container fluid={true} className="content-body">
        <div className="row p-0 m-0">
          <div className="col-4 col-md-2 col-lg-4 px-3">
            <h5> All Task</h5>
          </div>
          <div className="col-12 float-end col-md-6 col-lg-8 px-2 d-flex justify-content-center">
            <div className="row">
              <div className="col-4 flex">
                <input
                  className="form-control w-100"
                  placeholder="Search by due date"
                  type="date"
                  value={searchDueDate}
                  onChange={(e) => setSearchDueDate(e.target.value)}
                />
              </div>
              <div className="col-4 flex">
                <input
                  className="form-control w-100"
                  placeholder="Search by status"
                  value={searchStatus}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="col-2 flex">
                <button
                  className="btn btn-primary w-100"
                  onClick={handleSearch}
                >
                  Search
                </button>
              </div>
              <div className="col-2 flex">
                <button
                  className="btn btn-secondary w-100"
                  onClick={ResetSearch}
                >
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row p-0 m-0">
          {filteredList.length > 0 ? (
            filteredList.map((item) => (
              <div
                key={item.id}
                className="col-12 col-lg-4 col-sm-6 col-md-4  p-2"
              >
                <div className="card h-100">
                  <div className="card-body">
                    <h6 className="animated fadeInUp">{item.title}</h6>
                    <p className="animated fadeInUp">{item.description}</p>
                    <p className="m-0 animated fadeInUp p-0">
                      Due Date: <AiOutlineCalendar /> {item.date}
                    </p>
                    <a
                      onClick={StatusChangeItem.bind(
                        this,
                        item.id,
                        item.status
                      )}
                      className="icon-nav text-primary mx-1"
                    >
                      <AiOutlineEdit />
                    </a>
                    <a
                      onClick={DeleteItem.bind(this, item.id)}
                      className="icon-nav text-danger mx-1"
                    >
                      <AiOutlineDelete />
                    </a>{" "}
                    <a
                      className={`badge float-end ${
                        item.status === "Completed"
                          ? "bg-primary"
                          : item.status === "Pending"
                          ? "bg-warning"
                          : item.status === "Progress"
                          ? "bg-danger"
                          : ""
                      }`}
                    >
                      status: {item.status}
                    </a>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <Container className="d-flex justify-content-center align-items-center vh-100">
              <h1 className="p-10 my-10">No Data Found</h1>
            </Container>
          )}
        </div>
      </Container>
    </Fragment>
  );
};

export default New;
