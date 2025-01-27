import { useState } from "react";
import Button from "../Button";
import PaymentModal from "../../Modal/PaymentModal";
import { NavLink } from "react-router-dom";


const Row = ({ item, index, mutateAsync, refetch }) => {
    const [status, setStatus] = useState(item?.status)
    const [isOpen, setIsOpen] = useState(false)
    // console.log(item, 'from row');

    // const detailsId = useLoaderData()

    const closeModal = () => {
        setIsOpen(false)
    }

    const toggleVerified = async () => {
        setStatus(prevStatus => !prevStatus)
        const user = {
            status: !status,
            email: item.email
        }
        try {
            await mutateAsync(user)
            refetch()
        } catch (err) {
            console.log(err);
        }

    }
    return (
        <tr className="">
            <th>{index + 1}</th>
            <td>
                <div className="flex items-center gap-3">
                    <div>
                        <div className="font-bold">{item?.name}</div>
                        <div className="text-sm opacity-50">{item?.email}</div>
                    </div>
                </div>
            </td>
            <td>
                {item?.designation}
                <br />
            </td>
            <td>
                <span>{!status ? <p className="badge bg-red-300"> false </p> : <p className="badge bg-green-400">true</p> }</span>
            </td>
            <td>
                <button className="btn btn-sm ml-3" onClick={toggleVerified}>
                    {!status ? '✅' : '❌'}
                </button>
            </td>
            <td>{item?.bankAccount}</td>
            <td>
                {item?.salary}
            </td>
            <td>
                <Button
                      disabled={item?.status === false}
                    onClick={() => setIsOpen(true)}
                    //   label={room?.booked ? 'Booked' : 'Reserve'}
                    label={"Pay"}
                />
                <PaymentModal
                    isOpen={isOpen}
                    refetch={refetch}
                    closeModal={closeModal}
                    employeeInfo={{
                        id: item._id,
                        name: item.name,
                        role: item.role,
                        salary: item.salary,
                        email: item.email,
                        status: item.status,
                    }}
                />
            </td>
            <td>
                <NavLink to={`/dashboard/details/${item._id}`}>
                <button className="btn btn-sm bg-orange-400">Details</button>
                </NavLink>

            </td>
        </tr>
    );
};

export default Row;