import Link from 'next/link';
import React from 'react';

const Banner = () => {
    return (

        <div
            className="hero  min-h-[250px] md:min-h-[450px] mb-10"
            style={{
                backgroundImage:"url(/bannarImage.jpg)",
            }}
        >
            <div className="hero-overlay"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                    <h1 className="mb-5 font-bold 
                        text-2xl sm:text-3xl md:text-5xl"> <span>Discover Your</span> <span>Perfect Aesthetic</span></h1>
                    <Link href={'/all-tiles'}><button className="mt-3 btn border-none bg-gray-400 text-white font-bold 
                            text-sm md:text-base px-4 md:px-6">Browse Now</button></Link>
                </div>
            </div>
        </div>


    );
};

export default Banner;