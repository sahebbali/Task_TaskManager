import React, {Fragment, Suspense, lazy} from 'react'
import MasterLayout from '../components/masterLayout/Master-Layout';
import LazyLoader from '../components/masterLayout/LazyLoader';

const  Completed = lazy(()=> import ('../components/Completed/Completed'))

function CompletedPage() {
  return (
    <Fragment>
    <MasterLayout>
      <Suspense fallback={<LazyLoader />}>
      <Completed />
      </Suspense>
    </MasterLayout>
  </Fragment>
  )
}

export default CompletedPage
