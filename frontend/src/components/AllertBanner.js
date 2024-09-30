import React from 'react';
import '../styles.css';

const AlertBanner = ({ heartRate }) => {
  if (heartRate < 60 || heartRate > 120) {
    return (
      <div className="alert-banner">
        <p>Warning: Abnormal heart rate detected! ({heartRate} BPM)</p>
      </div>
    );
  }
  return null;
};

export default AlertBanner;
