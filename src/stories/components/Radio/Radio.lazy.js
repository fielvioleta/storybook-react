import React, { lazy, Suspense } from 'react';

const LazyRadio = lazy(() => import('./Radio'));

const Radio = props => (
  <Suspense fallback={null}>
    <LazyRadio {...props} />
  </Suspense>
);

export default Radio;
