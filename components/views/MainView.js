import React from 'react';
import { connect } from 'react-redux';

import PermalinkHandler from 'components/views/PermalinkHandler';
import LeafletMapBoundary from 'components/views/map/LeafletMapBoundary';
import MapControls from 'components/views/controls/MapControls';
import Toast from 'components/views/Toast';

const _MainView = () => {
  // Uncomment this to clear local storage.
  // require('./components/preferences/Preferences').resetLocalStorage();

  return (
    <>
      <div className="map">
        <LeafletMapBoundary />
        <MapControls />
        <Toast />
        <PermalinkHandler />
      </div>
    </>
  );
};

const mapStateToProps = (_state) => ({});
const mapDispatchToProps = (_dispatch) => ({});

const MainView = connect(mapStateToProps, mapDispatchToProps)(_MainView);

export default MainView;
