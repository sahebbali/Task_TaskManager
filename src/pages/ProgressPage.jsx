import React, { Fragment, Suspense, lazy } from "react";
import MasterLayout from "../components/masterLayout/Master-Layout";

const Progress = lazy(() => import("../components/Progress/Progress"));

function ProgressPage() {
  return (
    <Fragment>
      <MasterLayout>
        <Progress />
      </MasterLayout>
    </Fragment>
  );
}

export default ProgressPage;
