import React from 'react';

const RealTimeData = ({ timestamp, machineStatus, vibration }) => {
    return (
        <div className="real-time-data">
            <h2>Real-Time Data</h2>
            <p>Timestamp: {timestamp}</p>
            <p>Machine Status: {machineStatus === 1 ? 'Running' : 'Stopped'}</p>
            <p>Vibration Level: {vibration}</p>
        </div>
    );
};

export default RealTimeData;
