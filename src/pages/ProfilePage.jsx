import React, {Fragment, Suspense, lazy} from 'react'
import MasterLayout from '../components/masterLayout/Master-Layout';
import LazyLoader from '../components/masterLayout/LazyLoader';
const  Profile = lazy(()=> import ('../components/Profile/Profile'))

function ProfilePage() {
  return (
    <Fragment>
      <MasterLayout>
        <Suspense fallback={<LazyLoader />}>
            <Profile/>
        </Suspense>
      </MasterLayout>
    </Fragment>
  )
}

export default ProfilePage
