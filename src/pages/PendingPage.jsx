import React, { Fragment, Suspense, lazy } from "react";
import MasterLayout from "../components/masterLayout/Master-Layout";

const Pending = lazy(() => import("../components/Pending/Pending.jsx"));

function PendingdPage() {
  return (
    <Fragment>
      <MasterLayout>
        <Pending />
      </MasterLayout>
    </Fragment>
  );
}

export default PendingdPage;
