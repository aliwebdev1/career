import React from 'react';
import Hero from './Hero/Hero';
import JobsCategories from './JobsCategories/JobsCategories';
import AllJobs from './AllJobs/AllJobs';

const Home = () => {
    return (
        <div className='max-w-6xl mx-auto'>
            <Hero></Hero>
            <div className='my-20'>
                <JobsCategories></JobsCategories>
            </div>
            <div className='mb-20'>
            <AllJobs></AllJobs>
            </div>
        </div>
    );
};

export default Home;