

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import WorkList from "../WorkList/WorkList";



const AddWork = ({date, setDate, onSubmit, handleSubmit, register, wakings}) => {
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
            <WorkList handleSubmit={handleSubmit}
            wakings={wakings}
            ></WorkList>
        </div>
    );
};

export default AddWork;
