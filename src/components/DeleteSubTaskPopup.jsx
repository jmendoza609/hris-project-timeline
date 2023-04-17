import React from 'react'
import CloseIcon from '../assets/close_icon.png'

export default function DeleteSubTaskPopup({ visible, onClose }) {
    if (!visible) return null;

    return (
        <div className='popup'>
            <div className='bg-white border-[#E8E8E8] flex items-center w-[450px] h-[40px] gap-6 pl-4 pr-2 py-2 rounded-t'>
                <div className='text-[#6A6A6A] w-[378px] h-6 font-bold text-base leading-6'>Delete Sub Task</div>
                <button onClick={onClose} className='justify-center items-center w-6 h-6 rounded p-1.5'>
                    <img src={CloseIcon} alt="Close Icon" />
                </button>
            </div>

            <div className='bg-white border-[#E8E8E8] border-y-2 flex flex-col items-start gap-2 w-[450px] h-auto p-4'>
                <div className='flex flex-col items-start gap-1 w-[418px] p-0'>
                    <div className='text-[#6A6A6A] font-normal text-sm leading-[18px]'>Sub Task:</div>
                    <div className='text-[#6A6A6A] font-medium text-sm leading-[18px]'>Test Sub Task</div>
                </div>
                <div className='flex flex-col items-start gap-1 w-[418px] p-0'>
                    <div className='text-[#6A6A6A] font-normal text-sm leading-[18px]'>Estimated Hours:</div>
                    <div className='text-[#6A6A6A] font-medium text-sm leading-[18px]'>999</div>
                </div>
                <div className='flex flex-col items-start gap-1 w-[418px] p-0'>
                    <div className='text-[#6A6A6A] font-normal text-sm leading-[18px]'>Assigned To:</div>
                    <div className='text-[#6A6A6A] font-medium text-sm leading-[18px]'>Test</div>
                </div>
                <div className='flex flex-col items-start gap-1 w-[418px] p-0'>
                    <div className='text-[#6A6A6A] font-normal text-sm leading-[18px]'>Progress:</div>
                    <div className='text-[#6A6A6A] font-medium text-sm leading-[18px]'>0%</div>
                </div>
                <div className='flex flex-col items-start gap-1 w-[418px] p-0'>
                    <div className='text-[#6A6A6A] font-normal text-sm leading-[18px]'>Start:</div>
                    <div className='text-[#6A6A6A] font-medium text-sm leading-[18px]'>03/29/2023</div>
                </div>
                <div className='flex flex-col items-start gap-1 w-[418px] p-0'>
                    <div className='text-[#6A6A6A] font-normal text-sm leading-[18px]'>End:</div>
                    <div className='text-[#6A6A6A] font-medium text-sm leading-[18px]'>04/29/2023</div>
                </div>
                <div className='flex flex-col gap-1 w-[418px] p-0'>
                    <div className='text-[#6A6A6A] font-normal text-sm leading-[18px]'>
                        Are you sure you want to proceed with the deletion of the sub task specified above?
                    </div>     
                </div>
                <div className='flex flex-col gap-1 w-[418px] p-0 italic'>
                    <div className='text-[#AA464E] font-normal text-sm leading-[18px]'>
                        NOTE: This action is irreversible.
                    </div>     
                </div>
            </div>

            <div className='bg-white border-[#E8E8E8]  flex flex-row justify-end items-center gap-2 w-[450px] h-auto px-4 py-2 rounded-b'>
            <button onClick={onClose} className='text-[#6A6A6A] font-semibold flex flex-row justify-center items-center gap-2 w-auto h-auto border rounded px-4 py-[5px] border-solid border-[#E8E8E8]'>
                Cancel
            </button>
            <button onClick={onClose} className='text-white font-semibold flex flex-row justify-center items-center gap-2 w-auto h-auto border rounded px-4 py-[5px] border-solid border-[#AA464E] bg-[#AA464E]'>
                Delete Sub Task
            </button>
            </div>
            
        </div>     
    )
}
