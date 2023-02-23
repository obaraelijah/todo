import React from 'react'
import {AiFillGithub, AiOutlineInstagram, AiOutlineLinkedin} from 'react-icons/ai'

export default function Footer() {
  return (
    <div className='flex justify-center items-center gap-5 py-3'>
      <a target="_blank" href="https://www.instagram.com/" rel="noreferrer">
        <AiOutlineInstagram className="duration-300 hover:opacity-30 cursor-pointer" />
      </a>
      <a target="_blank" href="https://www.linkedin.com/" rel="noreferrer">
        <AiOutlineLinkedin className="duration-300 hover:opacity-30 cursor-pointer" />
      </a>
      <a target="_blank" href="https://github.com/" rel="noreferrer">
        <AiFillGithub className=" duration-300 hover:opacity-30 cursor-pointer" />
      </a>
    </div>
  )
}
