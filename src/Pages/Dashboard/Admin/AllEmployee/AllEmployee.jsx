import axios from "axios";
import { useEffect, useState } from "react";

const AllEmployee = () => {
    const [employees, setEmployees] = useState([]);
    const [view, setView] = useState('table');

    console.log(employees);

    useEffect(() => {
        fetchEmployees();
    }, []);

    const fetchEmployees = async () => {
        const response = await axios.get(`http://localhost:5000/verified/employees`);
        setEmployees(response.data);
    };
// -------------
    const fireEmployee = async (id) => {
        if (window.confirm("Are you sure you want to fire this employee?")) {
          await axios.post(`/employees/fire/${id}`);
          fetchEmployees();
        }
      };
    
      const makeHR = async (id) => {
        await axios.post(`/employees/make-hr/${id}`);
        fetchEmployees();
      };
    
      const adjustSalary = async (id) => {
        const newSalary = prompt("Enter new salary:");
        if (newSalary) {
          await axios.post(`/employees/adjust-salary/${id}`, { salary: parseInt(newSalary) });
          fetchEmployees();
        }
      };


      return (
        <div className="container mx-auto p-4">
          <button onClick={() => setView(view === 'table' ? 'card' : 'table')} className="mb-4 p-2 bg-blue-500 text-white rounded">
            Toggle View
          </button>
    
          {view === 'table' ? (
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="py-2">Name</th>
                  <th className="py-2">Designation</th>
                  <th className="py-2">Make HR</th>
                  <th className="py-2">Fire</th>
                  <th className="py-2">Adjust Salary</th>
                </tr>
              </thead>
              <tbody>
                {employees.map(employee => (
                  <tr key={employee._id}>
                    <td className="border px-4 py-2">{employee.name}</td>
                    <td className="border px-4 py-2">{employee.role}</td>
                    <td className="border px-4 py-2">
                      {employee.role !== 'HR' && (
                        <button onClick={() => makeHR(employee._id)} className="bg-green-500 text-white px-2 py-1 rounded">Make HR</button>
                      )}
                    </td>
                    <td className="border px-4 py-2">
                      {employee.fired ? (
                        <span>Fired</span>
                      ) : (
                        <button onClick={() => fireEmployee(employee._id)} className="bg-red-500 text-white px-2 py-1 rounded">Fire</button>
                      )}
                    </td>
                    <td className="border px-4 py-2">
                      <button onClick={() => adjustSalary(employee._id)} className="bg-blue-500 text-white px-2 py-1 rounded">Adjust Salary</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {employees.map(employee => (
                <div key={employee._id} className="bg-white p-4 rounded shadow">
                  <h2 className="text-xl font-bold mb-2">{employee.name}</h2>
                  <p className="mb-2">Role: {employee.role}</p>
                  <div className="mb-2">
                    {employee.role !== 'HR' && (
                      <button onClick={() => makeHR(employee._id)} className="bg-green-500 text-white px-2 py-1 rounded">Make HR</button>
                    )}
                  </div>
                  <div className="mb-2">
                    {employee.fired ? (
                      <span>Fired</span>
                    ) : (
                      <button onClick={() => fireEmployee(employee._id)} className="bg-red-500 text-white px-2 py-1 rounded">Fire</button>
                    )}
                  </div>
                  <div>
                    <button onClick={() => adjustSalary(employee._id)} className="bg-blue-500 text-white px-2 py-1 rounded">Adjust Salary</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      );
};

export default AllEmployee;