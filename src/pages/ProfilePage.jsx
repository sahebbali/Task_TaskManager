import React, { Fragment, Suspense, lazy } from "react";
import MasterLayout from "../components/masterLayout/Master-Layout";

const Profile = lazy(() => import("../components/Profile/Profile"));

function ProfilePage() {
  return (
    <Fragment>
      <MasterLayout>
        <Profile />
      </MasterLayout>
    </Fragment>
  );
}

export default ProfilePage;
