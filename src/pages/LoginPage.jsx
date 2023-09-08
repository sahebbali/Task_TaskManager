import React, {Fragment, Suspense, lazy} from 'react'
import MasterLayout from '../components/masterLayout/Master-Layout';

import Login from '../components/Login/Login'

function LoginPage() {
  return (
    <Fragment>
    <MasterLayout>
      
       <Login/>
      
    </MasterLayout>
  </Fragment>
  )
}

export default LoginPage
