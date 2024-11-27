import React, { useState } from 'react';

const LoadingButton = () => {
    const [loading, setLoading] = useState(false);

    const handleClick = () => {
        setLoading(true);
        setTimeout(() => {
            window.open('https://www.upwork.com/freelancers/~019c2e686b79ea9110?mp_source=share', '_blank');
            setLoading(false);
        }, 500);
    };

    return (
        <button
            onClick={handleClick}
            className={`flex items-center justify-center space-x-2 bg-[#1a212d] text-white py-[13px] px-[25px] rounded-[10px] hover:bg-gray-800 hover:text-gray-300 hover:scale-105 hover:shadow-lg transition-all`}
            disabled={loading}
        >
            {loading && (
                <div
                    className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"
                    aria-label="Loading"
                ></div>
            )}
            <span className="text-sm font-medium">
                {loading ? 'Loading...' : 'Explore More'}
            </span>
        </button>
    );
};

export default LoadingButton;
