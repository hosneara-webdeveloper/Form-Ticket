/* eslint-disable no-unused-vars */
import React from 'react';
import "./HomeService.css"
import { Link } from 'react-router-dom';

const HomeService = () => {
    const homeServices = [
        {
            id: 1,
            img: '/assets/srHome1.jpg',
            title: 'House Cleaning',
            para: 'Risus commodo viverra maec enas accumsan sis.',
            icon: '/icons/house.svg'
        },
        {
            id: 2,
            img: '/assets/srHome2.jpg',
            title: 'House Cleaning',
            para: 'Risus commodo viverra maec enas accumsan sis.',
            icon: '/icons/hospital.svg'
        },
        {
            id: 2,
            img: '/assets/srHome1.jpg',
            title: 'House Cleaning',
            para: 'Risus commodo viverra maec enas accumsan sis.',
            icon: '/icons/hospital.svg'
        },
        {
            id: 3,
            img: '/assets/srHome4.jpg',
            title: 'House Cleaning',
            para: 'Risus commodo viverra maec enas accumsan sis.',
            icon: '/icons/office.svg'
        }
    ]
    return (
        <div className='container mx-auto px-5 pt-8'>
            <div className="text-center py-10">
                <h3 className='text-2xl text-blue-500 font-semibold'>_ _ _ Service _ _ _</h3>
                <h1 className='text-4xl text-blue-900 font-bold'>Our Best Services</h1>
                <p className='text-lg text-gray-500 font-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut <br /> labore et dolore magna aliqua.</p>

            </div>

            <div className='flex justify-center items-start flex-wrap pb-10'>
                {
                    homeServices.map((homeService, i) => (
                        <div key={i} className='lg:w-1/4 md:1/2 w-full px-6 parent'>

                            <div className="shadow-lg rounded-lg">
                                <div className="image relative">
                                    <img className='w-full' src={homeService.img} alt="" />
                                    <div className="bg-blue-900 w-[70px] h-[70px] rounded-full flex justify-center items-center absolute left-[50%] right-[50%] -translate-x-1/2 -bottom-[20%]">
                                        <img className='w-[50%]' src={homeService.icon} alt="" />
                                    </div>

                                </div>
                                <div className="content pt-10 px-5 pb-5">
                                    <h3 className='text-2xl text-blue-800 text-center font-semibold'>{homeService.title}</h3>
                                    <p className='text-md font-semibold text-gray-400 text-center pt-5 paragrap'>{homeService.para}</p>
                                </div>
                            </div>

                        </div>
                    ))
                }
            </div>

            <div className='pb-5'>
                <Link className='mx-auto w-[160px] h-[46px] flex justify-center items-center text-lg text-white bg-indigo-500 rounded hover:bg-indigo-800 transition-all duration-500 font-semibold' to={'/services'}>Load more</Link>
            </div>
        </div>

    );
};

export default HomeService;