import React, {useState} from 'react'
import CloseIcon from '../assets/close_icon.png'
import Datepicker from "react-tailwindcss-datepicker";

export default function EditMainTaskPopup({ visible, onClose }) {
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
    

    if (!visible) return null;

    return (
        <div className='popup'>
            
            <div className='bg-white border-[#E8E8E8] flex items-center w-[450px] h-[40px] gap-6 pl-4 pr-2 py-2 rounded-t'>
                <div className='text-[#6A6A6A] w-[378px] h-6 font-bold text-base leading-6'>Edit Main Task</div>
                <button onClick={onClose} className='justify-center items-center w-6 h-6 rounded p-1.5'>
                    <img src={CloseIcon} alt="Close Icon" />
                </button>
            </div>

            <div className='bg-white border-[#E8E8E8] border-y-2 flex flex-col items-start gap-2 w-[450px] h-auto p-4'>
                <div className='flex flex-col items-start gap-2 w-[418px] p-0'>
                    <div className='text-[#6A6A6A] font-normal text-sm leading-[18px]'>Task</div>
                    <input className='outline-[#05458E] border-[#E8E8E8] border rounded border-solid w-[418px] h-[40px] p-2.5' 
                           type="text" name="text" placeholder='Test Main Task'>
                    </input>
                </div>
                <div className='flex flex-col items-start gap-2 w-[418px] p-0'>
                    <div className='text-[#6A6A6A] font-normal text-sm leading-[18px]'>Estimated Hours</div>
                    <input className='outline-[#05458E] border-[#E8E8E8] border rounded border-solid w-[418px] h-[40px] p-2.5' 
                           type="text" name="text" placeholder='999'>
                    </input>
                </div>
                <div className='flex flex-col items-start gap-2 w-[418px] p-0'>
                    <div className='text-[#6A6A6A] font-normal text-sm leading-[18px]'>Assigned To</div>
                    <input className='outline-[#05458E] border-[#E8E8E8] border rounded border-solid w-[418px] h-[40px] p-2.5' 
                           type="text" name="text" placeholder='Test'>
                    </input>
                </div>
                <div className='flex flex-col items-start gap-2 w-[418px] p-0'>
                    <div className='text-[#6A6A6A] font-normal text-sm leading-[18px]'>Progress</div>
                    <input className='outline-[#05458E] border-[#E8E8E8] border rounded border-solid w-[103px] h-[40px] p-2.5' 
                           type="text" name="text" placeholder='0 %'>
                    </input>
                </div>
                <div className='flex flex-col items-start gap-2 w-[418px] p-0'>
                    <div className='text-[#6A6A6A] font-normal text-sm leading-[18px]'>Start</div>
                    <div className='flex items-center justify-end'>
                            <div className='w-[418px] h-[40px]'>
                                <Datepicker
                                useRange={false}
                                asSingle={true}
                                value={startValue}
                                onChange={handleStartValueChange}
                                displayFormat={"MM/DD/YYYY"} 
                                placeholder={"03/29/2023"}
                                containerClassName="border rounded"
                                inputClassName="outline-[#05458E] font-normal text-[16px]"
                                toggleClassName="text-black"
                                />
                            </div>
                    </div>
                </div>
                <div className='flex flex-col items-start gap-2 w-[418px] p-0'>
                    <div className='text-[#6A6A6A] font-normal text-sm leading-[18px]'>End</div>
                    <div className='flex items-center justify-end'>
                            <div className='w-[418px] h-[40px]'>
                                <Datepicker
                                useRange={false}
                                asSingle={true}
                                value={endValue}
                                onChange={handleEndValueChange}
                                displayFormat={"MM/DD/YYYY"}
                                placeholder={"04/29/2024"}
                                containerClassName="border rounded"
                                inputClassName="outline-[#05458E] font-normal text-[16px]"
                                toggleClassName="text-black"
                                />
                            </div>
                    </div>
                </div>
                
            </div>

            <div className='bg-white border-[#E8E8E8]  flex flex-row justify-end items-center gap-2 w-[450px] h-auto px-4 py-2 rounded-b'>
            <button onClick={onClose} className='text-[#6A6A6A] font-semibold flex flex-row justify-center items-center gap-2 w-auto h-auto border rounded px-4 py-[5px] border-solid border-[#E8E8E8]'>
                Cancel
            </button>
            <button onClick={onClose} className='text-white font-semibold flex flex-row justify-center items-center gap-2 w-auto h-auto border rounded px-4 py-[5px] border-solid border-[#05458E] bg-[#05458E]'>
                Save Changes
            </button>
            </div>
            
        </div>
    )
}