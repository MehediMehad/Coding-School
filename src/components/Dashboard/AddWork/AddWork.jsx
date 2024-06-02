import { useForm } from "react-hook-form";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosCommon from "../../../hooks/useAxiosCommon";



const AddWork = () => {
    const {user} = useAuth()
    const [date, setDate] = useState(new Date());
    const axiosCommon = useAxiosCommon()
    const { register, handleSubmit, reset } = useForm()
    const onSubmit = async (data) => {
        const workData ={
            name: user?.displayName,
            email: user?.email,
            role: 'Employee',
            tasks: data?.tasks,
            hoursWorked : data?.hoursWorked,
            date: date
        }
        const workInfo = await axiosCommon.post('/workSheets', workData,{
            
        })
        if (workInfo.data.insertedId) {
            alert('success')
            reset
        }
        console.log(workInfo.data);

    }
    return (
        <div className="">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-4 gap-x-4">
                    <div className="form-control col-span-1">
                        <label className="label">
                            <span className="label-text">Tasks</span>
                        </label>
                        <select defaultValue="default" {...register('tasks', { required: true })}
                            className="select select-bordered w-full">
                            <option disabled value="default">Tasks</option>
                            <option value="sales"> Sales</option>
                            <option value="support">Support</option>
                            <option value="content">content</option>
                            <option value="paperWork">Paper-work</option>
                            <option value="drinks">Student Add</option>
                        </select>
                    </div>
                    <div className="col-span-1">
                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text">Hours Worked</span>
                            </div>
                            <input {...register('hoursWorked', { required: true })}
                            type="number" placeholder="Hours Worked" className="input input-bordered w-full " />
                        </label>
                    </div>
                    <div className="col-span-1">
                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text">Date</span>
                            </div>
                            <DatePicker className="input input-bordered w-full" selected={date} onChange={(workDate) => setDate(workDate)} />
                        </label>
                    </div>
                    <div className="col-span-1 mt-9 ">
                        <button className="btn">Add</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddWork;
