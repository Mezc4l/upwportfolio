import React, { useState } from 'react';
import { IoIosMenu, IoMdClose } from "react-icons/io";
import { Link } from 'react-scroll';
import AnimatedBox from './tools/AnimatedBox'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpenButton = () => {
        setIsOpen((prev) => !prev);
    };

    const handleCloseButton = () => {
        setIsOpen(false);
    }

    return (
        <div>
            <AnimatedBox>
                <div className='hidden md:flex items-center justify-evenly mt-4'>

                    <ul className='ml-10 space-x-7'>
                        <Link
                            to='hero'
                            smooth={true}
                            duration={800}
                            className="mt-8 cursor-pointer text-black hover:text-blue-950"
                        >
                            Home
                        </Link>
                        <Link
                            to='about-section'
                            smooth={true}
                            duration={800}
                            className="mt-8 cursor-pointer text-black hover:text-blue-950"
                        >   About me
                        </Link>
                        <Link
                            to='skills-section'
                            smooth={true}
                            duration={800}
                            className="mt-8 cursor-pointer text-black hover:text-blue-950"
                        >   Skills
                        </Link>
                        <Link
                            to='project-section'
                            smooth={true}
                            duration={800}
                            className="mt-8 cursor-pointer text-black hover:text-blue-950"
                        >   Projects
                        </Link>
                        <Link
                            to='why-section'
                            smooth={true}
                            duration={800}
                            className="mt-8 cursor-pointer text-black hover:text-blue-950"
                        >   Why Work With Me
                        </Link>
                    </ul>
                    <a
                        className=" bg-[#1a212d] text-white p-2 px-9 font-medium rounded-[10px] py-2  hover:bg-gray-800 hover:text-gray-300 hover:scale-105 hover:shadow-lg transition-all"
                        href="https://www.upwork.com/freelancers/~019c2e686b79ea9110?mp_source=share"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Hire Me
                    </a>

                </div>
            </AnimatedBox>
            <div className='md:hidden flex justify-end mr-3 ease-in-out duration-300' onClick={handleOpenButton}>
                {isOpen ? (
                    <IoMdClose className='text-black' size={40} />
                ) : (
                    <IoIosMenu className='text-black' size={40} />
                )}
            </div>
            <div
                className={`md:hidden flex flex-col items-center justify-center space-y-8 mt-[5rem] absolute w-full  
        ${isOpen ? 'top-0 opacity-100' : 'top-[-100%] opacity-0'}
        transition-all duration-500 ease-in-out`}
            >
                <a onClick={handleCloseButton} href="#">Home</a>
                <Link
                    to='about-section'
                    onClick={handleCloseButton}
                    smooth={true}
                    duration={800}
                    className="mt-8 cursor-pointer"
                >   About me
                </Link>
                <Link
                    to='skills-section'
                    onClick={handleCloseButton}
                    smooth={true}
                    duration={800}
                    className="mt-8 cursor-pointer"
                >   Skills
                </Link>
                <Link
                    to='project-section'
                    onClick={handleCloseButton}
                    smooth={true}
                    duration={800}
                    className="mt-8 cursor-pointer"
                >   Projects
                </Link>
                <Link
                    to='why-section'
                    onClick={handleCloseButton}
                    smooth={true}
                    duration={800}
                    className="mt-8 cursor-pointer"
                >   Why Work With Me
                </Link>

                <div className="mt-8">
                    <button className="bg-black text-white p-2 px-9 font-medium rounded-[10px] mb-4">
                        Hire Me
                    </button>
                </div>
            </div>

        </div>
    );
};

export default Navbar;
