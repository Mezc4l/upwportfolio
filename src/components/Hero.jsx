import React from 'react'
import { HeroFr } from "../constant/constant"
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-scroll';
import { MdKeyboardDoubleArrowDown } from "react-icons/md";



const Hero = () => {
    return (
        <div id='hero' className='w-full h-[38rem]'>
            <div className='flex flex-col justify-center items-center mt-[25rem] md:mt-[20rem]'>
                {HeroFr.map((data, index) => {
                    return (
                        <div key={index} className='text-center mt-4'>
                            <h1 className='text-2xl text-[#1a212d] md:text-4xl font-medium'>{data.title}</h1>
                            <p className='text-base md:text-xl mt-2 text-gray-600'>{data.subtitle}</p>
                        </div>
                    )
                })}

                <div className='text-sm md:text-base mt-2 text-gray-500'>
                    <TypeAnimation
                        sequence={[
                            "Building amazing user experiences.",
                            2000,
                            "Transforming designs into reality.",
                            2000,
                            "Passionate about coding and learning.",
                            2000,
                        ]}
                        wrapper="span"
                        cursor={true}
                        repeat={Infinity}
                        style={{ display: 'inline-block' }}
                    />
                </div>
                <Link
                    to='about-section'
                    smooth={true}
                    duration={800}
                    className="mt-8 cursor-pointer"
                >
                    <MdKeyboardDoubleArrowDown
                        className='text-4xl mt-[7rem] md:mt-7 lg:mt-4 animate-bounce' />
                </Link>
            </div>

        </div>
    )
}
export default Hero;

