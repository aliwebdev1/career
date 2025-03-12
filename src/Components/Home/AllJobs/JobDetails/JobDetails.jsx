import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { GiSkills } from "react-icons/gi";
import { FaLocationDot } from "react-icons/fa6";
import { BiMoneyWithdraw } from "react-icons/bi";
import { BsCalendar2Date } from "react-icons/bs";
import { ToastContainer, toast } from 'react-toastify';
import { getDataFromLocalStorage, setDataIntoLocalStorage } from '../../../../LocalStorage/LocalStorage';


const JobDetails = () => {
    const values = useLoaderData()
    // console.log(values)
    const { _id,image, description, job_title, category_name, companyName, experience, isPaid, skills, location, postDate, salary, recruiterEmail, deadline, duty_hours } = values;

    const navigate = useNavigate()
    const handleApply =()=>{
        
        const data = getDataFromLocalStorage();

        
        const filterData = data.find(da => da === _id)
        if(!filterData){
            setDataIntoLocalStorage(_id)
            toast.success("Applied Successfully")
            navigate('/jobs')
        }
        else{
            toast.error('you have already applied this job')
        }
    }
    return (
        <div className='mt-10 max-w-6xl mx-auto'>
            <div className='border-2 shadow-xl py-5  rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
                <h1 className=' font-bold text-3xl text-center text-white uppercase'>Job Details</h1>
            </div>
            <div className='grid grid-cols-3 max-w-6xl mx-auto mt-20 gap-10 mb-20'>
                <div className='col-span-2 border rounded-xl'>
                    <div className='shadow-xl'>
                        <img src={image} className='w-full h-[300px] rounded-xl' alt="" />
                        <div className='p-10'>
                            <h1 className='text-2xl mb-5 text-center font-bold'>{job_title}</h1>
                            <p className='text-justify text-xl font-semibold'>{description}</p>
                        </div>
                    </div>
                </div>
                <div className='border shadow-xl rounded-xl p-5 font-bold'>
                    <p className='text-2xl mt-5'>Company: {companyName}</p>
                    <p className='mt-1'>{category_name}</p>
                    <p className=' mt-5 flex gap-1 '><GiSkills className='text-3xl mt-[-3px]'></GiSkills>Skills: {skills}</p>
                    <div className='mt-5 flex justify-between'>
                        <p>Experience: {experience} Years</p>
                        <p className='flex items-center'><FaLocationDot></FaLocationDot>{location}</p>
                    </div>
                    <div className='mt-3'>
                        <p className='flex items-center'>Salary: <BiMoneyWithdraw></BiMoneyWithdraw>{salary}</p>
                        <p className='mt-5'>{duty_hours}</p>
                    </div>

                        <p className='flex mt-5 items-center gap-1'>Post Date:<BsCalendar2Date></BsCalendar2Date>{postDate}</p>

                    <p className='flex mt-5 items-center gap-1'>Deadline:<BsCalendar2Date></BsCalendar2Date>{deadline}</p>
                    <div className='flex justify-center mt-10'>
           <button onClick={handleApply} className='px-10 py-4 bg-blue-500 text-white font-bold rounded-xl m-4'>Apply Now</button>
           </div>
                </div>
                
            </div>
<ToastContainer></ToastContainer>
        </div>
    );
};

export default JobDetails;