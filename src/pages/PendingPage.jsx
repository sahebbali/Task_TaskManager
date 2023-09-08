import React, { Fragment, Suspense, lazy } from "react";
import MasterLayout from "../components/masterLayout/Master-Layout";
import LazyLoader from "../components/masterLayout/LazyLoader";

const Pending = lazy(() => import("../components/Pending/Pending.jsx"));

function PendingdPage() {
  return (
    <Fragment>
      <MasterLayout>
        <Suspense fallback={<LazyLoader />}>
          <Pending />
        </Suspense>
      </MasterLayout>
    </Fragment>
  );
}

export default PendingdPage;
