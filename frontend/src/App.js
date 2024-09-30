import React, { useState, useEffect } from 'react';
import HeartRateDisplay from './components/HeartRateDisplay';
import AlertBanner from './components/AllertBanner';
import './styles.css';

function App() {
  const [heartRate, setHeartRate] = useState(70);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomHeartRate = Math.floor(Math.random() * (140 - 50 + 1)) + 50;
      setHeartRate(randomHeartRate);
    }, 3000); // Updates every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="app-container">
      <h1>Heart Monitoring App</h1>
      <HeartRateDisplay heartRate={heartRate} />
      <AlertBanner heartRate={heartRate} />
    </div>
  );
}

export default App;
