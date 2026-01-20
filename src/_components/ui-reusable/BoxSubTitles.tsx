import { ChildrenComp } from '@/types/types'
import React from 'react'

const BoxSubTitles = ({children}: ChildrenComp) => {
  return (
    <b className='font-semibold text-[#b4b4b4] text-2xl text-center  p-[1rem]'>
      {children}
    </b>
  )
}

export default BoxSubTitles
