import React from 'react';
import { Popup } from 'react-mapbox-gl';
import { connect } from 'react-redux';

const FeaturePopup = ({ feature }) => {
  if (feature) {
    return (
      <Popup coordinates={feature.coordinates}>
        <h3>{feature.properties.desc}</h3>
      </Popup>
    );
  }
  return null;
};

const mapStateToProps = (state, ownProps) => {
  return {
    feature: state.map.clickedFeature
  };
};

export default connect(mapStateToProps)(FeaturePopup);
