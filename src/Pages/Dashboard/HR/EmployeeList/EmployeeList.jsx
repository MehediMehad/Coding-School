import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "../../../../hooks/useAxiosCommon";
import EmployeeListTable from "../../../../components/Dashboard/HR/EmployeeListTable";
import LoadingSpinner from "../../../../components/LoadingSpinner/LoadingSpinner";
import { Helmet } from "react-helmet-async";
// import { useState } from "react";


const EmployeeList = () => {
    const axiosCommon = useAxiosCommon()
    // const [isOpen, setIsOpen] = useState(false)

    // const closeModal = () => {
    //   setIsOpen(false)
    // }
    const { data: employees = [], isLoading , refetch } = useQuery({
        queryKey: ['employees'],
        queryFn: async () => {
          const { data } = await axiosCommon.get(`/employees`)
          // isLoading(false)
          return data
        },
      })
      if (isLoading) return <LoadingSpinner></LoadingSpinner>
    return (
        <div>
          <Helmet>
            <title>EmployeeList</title>
          </Helmet>
            <EmployeeListTable
            employees={employees}
            refetch={refetch}
            ></EmployeeListTable>
        </div>
    );
};

export default EmployeeList;