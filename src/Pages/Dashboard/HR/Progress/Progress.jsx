import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const Progress = () => {
  const [records, setRecords] = useState([]);
  const [employee, setEmployee] = useState('');
  const [month, setMonth] = useState('');

  console.log(month, records);

  useEffect(() => {
    fetchRecords();
  }, [employee, month]);

  const fetchRecords = async () => {
    let url = `https://awei-server.vercel.app/progress?`;
    if (employee) url += `employee=${employee}&`;
    if (month) url += `month=${month}&`;

    const response = await fetch(url);
    const data = await response.json();
    setRecords(data);
  };
  const [selectedEmployee, setSelectedEmployee] = useState('');

  const handleSelectChange = (e) => {
    setSelectedEmployee(e.target.value);
  };
  const filteredEmployees = selectedEmployee ? records.filter(employee => employee.name === selectedEmployee) : records;


  return (
    <>
      <Helmet>
        <title>Progress</title>
      </Helmet>

      <div className="p-5">
        <h1 className="text-3xl font-bold mb-5">Employee Work Records</h1>
        <div className="mb-4">
          <label htmlFor="employee" className="block text-gray-700 text-sm font-bold mb-2">Select Employee:</label>
          <select
            id="employee"
            value={selectedEmployee}
            onChange={handleSelectChange}
            className="shadow border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="">All</option>
            {records.map(employee => (
              <option key={employee.id} value={employee.name}>{employee.name}</option>
            ))}
          </select>
        </div>
        <div className="mb-5">
          <label className="block mb-2">:</label>
          <input
            type="month"
            value={month}
            onChange={(e) => setMonth(e.target.value)}
            className="p-2 border border-gray-300"
          />
        </div>
        <table className="table-auto w-full border-collapse">
          <thead>
            <tr>
              <th className="border border-gray-400 p-2">Name</th>
              <th className="border border-gray-400 p-2">Email</th>
              <th className="border border-gray-400 p-2">Role</th>
              <th className="border border-gray-400 p-2">Tasks</th>
              <th className="border border-gray-400 p-2">Hours Worked</th>
              <th className="border border-gray-400 p-2">Date</th>
            </tr>
          </thead>
          <tbody>
            {filteredEmployees.map((record) => (
              <tr key={record._id}>
                <td className="border border-gray-400 p-2">{record.name}</td>
                <td className="border border-gray-400 p-2">{record.email}</td>
                <td className="border border-gray-400 p-2">{record.role}</td>
                <td className="border border-gray-400 p-2">{record.tasks}</td>
                <td className="border border-gray-400 p-2">{record.hoursWorked}</td>
                <td className="border border-gray-400 p-2">{new Date(record.date).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Progress;
