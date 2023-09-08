import React, { Fragment, Suspense, lazy } from "react";
import MasterLayout from "../components/masterLayout/Master-Layout";

const AllTask = lazy(() => import("../components/AllTask/AllTask"));

function AllTaskPage() {
  return (
    <Fragment>
      <MasterLayout>
          <AllTask />
      </MasterLayout>
    </Fragment>
  );
}

export default AllTaskPage;
