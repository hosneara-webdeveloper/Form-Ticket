/* eslint-disable no-unused-vars */
import React from 'react';
import { priceDatas } from './price';

const OurPricing = () => {
    return (
        <div className='bg-slate-200 py-[50px]'>
            <div className='container px-5 mx-auto'>
                <div className='text-center '>
                    <h3 className='font-semibold text-3xl text-indigo-700'>_ _ _ Our Pricing _ _ _</h3>
                    <h1 className='font-bold text-5xl text-indigo-900 pb-[50px]'>We have an amazing pricing <br />
                        for cleaning services</h1>
                </div>

                <div className='flex justify-center items-center  flex-wrap'>
                    {
                        priceDatas.map((priceData, i) => (
                            <div className={`shadow-lg rounded-xl w-full md:w-1/2 lg:w-1/3 px-[80px] ${priceData.title == "Standard Plan" ? "py-20 bg-indigo-400" : "py-16 bg-white"} `} key={i}>
                                <div className={`w-[100px] h-[100px] mb-[20px] rounded-full  flex justify-center mx-auto items-center ${priceData.title != "Standard Plan" ? "bg-indigo-700" : "bg-white"}`}>
                                    <img className='w-1/2' src={priceData.image} alt="clean" />
                                </div>
                                <h1 className={`text-2xl font-semibold pb-[20px] text-center ${priceData.title == "Standard Plan" ? "text-white" : "text-blue-900"}`}>{priceData.title}</h1>


                                <ul>
                                    {
                                        priceData.lists.map((list, i) => (
                                            <li className={`text-xl text-center text-blue-800 border-b py-3 ${priceData.title == "Standard Plan" ? "border-white text-white" : "border-gray-200 text-blue-900"}`} key={i}>{list}</li>
                                        ))
                                    }
                                </ul>
                                <h1 className={`text-center text-5xl font-bold pt-[20px] pb-[20px] ${priceData.title == "Standard Plan" ? "text-white" : "text-blue-900"}`}>$ {priceData.price}/<sub className={`text-xl capitalize font-normal`}>per month</sub></h1>
                                <button className={`mx-auto block w-[150px] h-[45px] mt-[20px] border-[1px] border-blue-800 transition-all duration-500 rounded-[8px] text-lg font-semibold text-blue-800 ${priceData.title != "Standard Plan" ? "bg-white hover:bg-yellow-400" : "bg-yellow-400 hover:bg-white"}`}>{priceData.button}</button>
                            </div>

                        ))
                    }
                </div>

            </div>

        </div>

    );
};

export default OurPricing;