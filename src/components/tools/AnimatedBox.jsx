import React from 'react';
import { useInView } from 'react-intersection-observer';

const AnimatedBox = ({ children }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <div
            ref={ref}
            className={`transition-all duration-700 ease-in-out transform ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
        >
            {children}
        </div>
    );
};

export default AnimatedBox;
