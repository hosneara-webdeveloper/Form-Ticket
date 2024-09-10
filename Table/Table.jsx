/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React from 'react';

const Table = () => {
    return (
        <div className=''>
            <h1 className='ps-24'>KYC</h1>
            <div className='pt-5 flex justify-end px-10 mb-5'>
                <label htmlFor="department"></label>
                <select name="Department" id="department" className='w-[160px] h-[40px] ps-2  border-t-[1px] border-t-gray-800  ring-1 ring-gray-800 focus:ring-none rounded mt-2'>
                    <option value="disabled selected">All</option>
                    <option value="department-1">Name-1</option>
                    <option value="department-2">Name-2</option>
                </select>
            </div>

            <div className='border-b-2 border-blue-600 mb-5'></div>
            <div className="container mx-auto px-3">



                <table className='w-full mt-10'>
                    <thead>
                        <tr className='border-b'>
                            <th className="border-b pb-2 ">Name</th>
                            <th className=" pb-2">User</th>
                            <th className=" pb-2">Date</th>
                            <th className=" pb-2">Time</th>
                            <th className=" pb-2">Status</th>
                            <th className=" pb-2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='border-b-2 border-blue-600 mb-5'>
                            <input type="checkbox" name='name' id='name1' className='mt-4' />
                            <td className=" pb-2">Anita</td>
                            <td className=" pb-2">Professional</td>
                            <td className=" pb-2">10-09-2024</td>
                            <td className=" pb-2">5:48</td>
                            <td className=" pb-2  text-green-500">Approved</td>
                            <td className=" pb-2 w-[120px] h-[45px] border-2 border-yellow-400 text-center">Manage</td>
                        </tr>
                        <tr className='border-b'>
                            <input type="checkbox" name='name' id='name2' className='mt-4 ' />
                            <td className=" pb-2">Anita</td>
                            <td className=" pb-2">Professional</td>
                            <td className=" pb-2">10-09-2024</td>
                            <td className=" pb-2">5:48</td>
                            <td className=" pb-2 text-yellow-500">Pending</td>
                            <td className=" pb-2 w-[120px] h-[45px] border-2 border-yellow-400 text-center">Manage</td>
                        </tr>
                        <tr className='border-b'>
                            <input type="checkbox" className='mt-4' />
                            <td className=" pb-2">Anita</td>
                            <td className=" pb-2">Professional</td>
                            <td className=" pb-2">10-09-2024</td>
                            <td className=" pb-2">5:48</td>
                            <td className=" pb-2  text-yellow-500">Pending</td>
                            <td className=" pb-2 w-[120px] h-[45px] border-2 border-yellow-400 text-center">Manage</td>
                        </tr>
                        <tr className='border-b'>
                            <input type="checkbox" className='mt-4' />
                            <td className=" pb-2">Anita</td>
                            <td className=" pb-2">Professional</td>
                            <td className=" pb-2">10-09-2024</td>
                            <td className=" pb-2">5:48</td>
                            <td className=" pb-2  text-green-500">Approved</td>
                            <td className=" pb-2 w-[120px] h-[45px] border-2 border-yellow-400 text-center">Manage</td>
                        </tr>
                        <tr className='border-b'>
                            <input type="checkbox" className='mt-4' />
                            <td className=" pb-2">Anita</td>
                            <td className=" pb-2">Professional</td>
                            <td className=" pb-2">10-09-2024</td>
                            <td className=" pb-2">5:48</td>
                            <td className=" pb-2  text-yellow-500">Pending</td>
                            <td className=" pb-2 w-[120px] h-[45px] border-2 border-yellow-400 text-center">Manage</td>
                        </tr>
                        <tr className='border-b mb-10'>
                            <input type="checkbox" className='mt-4' />
                            <td className=" pb-2">Anita</td>
                            <td className=" pb-2">Professional</td>
                            <td className=" pb-2">10-09-2024</td>
                            <td className=" pb-2">5:48</td>
                            <td className=" pb-2  text-green-500">Approved</td>
                            <td className=" pb-2 w-[120px] h-[45px] border-2 border-yellow-400 text-center">Manage</td>
                        </tr>
                        <tr className='border-b'>
                            <input type="checkbox" className='mt-4' />
                            <td className=" pb-2">Anita</td>
                            <td className=" pb-2">Professional</td>
                            <td className=" pb-2">10-09-2024</td>
                            <td className=" pb-2">5:48</td>
                            <td className=" pb-2  text-red-500">Declined</td>
                            <td className=" pb-2 w-[120px] h-[45px] border-2 border-yellow-400 text-center">Manage</td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Table;