import React from 'react';
import SectionTitle from './tools/SectionTitle';
import { Skill } from '../constant/constant';
import { FaReact, FaJsSquare, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiTailwindcss, SiFigma } from 'react-icons/si';
import { MdDevices } from 'react-icons/md';
import AnimatedBox from './tools/AnimatedBox';

const Skills = () => {
    return (
        <div id="skills-section" className="w-full h-[70rem] md:h-[33rem] py-5  mb-14">
            <SectionTitle title="Skills" />
            <div className="flex flex-col md:flex-row justify-center items-center md:space-x-[4rem] space-y-[4rem] md:space-y-0 mt-[7rem] md:mt-[5  rem]">
                <AnimatedBox>
                    <div className="box-border h-auto w-[25rem] p-6  text-center rounded-3xl shadow-2xl shadow-black/15 bg-white">
                        {Skill.map((data, index) => {
                            return <h1 key={index} className="text-2xl font-medium italic mb-6">{data.title}</h1>
                        })}
                        <div className="flex justify-center space-x-4 text-4xl text-blue-600">
                            <FaReact className='text-[#61dbfb]' />
                            <FaJsSquare className='text-[#f0db4f]' />
                            <FaHtml5 className="text-orange-600" />
                            <FaCss3Alt className="text-blue-500" />
                            <SiTailwindcss className="text-teal-400" />
                        </div>
                        {Skill.map((data, index) => {
                            return <p key={index} className="mt-4 text-gray-600">{data.sec}</p>
                        })}

                    </div>
                </AnimatedBox>
                <AnimatedBox>
                    <div className="box-border h-auto w-[25rem] p-6 text-center rounded-3xl shadow-2xl shadow-black/15 bg-white">
                        {Skill.map((data, index) => {
                            return <h1 key={index} className="text-2xl font-medium italic mb-6">{data.title2}</h1>
                        })}
                        <div className="flex justify-center space-x-4 text-4xl text-purple-600">
                            <SiFigma />
                        </div>
                        {Skill.map((data, index) => {
                            return <p key={index} className="mt-4 text-gray-700">{data.sec2}</p>
                        })}
                    </div>
                </AnimatedBox>
                <AnimatedBox>
                    <div className="box-border h-auto w-[25rem] p-6 text-center rounded-3xl shadow-2xl shadow-black/15 bg-white">
                        {Skill.map((data, index) => {
                            return <h1 key={index} className="text-2xl font-medium italic mb-6">{data.title3}</h1>
                        })}
                        <div className="flex justify-center space-x-4 text-4xl text-green-600">
                            <MdDevices />
                        </div>
                        {Skill.map((data, index) => {
                            return <p key={index} className="mt-4 text-gray-700">{data.sec3}</p>
                        })}
                    </div>
                </AnimatedBox>
            </div>
        </div>
    );
};

export default Skills;
