import React, { Fragment, Suspense, lazy } from "react";
import MasterLayout from "../components/masterLayout/Master-Layout";

const Registration = lazy(() =>
  import("../components/Registration/Registration")
);

function RegistrationPage() {
  return (
    <Fragment>
      <MasterLayout>
        <Registration />
      </MasterLayout>
    </Fragment>
  );
}

export default RegistrationPage;
