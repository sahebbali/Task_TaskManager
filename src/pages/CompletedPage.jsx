import React, { Fragment, Suspense, lazy } from "react";
import MasterLayout from "../components/masterLayout/Master-Layout";
import Completed from "../components/Completed/Completed";
function CompletedPage() {
  return (
    <Fragment>
      <MasterLayout>
        <Completed />
      </MasterLayout>
    </Fragment>
  );
}

export default CompletedPage;
