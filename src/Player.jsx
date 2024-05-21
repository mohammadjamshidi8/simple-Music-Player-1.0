import React from 'react'
import { CiPlay1 } from "react-icons/ci";
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";

export default function Player() {
  return (
    <div className='flex flex-col gap-y-5 mt-10'>
        <div className='flex items-center gap-x-5'>
            <span>00:00</span>
            <input type="range" name="" id="" />
            <span>00:00</span>
        </div>

        <div className='flex justify-center gap-x-10 items-center'>
            <GrFormPrevious className='w-6 h-6 cursor-pointer'/>
            <CiPlay1 className='w-6 h-6 cursor-pointer'/>
            <GrFormNext className='w-6 h-6 cursor-pointer'/>
        </div>

    </div>
  )
}
