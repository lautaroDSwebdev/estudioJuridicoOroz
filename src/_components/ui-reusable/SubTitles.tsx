import { ChildrenComp } from '@/types/types'
import React from 'react'

const SubTitles = ({children}: ChildrenComp) => {
  return (
    <p className=' text-[1.7rem] text-[#898686] my-[1rem] p-[1rem]'>
      {children}
    </p>
  )
}

export default SubTitles