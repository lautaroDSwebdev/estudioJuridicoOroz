import { ChildrenComp } from '@/types/types'
import React from 'react'

const BoxTitles = ({children}: ChildrenComp) => {
  return (
    <b className='font-bold text-[#000] text-2xl text-center  p-[1rem]'>
      {children}
    </b>
  )
}

export default BoxTitles
