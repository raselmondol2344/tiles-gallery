import Link from 'next/link';
import React from 'react';

const Banner = () => {
    return (

        <div
            className="hero min-h-[450px] mb-10"style={{
                backgroundImage:"url(/bannarImage.jpg)",
            }}
        >
            <div className="hero-overlay"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold"> <span>Discover Your</span> <span>Perfect Aesthetic</span></h1>
                    <Link href={'/all-tiles'}><button className=" mt-3 btn border-none bg-gray-400 text-white font-bold">Browse Now</button></Link>
                </div>
            </div>
        </div>


    );
};

export default Banner;