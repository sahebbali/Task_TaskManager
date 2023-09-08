import React, {Fragment, Suspense, lazy} from 'react'
import MasterLayout from '../components/masterLayout/Master-Layout';
import LazyLoader from '../components/masterLayout/LazyLoader';
const  Login = lazy(()=> import ('../components/Login/Login'))

function LoginPage() {
  return (
    <Fragment>
    <MasterLayout>
      <Suspense fallback={<LazyLoader />}>
       <Login/>
      </Suspense>
    </MasterLayout>
  </Fragment>
  )
}

export default LoginPage
