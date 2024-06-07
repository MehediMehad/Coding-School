import { useMutation } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
// import useAuth from "../../../hooks/useAuth";
import Row from "./Row";
import { toast } from "react-toastify";


const EmployeeListTable = ({employees, refetch}) => {
    const axiosSecure = useAxiosSecure()
    // const {user: loggedInUser} = useAuth()

    const {mutateAsync} = useMutation({
        mutationFn: async user =>{
            const {data} = await axiosSecure.patch(`/employees/update/${user?.email}`, user)
            return data
        },
        onSuccess: data =>{
            console.log(data)
            toast("verified success")
        }
    })


    return (
        <div>
            <div className="overflow-x-auto mt-10">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="text-xl">
                            <th>#</th>
                            <th>Name</th>
                            <th>Designation</th>
                            <th>Verified</th>
                            <th>Status Change</th>
                            <th>Bank Account</th>
                            <th>Salary</th>
                            <th>Pay</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody className="gap-y-2">
                        {
                            employees.map((item, index) =><Row key={item._id} item={item} index={index} mutateAsync={mutateAsync} refetch={refetch} ></Row> )
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default EmployeeListTable;