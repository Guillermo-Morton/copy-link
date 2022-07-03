import React from 'react';
import { NavLink } from 'react-router-dom'
const Navigation = () => {
    return (
        <div className='p-5 fixed'>
            <NavLink to='/' className='text-text text-lg font-bold'>Copy<span className='text-accent'>Link</span></NavLink>
        </div>
    );
};

export default Navigation;