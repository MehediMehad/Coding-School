import axios from "axios";
import { useEffect, useState } from "react";

const AllEmployee = () => {
    const [employees, setEmployees] = useState([]);
    console.log(employees);

    useEffect(() => {
        fetchEmployees();
      }, []);

      const fetchEmployees = async () => {
        const response = await axios.get(`http://localhost:5000/verified/employees`);
        setEmployees(response.data);
      };


    return (
        <div>
            AllEmployee
        </div>
    );
};

export default AllEmployee;