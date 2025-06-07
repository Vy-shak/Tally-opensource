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
      <Button className='max-w-16' onClick={handleYes}>Yes</Button>
      <Button onClick={handleNo}>No</Button>
    </div>
  )
}

export default YesorNoblock
