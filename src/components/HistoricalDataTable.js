import React from 'react';

const HistoricalDataTable = ({ data }) => {
    return (
        <div className="historical-data-table">
            <h2>Historical Data</h2>
            <table>
                <thead>
                    <tr>
                        <th>Timestamp</th>
                        <th>Machine Status</th>
                        <th>Vibration Level</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((entry, index) => (
                        <tr key={index}>
                            <td>{entry.ts}</td>
                            <td>{entry.machine_status === 1 ? 'Running' : 'Stopped'}</td>
                            <td>{entry.vibration}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default HistoricalDataTable;
