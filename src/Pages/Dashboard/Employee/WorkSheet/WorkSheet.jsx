import { useState } from "react";
import AddWork from "../../../../components/Dashboard/AddWork/AddWork";
import useAuth from "../../../../hooks/useAuth";
import useAxiosCommon from "../../../../hooks/useAxiosCommon";
import { useForm } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";

const WorkSheet = () => {
    const {user} = useAuth()
    const [date, setDate] = useState(new Date());
    const axiosCommon = useAxiosCommon()
    const { register, handleSubmit, reset } = useForm()

    const {data: wakings = [], refetch,} = useQuery({
        queryKey: ['workSheet', user?.email],
        queryFn: async () => {
          const { data } = await axiosCommon.get(`/workSheet/${user?.email}`)
          return data
        },
      })
      console.log(wakings);


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
            refetch()
            toast('successfully added')
            reset()
        }
        console.log(workInfo.data);

    }
    
    
    return (
        <div>
            <h1>WorkSheet</h1>
            <AddWork 
            refetch={refetch}
            register={register}
            handleSubmit={handleSubmit}
            onSubmit={onSubmit}
            setDate={setDate}
            date={date}
            wakings={wakings}
             ></AddWork>
        </div>
    );
};

export default WorkSheet;