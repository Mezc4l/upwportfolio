import React from 'react'
import SectionTitle from './tools/SectionTitle';
import { FaCode, FaCommentDots, FaClock } from "react-icons/fa";
import { Whyme } from "../constant/constant";
import AnimatedBox from '../components/tools/AnimatedBox';

const WhyW = () => {
    return (
        <div id='why-section' className='w-full h-[55rem] md:h-[25rem] py-5 mb-10'>
            <SectionTitle title="Why Work With Me?" />
            <div className="grid grid-cols-1 md:grid-cols-3 space-y-[4rem] md:space-y-0 mt-[7rem] md:mt-[5rem] gap-10">
                <AnimatedBox>
                    <div className="text-center">
                        <FaCode className="text-4xl text-blue-500 mx-auto mb-4" />
                        {Whyme.map((data, index) => {
                            return (
                                <div key={index}>
                                    <h3 className="font-bold text-lg">{data.title}</h3>
                                    <p className="text-gray-600">{data.sec}</p>
                                </div>
                            )
                        })}

                    </div>
                </AnimatedBox>
                <AnimatedBox>
                    <div className="text-center">
                        <FaCommentDots className="text-4xl text-green-500 mx-auto mb-4" />

                        {Whyme.map((data, index) => {
                            return (
                                <div key={index}>
                                    <h3 className="font-bold text-lg">{data.title2}</h3>
                                    <p className="text-gray-600">{data.sec2}</p>
                                </div>
                            )
                        })}

                    </div>
                </AnimatedBox>
                <AnimatedBox>
                    <div className="text-center">
                        <FaClock className="text-4xl text-yellow-500 mx-auto mb-4" />
                        {Whyme.map((data, index) => {
                            return (
                                <div key={index}>
                                    <h3 className="font-bold text-lg">{data.title3}</h3>
                                    <p className="text-gray-600">{data.sec3}</p>
                                </div>
                            )
                        })}
                    </div>
                </AnimatedBox>
            </div>
        </div>
    )
}

export default WhyW