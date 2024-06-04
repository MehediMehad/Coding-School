import React, { useState, useEffect } from 'react';
import { useTable } from '@tanstack/react-table';

const DemoEmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalEmployee, setModalEmployee] = useState(null);
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  

  useEffect(() => {
    // Fetch employees data from the server
    const fetchData = async () => {
      const response = await fetch('/api/employees');
      const data = await response.json();
      setEmployees(data);
    };

    fetchData();
  }, []);

  const toggleVerified = async (employee) => {
    const updatedEmployee = { ...employee, isVerified: !employee.isVerified };
    
    // Update the database
    await fetch(/api/employees/${employee.id}, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedEmployee),
    });

    setEmployees((prev) =>
      prev.map((emp) => (emp.id === employee.id ? updatedEmployee : emp))
    );
  };

  const handlePayClick = (employee) => {
    setModalEmployee(employee);
    setShowModal(true);
  };

  const handlePay = async () => {
    if (!modalEmployee.isVerified) return;

    // Logic to pay the employee
    console.log(`Paying ${modalEmployee.salary} to ${modalEmployee.name} for ${month}/${year}`);
    
    setShowModal(false);
  };

  const columns = [
    {
      Header: 'Name',
      accessor: 'name',
    },
    {
      Header: 'Email',
      accessor: 'email',
    },
    {
      Header: 'Verified',
      accessor: 'isVerified',
      Cell: ({ row }) => (
        <button onClick={() => toggleVerified()}>
          {row.original.isVerified ? '✅' : '❌'}
        </button>
      ),
    },
    {
      Header: 'Bank Account',
      accessor: 'bankAccount',
    },
    {
      Header: 'Salary',
      accessor: 'salary',
    },
    {
      Header: 'Pay',
      Cell: ({ row }) => (
        <button 
          onClick={() => handlePayClick(row.original)} 
          className={`p-2 bg-blue-500 text-white rounded ${!row.original.isVerified ? 'opacity-50 cursor-not-allowed' : ''}`} 
          disabled={!row.original.isVerified}
        >
          Pay
        </button>
      ),
    },
    {
      Header: 'Details',
      Cell: ({ row }) => <button className="p-2 bg-gray-500 text-white rounded">Details</button>,
    },
  ];

  const tableInstance = useTable({ columns, data: employees });

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = tableInstance;

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <table {...getTableProps()} className="table-auto w-full bg-white shadow-md rounded">
        <thead className="bg-gray-200">
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()} className="px-4 py-2 border">{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} className="hover:bg-gray-100">
                {row.cells.map(cell => (
                  <td {...cell.getCellProps()} className="px-4 py-2 border">{cell.render('Cell')}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-md w-1/3">
            <span className="text-gray-500 float-right cursor-pointer" onClick={() => setShowModal(false)}>&times;</span>
            <h2 className="text-xl mb-4">Pay {modalEmployee.name}</h2>
            <p className="mb-2">Salary: {modalEmployee.salary}</p>
            <input
              type="text"
              placeholder="Month"
              value={month}
              onChange={(e) => setMonth(e.target.value)}
              className="p-2 border border-gray-300 rounded mb-2 w-full"
            />
            <input
              type="text"
              placeholder="Year"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              className="p-2 border border-gray-300 rounded mb-4 w-full"
            />
            <button 
              onClick={handlePay} 
              className="p-2 bg-blue-500 text-white rounded w-full"
            >
              Pay
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DemoEmployeeList;
