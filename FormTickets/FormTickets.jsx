/* eslint-disable no-unused-vars */
import React from 'react';

const FormTickets = () => {
    return (
        <div className='py-10'>
            <div className="container mx-auto px-3">
                <div className="">
                    <h1 className='text-xl font-medium pb-10'>Support Tickets</h1>
                    <div className='flex justify-between border-b-2 border-gray-500 pb-5'>
                        <div className=''>
                            <h3 className='text-xl font-medium'>7 Records</h3>
                        </div>
                        <div className='flex justify-end gap-5'>
                            <div className='flex gap-0'>
                                <input type="search" name='all' placeholder='All' className=' border-2 rounded w-[160px] h-[45px] text-stone-400 ps-3 font-medium hover:bg-black transition-all duration-400 hover:border-none' required />
                            </div>
                            <button className='bg-[#07242B] w-[160px] h-[45px] text-white font-medium rounded hover:bg-slate-700 transition-all  duration-400'>Open New Ticket →
                            </button>
                        </div>
                    </div>
                </div>

                <form>
                    <div className='pt-5'>
                        <h1 className='font-medium text-xl'>Create New Ticket</h1>
                        <div className='pt-5'>
                            <label htmlFor="department">Department</label>
                            <select name="Department" id="department" className='w-full h-[40px]  border-t-[1px] border-t-gray-800  ring-1 ring-gray-800 focus:ring-none rounded mt-2'>
                                <option value="disabled selected">Select your option</option>
                                <option value="department-1">Department-1</option>
                                <option value="department-2">Department-2</option>
                            </select>
                        </div>
                    </div>
                    <div className='pt-5'>
                        <label htmlFor="name">Subject</label>
                        <input type="name" name="name" id='name' className='w-full h-[40px]  border-b-[1px] border-b-gray-800  ring-1 ring-gray-800 focus:ring-none rounded mt-2' required />
                    </div>
                    <div className='pt-5'>
                        <label htmlFor="project">Related Project</label>
                        <select name="Related Project" id="project" className='w-full h-[40px]  border-b-[1px] border-b-gray-800  ring-1 ring-gray-800 focus:ring-none rounded mt-2'>
                            <option value="disabled selected">Select your option</option>
                            <option value="department-1">Project-1</option>
                            <option value="department-1">Project-2</option>

                        </select>
                    </div>
                    <div className='py-5'>
                        <label htmlFor="sms">Describe Ticket Issue</label>
                        <textarea name="sms" id="sms" rows="5" cols="169" className='ring-1 ring-gray-800  rounded mt-2'></textarea>
                    </div>
                    <button className='bg-[#07242B] w-[150px] h-[45px] text-white font-medium rounded '>Create Ticket →
                    </button>

                </form>
            </div>
        </div>
    );
};

export default FormTickets;