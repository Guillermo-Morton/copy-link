import React, { useState } from 'react';
import useSlide from '../hooks/useSlide';
import { useLocation } from 'react-router-dom'
import { CopyToClipboard } from 'react-copy-to-clipboard'

const CreateLink = ({ position }) => {
  const { state } = { ...useLocation() }
  const { goBack, goNext, animation, sliding } = useSlide(position, state)
  const [link, setLink] = useState()
  const [error, setError] = useState('')
  const [params, setParams] = useState()
  const [copied, setCopied] = useState(false)
  const animationClass= animation + (sliding ? ' animate__delay-08s' : '')
  const inputValidator = (string) => {
    const errors = []
    if(string.includes('/')) {
      errors.push('Character: "/" is invalid')
    }
    if(string.length === 0) {
      errors.push('You need to write something first')
    }
    return errors
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const text = e.currentTarget.elements.text.value
    const errors = inputValidator(text)
    const link = `${window.location.origin}/copylink/${text}`
    if(!errors.length) {
      setParams(text)
      setLink(link)
    } else {
      e.target.reset()
      setError(errors[0])
    }
  }
  return (
    <div className={`${copied ? animationClass : animation} w-full flex flex-col items-center justify-center`}>
      {link ?
        <div>
          <h1 className='font-extrabold sm:text-7xl text-4xl text-center m-4'>
            {
              copied ? 
              <span>
                <span className='text-accent'>Copied!</span>
              </span> : 
              <span>
                <span className='text-accent'>Tap</span> on your link. <span className='text-accent'>Share</span> it
              </span>
            }
            
          </h1>
          <CopyToClipboard text={link} onCopy={() => setCopied(true)}>
            <button type='button' onClick={() => goNext(params, 1300)} className='text-center w-full p-1 hover:text-accent'>{link?.length > 40 ? link.substring(0, 40) + '...' : link}</button>
          </CopyToClipboard>
        </div>
        :

        <div>
          <h1 className='font-extrabold sm:text-7xl text-4xl text-center m-4'>
            <span className='text-accent'>Create</span> a new link in one <span className='text-accent'>step</span>
          </h1>
          <form onSubmit={handleSubmit} className={`${animation} flex items-center p-2 rounded-br-lg mt-10`}>
            <input id='text' name='text' autoComplete='off' placeholder='Type some text' className='bg-secondary rounded-l-lg focus:outline-none px-3 py-1 flex-grow' type="text" />
            <button type='submit' className='button m-0 text-base rounded-l-none'>Create</button>
          </form>
          <p className='text-sm mt-5 text-center px-10'>{error}</p>
        </div>
      }
      <button type='button' className='button' onClick={()=> goBack()}>Back</button>
    </div>
  );
};

export default CreateLink;