import React from "react";
import nav_bg from '../assets/landing_nav_bg.png';

const LandingPage = () => {

    return(
        <>
            <div className='w-full h-full relative'>
                <img  src={nav_bg} alt='nav_bg'></img>
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end justify-end mb-10 mt-32">
                    <button>Home</button>
                    <button>Service</button>
                    <button>About us</button>
                </div>
            </div>
            <p className='text-blue-700 text-4xl border border-gray-200'>Esap</p>
        </>
    )
}


export default LandingPage;