import React, {Fragment, Suspense, lazy} from 'react'
import MasterLayout from '../components/masterLayout/Master-Layout';


const  Create = lazy(()=> import ('../components/Create/Create'))

function CreatePage() {
  return (
    <Fragment>
    <MasterLayout>
          <Create/>
    </MasterLayout>
  </Fragment>
  )
}

export default CreatePage
