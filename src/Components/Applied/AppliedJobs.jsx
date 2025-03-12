import React, { useEffect, useState } from 'react';
import { deleteDataFromLocalStorage, getDataFromLocalStorage } from '../../LocalStorage/LocalStorage';
import { useLoaderData } from 'react-router-dom';
import SingleAppliedJobs from './SingleAppliedJobs';

const AppliedJobs = () => {
    const values = useLoaderData()
    const [allData, setAllData] = useState([])
    // console.log(values)
    useEffect(() => {
        const data = getDataFromLocalStorage()
        if (data) {
            const empt = []
            for (const da of data) {
                const filterData = values.find(value => value._id === da)
                empt.push(filterData)
            }
            setAllData(empt)
        }
    }, [values])

    const handleDelete=(id)=>{
        const filterData = allData.filter(data=>data._id !== id)
        deleteDataFromLocalStorage(id)
        setAllData(filterData)
    }
    return (
        <div className='max-w-6xl mx-auto my-10'>
            <div className='border-2 shadow-xl py-5  rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
                <h1 className=' font-bold text-3xl text-center text-white uppercase'>Applied Jobs</h1>
            </div>

            <select className="select select-bordered select-lg w-full max-w-xs mt-5">
                <option selected disabled>All</option>
                <option>Dhaka</option>
                <option>Gazipur</option>
                <option>Chittagong</option>
                <option>Rajsahi</option>
            </select>

            <div>
                {
                    allData.map(data => <SingleAppliedJobs key={data._id} data={data} handleDelete={handleDelete}></SingleAppliedJobs>)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;