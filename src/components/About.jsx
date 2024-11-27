import React from 'react';
import { Aboutme } from '../constant/constant';
import mypic from "../assets/logog.png";
import SectionTitle from './tools/SectionTitle';
import AnimatedBox from './tools/AnimatedBox';

// bg-[#eaedee]
// bg-[#edf1f1]

const About = () => {
    return (
        <div id="about-section" className="w-full h-[85rem] md:h-[20rem] lg:h-[40rem]  bg-[#eaedee] py-5">
            <SectionTitle title="About Me" />

            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 mt">
                <AnimatedBox>
                    {Aboutme.map((item, index) => {
                        return (
                            <div
                                className='ml-4 w-[90%] lg:w-[90%] lg:ml-[10rem] text-gray-600'
                                key={index}>
                                <p className="text-lg mt-10">{item.p1}</p>
                                <p className="text-lg mt-10">{item.p2}</p>
                                <p className="text-lg mt-10">{item.p3}</p>
                            </div>
                        );
                    })}
                </AnimatedBox>
                <AnimatedBox>
                    <div className="flex justify-center py-5 ">
                        <img
                            src={mypic}
                            alt="My Pic"
                            className="w-[300px] h-auto rounded-3xl shadow-2xl mt-[15px]"
                        />
                    </div>
                </AnimatedBox>
            </div>
        </div>
    );
};

export default About;