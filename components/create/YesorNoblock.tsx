import React, { useEffect, useState } from 'react'
import { useFormStore } from '@/lib/useFormData';
import { Button } from '../export'
import { pol } from '@/types/formTypes';

interface yesorNoblockProps {
    id:string
}


function YesorNoblock({id}:yesorNoblockProps) {
   const {updateYesorNo} = useFormStore()
   const [selected,setSelected] = useState<pol>(pol.none);

   console.log(selected)

   useEffect(()=>{
    updateYesorNo(id,selected)
   },[selected]);

   const handleYes = ()=>{
    setSelected((prev)=>pol.Yes)
   }
   const handleNo = ()=>{
    setSelected((prev)=>pol.No)
   }

  return (
    <div className='flex gap-x-2 justify-center items-center'>
      <Button className={`max-w-16 ${selected==pol.Yes?"bg-neutral-900 text-white border-neutral-900":"bg-white border-neutral-400 text-neutral-800"} hover:bg-white border-2 `} onClick={handleYes}>Yes</Button>
      <Button className={`max-w-16 ${selected==pol.No?"bg-neutral-900 text-white border-neutral-900":"bg-white border-neutral-400 text-neutral-800"} hover:bg-white border-2 `} onClick={handleNo}>No</Button>
    </div>
  )
}

export default YesorNoblock
