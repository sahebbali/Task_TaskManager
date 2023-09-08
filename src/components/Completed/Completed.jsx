import React, { Fragment, useEffect } from "react";
import { Container } from "react-bootstrap";
import { AiOutlineCalendar, AiOutlineDelete } from "react-icons/all";
import { AiOutlineEdit } from "react-icons/ai";
import { getTaskDetails } from "../../helper/SessionHelper";
import { DeleteToDO } from "../../helper/DeleteAlert";
import { UpdateToDO } from "../../helper/UpdateAlert";

const Completed = () => {
  const tasks = getTaskDetails();
  const CompletedList = tasks.filter((task) => task.status === "Completed");
  console.log({ CompletedList });
  const DeleteItem = (id) => {
    DeleteToDO(id).then((result) => {
      if (result === true) {
      }
    });
  };

  const StatusChangeItem = (id, status) => {
    UpdateToDO(id, status).then((result) => {
      if (result === true) {
      }
    });
  };

  return (
    <Fragment>
      <Container fluid={true} className="content-body">
        <div className="row p-0 m-0">
          <div className="col-12 col-md-6 col-lg-8 px-3">
            <h5>Task Completed</h5>
          </div>
          <div className="col-12 float-end col-md-6 col-lg-4 px-2">
            <div className="row">
              <div className="col-8">
                <input className="form-control w-100" />
              </div>
              <div className="col-4">
                <button className="btn btn-primary w-100">Search</button>
              </div>
            </div>
          </div>
        </div>
        <div className="row p-0 m-0">
          {CompletedList.length > 0 ? (
            CompletedList.map((item, i) => (
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
                    </a>
                    <a className="badge float-end bg-danger">
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

export default Completed;
