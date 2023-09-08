import React, { Fragment, useEffect } from "react";
import "../../assets/CSS/bootstrap.css";
const Dashboard = () => {
  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <h1> Hello Dashboard</h1>
          {/* {SummaryList.map((item)=>
                            <div key={item._id} className="col-12 col-lg-3 col-sm-6 col-md-3  p-2">
                                    <div className="card h-100">
                                        <div className="card-body">
                                            <h5 className="animated fadeInUp">Total {item._id} </h5>
                                            <h6 className="text-secondary animated fadeInUp">{item.sum}</h6>
                                        </div>
                                    </div>
                           </div>
                        )}                       */}
        </div>
      </div>
    </Fragment>
  );
};

export default Dashboard;
