import React from 'react';
import '../index.css'
import useSlide from '../hooks/useSlide';
import {useLocation} from 'react-router-dom'

const Landing = ({position}) => {
    const {state} = {...useLocation()}
    const {goNext, sliding, animation} = useSlide(position,state)
    const animationButton = animation + (sliding ? '' : ' animate__delay-04s ')
    
 
    return (
        <div className={`${animation} w-full flex flex-col items-center justify-center`}>
            <h1 className='font-extrabold sm:text-7xl text-5xl text-center m-4'><span className='text-accent'>Copying</span> a text was never that <span className='text-accent'>easy</span></h1>
            <button onClick={() => goNext()} className={`${animationButton} button font-bold text-xl`}>Start</button>
        </div>
    );
};

export default Landing;