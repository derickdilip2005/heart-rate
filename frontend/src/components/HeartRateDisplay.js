import React from 'react';
import '../styles.css';

const HeartRateDisplay = ({ heartRate }) => {
  return (
    <div className="heart-rate-container">
      <h2>Current Heart Rate: {heartRate} BPM</h2>
      <p className={`heart-rate ${heartRate >= 120 || heartRate <= 60 ? 'danger' : 'normal'}`}>
        {heartRate}
      </p>
    </div>
  );
};

export default HeartRateDisplay;
