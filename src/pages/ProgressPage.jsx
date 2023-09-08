import React, {Fragment, Suspense, lazy} from 'react'
import MasterLayout from '../components/masterLayout/Master-Layout';
import LazyLoader from '../components/masterLayout/LazyLoader';

const  Progress = lazy(()=> import ('../components/Progress/Progress'))

function ProgressPage() {
  return (
    <Fragment>
      <MasterLayout>
        <Suspense fallback={<LazyLoader />}>
           <Progress />
        </Suspense>
      </MasterLayout>
    </Fragment>
  )
}

export default ProgressPage
