import React from 'react';
import SectionTitle from './tools/SectionTitle';
import { Saaspage, Hoobank } from '../constant/constant';
import { FaReact, FaJsSquare } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import saaspage from '../assets/saaspage.png';
import hoobank from '../assets/hoobank.png';
import Livepreview from './tools/Livepreview';
import LoadingButton from './tools/Loadingbutton';
import AnimatedBox from './tools/AnimatedBox';

const Project = () => {
    return (
        <div id="project-section" className="w-full h-auto bg-[#eaedee] py-10">
            <SectionTitle title="Featured Projects" />
            <div className="flex flex-col gap-20 px-4 md:px-16 2xl:ml-[8rem]">
                <AnimatedBox>
                    <div className="flex flex-col lg:flex-row items-center lg:space-x-10 space-y-6 lg:space-y-0">
                        <div className="flex justify-center">
                            <img
                                className="lg:h-[270px] lg:w-auto rounded-3xl shadow-lg"
                                src={saaspage}
                                alt="SaaS Landing Page"
                            />
                        </div>
                        <div className="text-center lg:text-left max-w-[600px]">
                            {Saaspage.map((data, index) => (
                                <div key={index}>
                                    <h1 className="text-2xl font-semibold text-gray-800">{data.title}</h1>
                                    <p className="mt-4 text-gray-600 leading-relaxed">{data.description}</p>
                                    <div className="flex justify-center lg:justify-start space-x-4 text-3xl mt-4">
                                        <FaJsSquare className='text-[#f0db4f]' />
                                        <FaReact className="text-[#61dbfb]" />
                                        <SiTailwindcss className="text-teal-400" />
                                    </div>
                                    <p className="mt-2 text-sm text-gray-500">Key Features: {data.keyfeatures}</p>
                                </div>
                            ))}
                            <div className="mt-4">
                                <Livepreview link="https://mezc4l.github.io/saaslandingpage/" />
                            </div>
                        </div>
                    </div>
                </AnimatedBox>
                <AnimatedBox>
                    <div className="flex flex-col-reverse lg:flex-row items-center lg:space-x-10 space-y-6 lg:space-y-0">
                        <div className="text-center 2xl:ml-[35rem] lg:text-left max-w-[600px]">
                            {Hoobank.map((data, index) => (
                                <div key={index}>
                                    <h1 className="text-2xl font-semibold text-gray-800">{data.title}</h1>
                                    <p className="mt-4 text-gray-700 leading-relaxed">{data.description}</p>
                                    <div className="flex justify-center lg:justify-start space-x-4 text-3xl mt-4">
                                        <FaJsSquare className='text-[#f0db4f]' />
                                        <FaReact className="text-[#61dbfb]" />
                                        <SiTailwindcss className="text-teal-400" />
                                    </div>
                                    <p className="mt-2 text-sm text-gray-500">Key Features: {data.keyfeatures}</p>
                                </div>
                            ))}
                            <div className="mt-4">
                                <Livepreview link="https://mezc4l.github.io/hoobank/" />
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <img
                                className="lg:h-[270px] lg:w-auto md:mb-0 mb-5 rounded-3xl shadow-lg"
                                src={hoobank}
                                alt="Hoobank Landing Page"
                            />
                        </div>
                    </div>
                </AnimatedBox>
            </div>
            <AnimatedBox>
                <div className="flex justify-center mt-9">
                    <LoadingButton />
                </div>
            </AnimatedBox>
        </div>
    );
};

export default Project;
