import React, { useState } from 'react'
import AddMainTaskPopup from './AddMainTaskPopup'
import AddSubTaskPopup from './AddSubTaskPopup'
import EditIcon from '../assets/edit_icon.png'
import DelIcon from '../assets/del_icon.png'
import EditMainTaskPopup from './EditMainTaskPopup'
import EditSubTaskPopup from './EditSubTaskPopup'
import DeleteMainTaskPopup from './DeleteMainTaskPopup'
import DeleteSubTaskPopup from './DeleteSubTaskPopup'

const MainPage = () => {
    const [showAddMainTaskPopup, setShowAddMainTaskPopup] = useState(false)
    const handleOnAddMainTaskClose = () => setShowAddMainTaskPopup(false)

    const [showAddSubTaskPopup, setShowAddSubTaskPopup] = useState(false)
    const handleOnAddSubTaskClose = () => setShowAddSubTaskPopup(false)

    const [showEditMainTaskPopup, setShowEditMainTaskPopup] = useState(false)
    const handleOnEditMainTaskClose = () => setShowEditMainTaskPopup(false)

    const [showEditSubTaskPopup, setShowEditSubTaskPopup] = useState(false)
    const handleOnEditSubTaskClose = () => setShowEditSubTaskPopup(false)

    const [showDeleteMainTaskPopup, setShowDeleteMainTaskPopup] = useState(false)
    const handleOnDeleteMainTaskClose = () => setShowDeleteMainTaskPopup(false)

    const [showDeleteSubTaskPopup, setShowDeleteSubTaskPopup] = useState(false)
    const handleOnDeleteSubTaskClose = () => setShowDeleteSubTaskPopup(false)

    return (
    <div>  
        {/* Header */}
        <div className='absolute w-[115px] h-[39px] left-[49px] top-[46px]'>
            <header className='font-bold text-5xl leading-[56px] flex items-center text-[#032B55]' >HRIS</header>
            <div className='absolute w-[355px] h-[23px] '>
                <h1 className='font-semibold text-xl leading-[23px] text-[#4D4D4D]'>NETZON GLOBAL TECHNOLOGIES INC.</h1>
            </div>    
        </div>

        <div className='absolute flex items-center left-[805px] top-[46px]'>
            <h1 className='text-[#4D4D4D] mr-2 font-semibold text-xl'>PROJECT START:</h1>
            <input className='project-input' 
            type="text" name="Project Start" placeholder='mm/dd/yyyy'/>
        </div>
        <div className='absolute flex items-center left-[1137px] top-[46px]'>
            <h1 className='text-[#4D4D4D] mr-2 font-semibold text-xl'>PROJECT END:</h1>
            <input className='project-input' 
            type="text" name="Project End" placeholder='mm/dd/yyyy'/>
        </div>

        <div className='absolute left-[49px] top-[175px]'>
            <button onClick={() => setShowAddMainTaskPopup(true)} className='add-main-task-button mr-5'>
                + Main Task
            </button>
            <button onClick={() => setShowAddSubTaskPopup(true)} className='add-sub-task-button'>
                + Sub Task
            </button>
        </div>
        
        <div className='absolute flex gap-6 left-[964px] top-[169px]'>
            <div className='bg-[#B1CBE7] task-counter'>
                <div className='font-semibold text-[46px]'>0</div>
                <div className='font-medium text-xl'>Main Task/s</div>
            </div>
            <div className='bg-[#DFDFDF] task-counter'>
                <div className='font-semibold text-[46px]'>0</div>
                <div className='font-medium text-xl'>Sub Task/s</div>
            </div>
            
        </div>

        {/* Timetable */}
        <div className="z-[1]">
            <table>
                <tr className='timetable-header'>
                    <th className='text-white flex flex-row items-center w-[406px] h-[23px] px-[30px] py-0'>TASK</th>
                    <th className='text-white flex flex-row justify-center items-start w-[171px] h-[23px] p-0'>EST. HOURS</th>
                    <th className='text-white flex flex-row justify-center items-start w-[217px] h-[23px] p-0'>ASSIGNED TO</th>
                    <th className='text-white flex flex-row justify-center items-start w-48 h-[23px] p-0'>PROGRESS</th>
                    <th className='text-white flex flex-row justify-center items-start w-[134px] h-[23px] p-0'>START</th>
                    <th className='text-white flex flex-row justify-center items-start w-[137px] h-[23px] p-0'>END</th>
                    <th className='text-white flex flex-row justify-center items-start w-[83px] h-[23px] p-0'>EDIT</th>
                    <th className='text-white flex flex-row justify-center items-start w-[43px] h-[23px] p-0'>DEL</th>
                </tr>

                {/* Test Main Task Data */}
                <tr className='timetable-maintask'>
                    <td className='shared-class text-[#4D4D4D] font-extrabold flex flex-col justify-center items-center gap-2.5  w-[42px] h-[47px] p-0 border-r-2'>1</td>
                    <td className='text-[#4D4D4D] font-extrabold flex flex-row items-center w-[378px] h-[47px] px-[26px] py-0 left-[92px] top-[290px] border-r-2'>Test Main Task</td>
                    <td className='text-[#4D4D4D] font-extrabold flex flex-row justify-center items-center w-[170px] h-[47px] p-0 left-[471px] top-[290px] border-r-2'>999</td>
                    <td className='text-[#4D4D4D] font-extrabold flex flex-row justify-center items-center w-[216px] h-[47px] p-0 left-[642px] top-[290px] border-r-2'>Test</td>
                    <td className='text-[#4D4D4D] font-extrabold flex flex-row justify-center items-center w-[195px] h-[47px] p-0 left-[859px] top-[290px] border-r-2'>0%</td>
                    <td className='text-[#4D4D4D] font-extrabold flex flex-row justify-center items-center w-[133px] h-[47px] p-0 left-[1051px] top-[290px] border-r-2'>03/29/2023</td>
                    <td className='text-[#4D4D4D] font-extrabold flex flex-row justify-center items-center w-[140px] h-[47px] p-0 left-[1185px] top-[290px] border-r-2'>04/29/2024</td>
                    <button onClick={() => setShowEditMainTaskPopup(true)} className='flex flex-row justify-center items-center gap-2.5 w-[75px] h-[47px] p-0 left-[1322px] top-[290px]'>
                    <img src={EditIcon} alt="Edit Icon" />
                    </button>
                    <button onClick={() => setShowDeleteMainTaskPopup(true)} className='flex flex-row justify-center items-center gap-2.5 w-[52px] h-[47px] p-0 left-[1322px] top-[290px]'>
                    <img src={DelIcon} alt="Delete Icon" />
                    </button>
                </tr>

                {/* Test Sub Task Data */}
                <tr className='timetable-subtask'>
                    <td className='text-[#4D4D4D] font-medium flex flex-col justify-center items-center gap-2.5  w-[42px] h-[47px] p-0 border-r-2 border-white'>1</td>
                    <td className='text-[#4D4D4D] font-medium flex flex-row items-center w-[378px] h-[47px] px-[26px] py-0 left-[92px] top-[290px] border-r-2 border-white'>Test Sub Task</td>
                    <td className='text-[#4D4D4D] font-medium flex flex-row justify-center items-center w-[170px] h-[47px] p-0 left-[471px] top-[290px] border-r-2 border-white'>999</td>
                    <td className='text-[#4D4D4D] font-medium flex flex-row justify-center items-center w-[216px] h-[47px] p-0 left-[642px] top-[290px] border-r-2 border-white'>Test</td>
                    <td className='text-[#4D4D4D] font-medium flex flex-row justify-center items-center w-[195px] h-[47px] p-0 left-[859px] top-[290px] border-r-2 border-white'>0%</td>
                    <td className='text-[#4D4D4D] font-medium flex flex-row justify-center items-center w-[133px] h-[47px] p-0 left-[1051px] top-[290px] border-r-2 border-white'>03/29/2023</td>
                    <td className='text-[#4D4D4D] font-medium flex flex-row justify-center items-center w-[140px] h-[47px] p-0 left-[1185px] top-[290px] border-r-2 border-white'>04/29/2024</td>
                    <button onClick={() => setShowEditSubTaskPopup(true)} className='flex flex-row justify-center items-center gap-2.5 w-[75px] h-[47px] p-0 left-[1322px] top-[290px]'>
                    <img src={EditIcon} alt="Edit Icon" />
                    </button>
                    <button onClick={() => setShowDeleteSubTaskPopup(true)} className='flex flex-row justify-center items-center gap-2.5 w-[52px] h-[47px] p-0 left-[1322px] top-[290px]'>
                    <img src={DelIcon} alt="Delete Icon" />
                    </button>
                </tr>
            </table>
        </div>

        <AddMainTaskPopup onClose={handleOnAddMainTaskClose} visible={showAddMainTaskPopup}/>       
        <AddSubTaskPopup onClose={handleOnAddSubTaskClose} visible={showAddSubTaskPopup}/>
        <EditMainTaskPopup onClose={handleOnEditMainTaskClose} visible={showEditMainTaskPopup}/>
        <EditSubTaskPopup onClose={handleOnEditSubTaskClose} visible={showEditSubTaskPopup}/>
        <DeleteMainTaskPopup onClose={handleOnDeleteMainTaskClose} visible={showDeleteMainTaskPopup}/>
        <DeleteSubTaskPopup onClose={handleOnDeleteSubTaskClose} visible={showDeleteSubTaskPopup}/>
    
    </div>
    )
}

export default MainPage
