import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "../../../../hooks/useAxiosCommon";
import EmployeeListTable from "../../../../components/Dashboard/HR/EmployeeListTable";


const EmployeeList = () => {
    const axiosCommon = useAxiosCommon()
    const { data: employees = [], isLoading } = useQuery({
        queryKey: ['employees'],
        queryFn: async () => {
          const { data } = await axiosCommon.get(`/employees`)
    
          return data
        },
      })
      console.log(employees);
    return (
        <div>
            <EmployeeListTable
            employees={employees}
            
            ></EmployeeListTable>
        </div>
    );
};

export default EmployeeList;