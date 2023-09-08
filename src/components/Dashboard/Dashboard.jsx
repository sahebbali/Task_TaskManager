import React, { Fragment, useEffect } from "react";
import "../../assets/CSS/bootstrap.css";
import { getTaskDetails } from "../../helper/SessionHelper";
import { useNavigate } from "react-router-dom";
const Dashboard = () => {
  const tasks = getTaskDetails();

  const ProgressList = tasks.filter((task) => task.status === "Progress");
  const PendingList = tasks.filter((task) => task.status === "Pending");
  const CompletedList = tasks.filter((task) => task.status === "Completed");
  const navigete = useNavigate();
  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <h1> Hello Dashboard</h1>

          <div
            className="col-12 col-lg-5 col-sm-6 col-md-3  p-2 cursor-pointer"
            onClick={() => navigete("/AllTask")}
          >
            <div className="card h-100">
              <div className="card-body">
                <h3 className="animated fadeInUp">
                  Total Task: {tasks.length}{" "}
                </h3>
                <h6 className="text-secondary animated fadeInUp"></h6>
              </div>
            </div>
          </div>

          <div
            className="col-12 col-lg-5 col-sm-6 col-md-3  p-2 cursor-pointer"
            onClick={() => navigete("/Progress")}
          >
            <div className="card h-100">
              <div className="card-body">
                <h3 className="animated fadeInUp">
                  Total Progress Task: {ProgressList.length}
                </h3>
                <h6 className="text-secondary animated fadeInUp"></h6>
              </div>
            </div>
          </div>

          <div
            className="col-12 col-lg-5 col-sm-6 col-md-3  p-2 cursor-pointer"
            onClick={() => navigete("/Panding")}
          >
            <div className="card h-100">
              <div className="card-body">
                <h3 className="animated fadeInUp">
                  Total Pending Task: {PendingList.length}
                </h3>
                <h6 className="text-secondary animated fadeInUp"></h6>
              </div>
            </div>
          </div>

          <div
            className="col-12 col-lg-5 col-sm-6 col-md-3  p-2 cursor-pointer"
            onClick={() => navigete("/Completed")}
          >
            <div className="card h-100">
              <div className="card-body">
                <h3 className="animated fadeInUp">
                  Total Completed Task: {CompletedList.length}
                </h3>
                <h6 className="text-secondary animated fadeInUp"></h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Dashboard;
