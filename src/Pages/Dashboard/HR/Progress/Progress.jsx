import React, { useState } from 'react';

const Progress = () => {
    const [employeeName, setEmployeeName] = useState('');
    const [month, setMonth] = useState('');
    const [workRecords, setWorkRecords] = useState([]);
    console.log(workRecords);

    const fetchWorkRecords = async () => {
        try {
            const response = await fetch(`http://localhost:5000/progress?employeeName=${employeeName}&month=${month}`);
            const data = await response.json();
            setWorkRecords(data);
        } catch (err) {
            console.error(err);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchWorkRecords();
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Employee Name:
                    <input 
                        type="text" 
                        value={employeeName} 
                        onChange={(e) => setEmployeeName(e.target.value)} 
                    />
                </label>
                <br />
                <label>
                    Month:
                    <input 
                        type="month" 
                        value={month} 
                        onChange={(e) => setMonth(e.target.value)} 
                    />
                </label>
                <br />
                <button type="submit">Filter</button>
            </form>
            <div>
                <h2>Work Records</h2>
                <ul>
                    {workRecords.map(record => (
                        <li key={record._id}>
                            {record.employeeName}: {record.workDone} on {new Date(record.date).toLocaleDateString()}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Progress;