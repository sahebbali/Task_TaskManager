import React, { Fragment, Suspense, lazy } from "react";
import MasterLayout from "../components/masterLayout/Master-Layout";
import LazyLoader from "../components/masterLayout/LazyLoader";

const AllTask = lazy(() => import("../components/AllTask/AllTask"));

function AllTaskPage() {
  return (
    <Fragment>
      <MasterLayout>
        <Suspense fallback={<LazyLoader />}>
          <AllTask />
        </Suspense>
      </MasterLayout>
    </Fragment>
  );
}

export default AllTaskPage;
