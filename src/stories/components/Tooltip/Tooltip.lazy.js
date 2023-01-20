import React, { lazy, Suspense } from 'react';

const LazyTooltip = lazy(() => import('./Tooltip'));

const Tooltip = props => (
  <Suspense fallback={null}>
    <LazyTooltip {...props} />
  </Suspense>
);

export default Tooltip;
