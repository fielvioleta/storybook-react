import React, { lazy, Suspense } from 'react';

const LazyCards = lazy(() => import('./Cards'));

const Cards = props => (
  <Suspense fallback={null}>
    <LazyCards {...props} />
  </Suspense>
);

export default Cards;
