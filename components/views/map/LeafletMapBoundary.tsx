/**
 * Uses LeafletMapBoundary to prevent leaflet from loading
 * during server-side rendering.
 */
import React, { ReactElement } from 'react';
import dynamic from 'next/dynamic';

const LeafletMapBoundary = (): ReactElement => {
  const LeafletMap = dynamic(
    () => import('components/views/map/LeafletMap'),
    {
      ssr: false,
      // loading: Component
    } // This line is important. It's what prevents server-side render
  );
  return <LeafletMap />;
};

export default LeafletMapBoundary;
