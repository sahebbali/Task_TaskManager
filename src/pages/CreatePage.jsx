import React, {Fragment, Suspense, lazy} from 'react'
import MasterLayout from '../components/masterLayout/Master-Layout';
import LazyLoader from '../components/masterLayout/LazyLoader';

const  Create = lazy(()=> import ('../components/Create/Create'))

function CreatePage() {
  return (
    <Fragment>
    <MasterLayout>
      <Suspense fallback={<LazyLoader />}>
          <Create/>
      </Suspense>
    </MasterLayout>
  </Fragment>
  )
}

export default CreatePage
