import { useState } from "react";


const Row = ({item, index, mutateAsync}) => {
    const [status, setStatus] = useState(item?.status)
    console.log(item);

    const toggleVerified = async () =>{
        setStatus( prevStatus => !prevStatus)
        const user ={
            status: !status,
            email: item.email
        }
        try{
            await mutateAsync(user)
        }catch(err){
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
                <span>{!status ? "Verified" : "NotVerified"}</span>
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
                <button className="btn text-blue-400">Pay</button>
            </td>
        </tr>
    );
};

export default Row;