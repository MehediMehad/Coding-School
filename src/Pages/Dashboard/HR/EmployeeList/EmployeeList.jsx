import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "../../../../hooks/useAxiosCommon";


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
            <h2>EmployeeList</h2>
        </div>
    );
};

export default EmployeeList;