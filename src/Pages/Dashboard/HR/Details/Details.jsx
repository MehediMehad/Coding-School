// src/components/EmployeeDetails.js
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Helmet } from 'react-helmet-async';

const Details = () => {
    const { slug } = useParams();
    const [employee, setEmployee] = useState(null);
    const [salaryData, setSalaryData] = useState([]);
    console.log(employee, salaryData);

    useEffect(() => {
        axios.get(`https://awei-server.vercel.app/details/${slug}`)
            .then(response => {
                setEmployee(response.data);
                // Convert data to required format
                const salaryInfo = [
                    {
                        month: response.data.payMonth,
                        year: response.data.payYear,
                        salary: response.data.salary,
                    }
                ];
                setSalaryData(salaryInfo);
            })
            .catch(error => console.error('Error fetching employee data:', error));
    }, [slug]);
    if (!employee) return <div className='text-center text-3xl mt-24'>No payment has been made to this employee</div>;

    return (
        <>
            <Helmet>
                <title>Details</title>
            </Helmet>
            <div className="container mx-auto p-4">
                <div className="bg-white shadow-md rounded-lg p-6">
                    <img src={employee.photoURL || "https://i.ibb.co/JF5s5tH/1-afb70b63-ea30-4380-b7d3-8e5e765569aa-540x.webp" } alt={`${employee.name}'s photo`} className="w-32 h-32 rounded-full mx-auto" />
                    <h1 className="text-2xl font-semibold text-center mt-4">{employee.name}</h1>
                    <p className="text-center text-gray-600">{employee.designation}</p>

                    <div className="mt-8">
                        <BarChart
                            width={600}
                            height={300}
                            data={salaryData}
                            margin={{
                                top: 5, right: 30, left: 20, bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="salary" fill="#8884d8" />
                        </BarChart>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Details;