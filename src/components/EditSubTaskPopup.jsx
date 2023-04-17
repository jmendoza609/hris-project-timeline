import { React, useState, Fragment } from 'react'
import CloseIcon from '../assets/close_icon.png'
import Datepicker from "react-tailwindcss-datepicker"
import { Combobox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

const people = [
    { id: 1, name: 'HRIS Project Timeline' },
    { id: 2, name: 'HRIS Login' },
    { id: 3, name: 'React JS' },
    { id: 4, name: 'Tailwind CSS' },
    { id: 5, name: 'Headless UI' },
    { id: 6, name: 'Hero Icons' },
]

export default function EditSubTaskPopup({ visible, onClose }) {
    //Dropdown Menu
    const [selected, setSelected] = useState(people[0])
    const [query, setQuery] = useState('')
  
    const filteredPeople =
      query === ''
        ? people
        : people.filter((person) =>
            person.name
              .toLowerCase()
              .replace(/\s+/g, '')
              .includes(query.toLowerCase().replace(/\s+/g, ''))
          )
           
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
                <div className='text-[#6A6A6A] w-[378px] h-6 font-bold text-base leading-6'>Edit Sub Task</div>
                <button onClick={onClose} className='justify-center items-center w-6 h-6 rounded p-1.5'>
                    <img src={CloseIcon} alt="Close Icon" />
                </button>
            </div>

            <div className='bg-white border-[#E8E8E8] border-y-2 flex flex-col items-start gap-2 w-[450px] h-auto p-4'>
                <div className='flex flex-col items-start gap-2 w-[418px] p-0'>
                    <div className='text-[#6A6A6A] font-normal text-sm leading-[18px]'>Main Task</div>
                    <div className=" top-16 w-[418px]">
                    <Combobox value={selected} onChange={setSelected}>
                        <div className="relative">
                        <div className="relative w-full cursor-default overflow-hidden rounded bg-white text-left">
                            <Combobox.Input
                            className="w-full h-[40px] border-solid border-[1px] outline-[#05458E] rounded py-2 pl-3 pr-10 leading-5 text-black"
                            displayValue={(person) => person.name}
                            onChange={(event) => setQuery(event.target.value)}
                            />
                            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                            <ChevronUpDownIcon
                                className="h-5 w-5 text-gray-400"
                                aria-hidden="true"
                            />
                            </Combobox.Button>
                        </div>
                        <Transition
                            as={Fragment}
                            leave="transition ease-in duration-100"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                            afterLeave={() => setQuery('')}
                        >
                            <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded bg-white py-1 text-base shadow-lg ring-2 ring-black ring-opacity-5 focus:outline-none">
                            {filteredPeople.length === 0 && query !== '' ? (
                                <div className="relative cursor-default select-none py-2 px-4 text-black">
                                Nothing found.
                                </div>
                            ) : (
                                filteredPeople.map((person) => (
                                <Combobox.Option
                                    key={person.id}
                                    className={({ active }) =>
                                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                        active ? 'bg-blue-600 text-white' : 'text-black'
                                    }`
                                    }
                                    value={person}
                                >
                                    {({ selected, active }) => (
                                    <>
                                        <span
                                        className={`block truncate ${
                                            selected ? 'font-medium' : 'font-normal'
                                        }`}
                                        >
                                        {person.name}
                                        </span>
                                        {selected ? (
                                        <span
                                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                            active ? 'text-white' : 'text-blue-600'
                                            }`}
                                        >
                                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                        </span>
                                        ) : null}
                                    </>
                                    )}
                                </Combobox.Option>
                                ))
                            )}
                            </Combobox.Options>
                        </Transition>
                        </div>
                    </Combobox>
                    </div>
                        
                </div>
                <div className='flex flex-col items-start gap-2 w-[418px] p-0'>
                    <div className='text-[#6A6A6A] font-normal text-sm leading-[18px]'>Sub Task</div>
                    <input className='outline-[#05458E] border-[#E8E8E8] border rounded border-solid w-[418px] h-[40px] p-2.5' 
                           type="text" name="text" placeholder='Test Sub Task'>
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
                           type="text" name="text" placeholder='0%'>
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
                                placeholder={"04/29/2023"}
                                containerClassName="border rounded"
                                inputClassName="outline-[#05458E] font-normal text-[16px]"
                                toggleClassName="text-black"
                                />
                            </div>
                    </div>
                </div>
                
            </div>

            <div className='bg-white border-[#E8E8E8] flex flex-row justify-end items-center gap-2 w-[450px] h-auto px-4 py-2 rounded-b'>
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


