import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "../../../../hooks/useAxiosCommon";
import { Helmet } from "react-helmet-async";

const AdminContact = () => {
    const axiosCommon = useAxiosCommon()

    const { data: messageData = [], } = useQuery({
        queryKey: ['adminContact'],
        queryFn: async () => {
            const { data } = await axiosCommon.get(`/messageA`)
            return data
        },
    })
    console.log(messageData);

    return (

        <div>
            <Helmet>
                <title>Contact</title>
            </Helmet>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Message</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            messageData.map(item => <tr key={item._id}>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div>
                                            <div className="font-bold">{item.name}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item.email}
                                </td>
                                <td>{item.message}</td>
                            </tr>)
                        }

                    </tbody>
                    {/* foot */}

                </table>
            </div>
        </div>
    );
};

export default AdminContact;