import { useState } from 'react';
import ticketicon from '../assets/correct-svgrepo-com.svg'
import vectorIcon from '../assets/Vector (7).svg';
export default function Task({taskname,taskcategory,remove}){
    const [done,setdone] = useState(false);
    const donefunction = () => {
        setdone(!done);
    }
    return (
        <div className="flex flex-row justify-start items-center gap-[8rem]">
            <div className="flex flex-row justify-center items-center gap-[1rem]">
            <div onClick={donefunction} className="w-[30px] h-[30px] rounded-[.5rem] border-[2px] border-[#EA5959] cursor-pointer relative">
                <img className={`absolute left-[50%] top-[50%] transform -translate-x-1/2 -translate-y-1/2 w-[20px] h-[20px] ${done ? "block" : "hidden"}`} src={ticketicon} alt="" />
            </div>
            <p className="text-[#5A5A5A] text-[18px] font-[400]">{taskname}</p>
            <div className="px-[.8rem] py-[.5rem] font-[400] text-[12px] text-[#FFFFFF] bg-[#EA5959] rounded-[.5rem]">{taskcategory}</div>
            </div>
            <img onClick={remove} className="cursor-pointer" src={vectorIcon} alt="" />

        </div>
    )
}