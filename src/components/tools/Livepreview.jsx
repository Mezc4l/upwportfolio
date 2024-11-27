import React from 'react';
import { FaRegEye } from "react-icons/fa6";

const Livepreview = ({ link }) => {
    return (
        <div>
            <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
                <FaRegEye className="inline-block text-xl" />
            </a>
        </div>
    );
};

export default Livepreview;
