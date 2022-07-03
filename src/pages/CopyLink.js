import React, { useState } from 'react';
import useSlide from '../hooks/useSlide';
import {useLocation, useParams} from 'react-router-dom'
import { CopyToClipboard } from 'react-copy-to-clipboard'

const CopyLink = ({position}) => {
    const {state} = {...useLocation()}
    const [copied, setCopied]= useState(false)
    const {text} = useParams()
    const {goBack, goNext, animation} = useSlide(position,state)
    return (
        <div className={`${animation} w-full flex flex-col items-center justify-center`}>
            {copied ?  
            <h1 className='font-extrabold sm:text-7xl text-4xl text-center m-4'>
               You <span className='text-accent'>Got</span> it
            </h1>:
            <h1 className='font-extrabold sm:text-7xl text-4xl text-center m-4'>
                <span className='text-accent'>Copying</span> it's really that <span className='text-accent'>easy</span>
            </h1> 
            }
           
            <CopyToClipboard text={text} onCopy={() => setCopied(true)}>
                <div className='bg-secondary p-5 rounded-lg w-3/4 mt-10 h-40 overflow-scroll no-scrollbar'>
                    <p className='text-left break-words p-1'>{text}</p>
                </div>
            </CopyToClipboard>
            <p className='text-sm mt-5'>{copied ? 'Copied!' : 'Tap the text to copy'}</p>
        </div>
    );
};

export default CopyLink;