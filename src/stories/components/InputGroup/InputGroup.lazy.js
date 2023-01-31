import React, { lazy, Suspense } from 'react';

const LazyInputGroup = lazy(() => import('./InputGroup'));

const InputGroup = props => (
  <Suspense fallback={null}>
    <LazyInputGroup {...props} />
  </Suspense>
);

export default InputGroup;
