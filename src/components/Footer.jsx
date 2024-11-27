import React from 'react';
import { Footertext } from '../constant/constant';
import AnimatedBox from './tools/AnimatedBox';



const Footer = () => {
    return (
        <footer className="w-full h-[25rem] md:h-[23rem] bg-[#eaedee] text-white py-6">
            <div className='flex flex-col justify-center items-center mt-[5rem] md:mt-[5rem]'>
                <AnimatedBox>
                    {Footertext.map((data, index) => {
                        return (
                            <div key={index} className='text-center'>
                                <p className="text-lg md:text-3xl text-black font-semibold">{data.title}</p>
                                <p className="text-sm md:text-xl text-gray-600 mt-[2rem]">{data.sec}</p>
                            </div>
                        )
                    })}
                </AnimatedBox>
                <AnimatedBox>
                    {
                        Footertext.map((data, index) => {
                            return <a
                                key={index}
                                href="https://www.upwork.com/freelancers/~019c2e686b79ea9110?mp_source=share"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-[2rem] inline-block bg-[#1a212d] text-white py-2 px-4 rounded-[10px] hover:bg-gray-800 hover:text-gray-300 hover:scale-105 hover:shadow-lg transition-all"
                            >
                                {data.profile}
                            </a>
                        })
                    }
                </AnimatedBox>
                <AnimatedBox>
                    <div className="border-t border-gray-700 mt-10 pt-4 text-center">
                        {Footertext.map((data, index) => {
                            return <p
                                key={index}
                                className="text-sm text-gray-400">
                                © {new Date().getFullYear()} {data.copywrite}
                            </p>
                        })}
                    </div>
                </AnimatedBox>
            </div>
        </footer>
    );
};

export default Footer;
