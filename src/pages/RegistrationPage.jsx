import React, {Fragment, Suspense, lazy} from 'react'
import MasterLayout from '../components/masterLayout/Master-Layout';
import LazyLoader from '../components/masterLayout/LazyLoader';

const  Registration = lazy(()=> import ('../components/Registration/Registration'))

function RegistrationPage() {
  return (
    <Fragment>
    <MasterLayout>
      <Suspense fallback={<LazyLoader />}>
         <Registration />
      </Suspense>
    </MasterLayout>
  </Fragment>
  )
}

export default RegistrationPage
