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
               That's <span className='text-accent'>it</span>
            </h1>:
            <h1 className='font-extrabold sm:text-7xl text-4xl text-center m-4'>
                <span className='text-accent'>Yeah</span>, is really that <span className='text-accent'>easy</span>
            </h1> 
            }
           
            <CopyToClipboard text={text} onCopy={() => setCopied(true)}>
                <div className='bg-secondary p-5 rounded-lg w-3/4 mt-10 h-40 overflow-scroll no-scrollbar'>
                    <p className='text-left break-words p-1'>{text}</p>
                </div>
            </CopyToClipboard>
            <p className='text-sm mt-5 text-center px-10'>{copied ? 'Copied!' : 'Tap the text to copy. Be careful, it will overwrite your current clipboard'}</p>
            <button type='button' className='button' onClick={()=> goBack()}>Create new link</button>
        </div>
    );
};

export default CopyLink;