import React, { lazy, Suspense } from 'react';

const LazyAlerts = lazy(() => import('./Alerts'));

const Alerts = props => (
  <Suspense fallback={null}>
    <LazyAlerts {...props} />
  </Suspense>
);

export default Alerts;
