import { useMutation } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
// import useAuth from "../../../hooks/useAuth";
import Row from "./Row";


const EmployeeListTable = ({employees}) => {
    const axiosSecure = useAxiosSecure()
    // const {user: loggedInUser} = useAuth()

    const {mutateAsync} = useMutation({
        mutationFn: async user =>{
            const {data} = await axiosSecure.patch(`/employees/update/${user?.email}`, user)
            return data
        },
        onSuccess: data =>{
            console.log(data)
            alert("verified success")
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
                            <th>Status</th>
                            <th>Change</th>
                            <th>Bank Account</th>
                            <th>Salary</th>
                            <th>Pay</th>
                        </tr>
                    </thead>
                    <tbody className="gap-y-2">
                        {
                            employees.map((item, index) =><Row key={item._id} item={item} index={index} mutateAsync={mutateAsync} ></Row> )
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default EmployeeListTable;