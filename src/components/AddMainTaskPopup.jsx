import React, {useState} from 'react'
import CloseIcon from '../assets/close_icon.png'
import Datepicker from "react-tailwindcss-datepicker";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from '../schema/formSchema';
import MainPage from './MainPage';


export default function AddMainTaskPopup({ visible, onClose }) {
    const [items, setItems] = useState([])

    //Yup Resolver
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(registerSchema),
      });

    const formSubmitHandler = (data) => {
        console.log(data)
    }  

    //Datetime Picker
    const [startValue, setStartValue] = useState({
        startDate: null
    });
    const [endValue, setEndValue] = useState({
        endDate: null
    });

    const handleStartValueChange = (newStartValue) => {
        console.log("newStartValue:", newStartValue);
        setStartValue(newStartValue);
    };
    const handleEndValueChange = (newEndValue) => {
        console.log("newValue:", newEndValue);
        setEndValue(newEndValue);
    };
    //

    if (!visible) return null;

    
    
    return (
          
        <div className='popup'>
            <form onSubmit={handleSubmit(formSubmitHandler)}>
                <div className='bg-white border-[#E8E8E8] flex items-center w-[450px] h-[40px] gap-6 pl-4 pr-2 py-2 rounded-t'>
                    <div className='text-[#6A6A6A] w-[378px] h-6 font-bold text-base leading-6'>New Main Task</div>
                    <button onClick={onClose} className='justify-center items-center w-6 h-6 rounded p-1.5'>
                        <img src={CloseIcon} alt="Close Icon" />
                    </button>
                </div>

                <div className='bg-white border-[#E8E8E8] border-y-2 flex flex-col items-start gap-2 w-[450px] h-auto p-4'>
                    <div className='flex flex-col items-start gap-2 w-[418px] p-0'>
                        <div className='text-[#6A6A6A] font-normal text-sm leading-[18px]'>Task</div>
                        <input {...register("mainTask")}
                            className={`outline-[#05458E] border-[#E8E8E8] border rounded border-solid w-[418px] h-[40px] p-2.5 
                                        ${errors.mainTask && "border-red-800"}`}
                            type="text" 
                            name="mainTask" 
                            placeholder='Main task name'>
                        </input>
                        {errors.mainTask && <span className="text-[#AA464E] ml-0.5 mt-[-4px] text-sm">{errors.mainTask.message}</span>}

                    </div>
                    <div className='flex flex-col items-start gap-2 w-[418px] p-0'>
                        <div className='text-[#6A6A6A] font-normal text-sm leading-[18px]'>Estimated Hours</div>
                        <input {...register("estimatedHours")}
                            className={`outline-[#05458E] border-[#E8E8E8] border rounded border-solid w-[418px] h-[40px] p-2.5 
                                        ${errors.estimatedHours && "border-red-800"}`}
                            type="text" 
                            name="estimatedHours" 
                            placeholder='Main task estimated hours'>
                        </input>
                        {errors.estimatedHours && <span className="text-[#AA464E] ml-0.5 mt-[-4px] text-sm">{errors.estimatedHours.message}</span>}

                    </div>
                    <div className='flex flex-col items-start gap-2 w-[418px] p-0'>
                        <div className='text-[#6A6A6A] font-normal text-sm leading-[18px]'>Assigned To</div>
                        <input {...register("assignedTo")}
                            className={`outline-[#05458E] border-[#E8E8E8] border rounded border-solid w-[418px] h-[40px] p-2.5 
                                        ${errors.assignedTo && "border-red-800"}`} 
                            type="text" 
                            name="assignedTo" 
                            placeholder='Main task assigned to'>
                        </input>
                        {errors.assignedTo && <span className="text-[#AA464E] ml-0.5 mt-[-4px] text-sm">{errors.assignedTo.message}</span>}

                    </div>
                    <div className='flex flex-col items-start gap-2 w-[418px] p-0'>
                        <div className='text-[#6A6A6A] font-normal text-sm leading-[18px]'>Progress</div>
                        <input {...register("progress")}
                            className={`outline-[#05458E] border-[#E8E8E8] border rounded border-solid w-[103px] h-[40px] p-2.5 
                                        ${errors.progress && "border-red-800"}`}
                            type="text" 
                            name="progress" 
                            placeholder='Progress %'>
                        </input>
                        {errors.progress && <span className="text-[#AA464E] ml-0.5 mt-[-4px] text-sm">{errors.progress.message}</span>}

                    </div>
                    <div className='flex flex-col items-start gap-2 w-[418px] p-0'>
                        <div className='text-[#6A6A6A] font-normal text-sm leading-[18px]'>Start</div>
                        <div className='flex items-center justify-end'>
                                <div className='w-[418px] h-[40px]'>
                                    <Datepicker
                                    {...register("progress")}                                 
                                    useRange={false}
                                    asSingle={true}
                                    value={startValue}
                                    onChange={handleStartValueChange}
                                    displayFormat={"MM/DD/YYYY"} 
                                    placeholder={"mm/dd/yyyy"}
                                    containerClassName={`border rounded 
                                                        ${errors.progress && "border-red-800"}`}
                                    inputClassName="outline-[#05458E] font-normal text-[16px]"
                                    toggleClassName="text-black"
                                    name="startDate"
                                    />
                                </div>                         
                        </div>
                        {errors.progress && <span className="text-[#AA464E] ml-0.5 mt-[-4px] text-sm">{errors.progress.message}</span>}
                    </div>
                    <div className='flex flex-col items-start gap-2 w-[418px] p-0'>
                        <div className='text-[#6A6A6A] font-normal text-sm leading-[18px]'>End</div>
                        <div className='flex items-center justify-end'>
                                <div className='w-[418px] h-[40px]'>
                                    <Datepicker
                                    {...register("progress")} 
                                    useRange={false}
                                    asSingle={true}
                                    value={endValue}
                                    onChange={handleEndValueChange}
                                    displayFormat={"MM/DD/YYYY"}
                                    placeholder={"mm/dd/yyyy"}
                                    containerClassName={`border rounded 
                                                        ${errors.progress && "border-red-800"}`}
                                    inputClassName="outline-[#05458E] font-normal text-[16px]"
                                    toggleClassName="text-black"
                                    name="endDate"
                                    />
                                </div>
                        </div>
                        {errors.progress && <span className="text-[#AA464E] ml-0.5 mt-[-4px] text-sm">{errors.progress.message}</span>}
                    </div>
                    
                </div>

                <div className='bg-white border-[#E8E8E8]  flex flex-row justify-end items-center gap-2 w-[450px] h-auto px-4 py-2 rounded-b'>
                <button onClick={onClose} className='text-[#6A6A6A] font-semibold flex flex-row justify-center items-center gap-2 w-auto h-auto border rounded px-4 py-[5px] border-solid border-[#E8E8E8]'>
                    Cancel
                </button>
                <button className='text-white font-semibold flex flex-row justify-center items-center gap-2 w-auto h-auto border rounded px-4 py-[5px] border-solid border-[#05458E] bg-[#05458E]'>
                    Add Main Task
                </button>
                </div>
            </form> 
        </div>
    )
}
