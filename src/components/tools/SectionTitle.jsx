import React from 'react'

export const SectionTitle = ({ title }) => {
    return (
        <div className="flex items-center justify-center my-10">
            <div className="flex-grow border-t border-gray-600 mx-4"></div>
            <h2 className="text-xl font-semibold">{title}</h2>
            <div className="flex-grow border-t border-gray-600 mx-4"></div>
        </div>
    );
};
export default SectionTitle;