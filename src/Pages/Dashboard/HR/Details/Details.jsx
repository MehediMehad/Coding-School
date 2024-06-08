import { useParams } from "react-router-dom";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import LoadingSpinner from "../../../../components/LoadingSpinner/LoadingSpinner";
import { data } from "autoprefixer";
import { useQuery } from "@tanstack/react-query";
// import PaymentChart from "../../../../components/Dashboard/HR/PaymentChart";


const Details = () => {
    const { id } = useParams()
    const axiosSecure = useAxiosSecure()

    const {
        data: employeePayment = [],
        isLoading,
        refetch,
    } = useQuery({
        queryKey: ['details'],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/payments`)
            return data
        },
    })
    const item = employeePayment.filter(item => item?.employeeId == id)
    console.log(item);

    if (isLoading) return <LoadingSpinner></LoadingSpinner>
    console.log(employeePayment);
    return (
        <div>
            <h1>/details</h1>
            {
                // item.map( (EP, index) => <p key={EP._id} >{index + 1}</p>)
            }
            <div>
                {/* <PaymentChart item={item} id={id}></PaymentChart> */}
            </div>
        </div>
    );
};

export default Details;