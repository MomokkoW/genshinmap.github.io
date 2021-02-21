/**
 * Defines the core of the NextJS app.
 * Global CSS is imported here.
 */
import React, { ReactElement } from 'react';
import type { AppProps } from 'next/app';

/**
 * Global CSS
 * Note that where possible, all components should utilize makeStyles.
 * Only use .css files where absolutely necessary.
 */
import '~/css/index.css';
import '~/css/LeafletMap.css';
import 'leaflet/dist/leaflet.css';
import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';

const CoreApp = ({ Component, pageProps }: AppProps): ReactElement => {
  return <Component {...pageProps} />;
};

export default CoreApp;
