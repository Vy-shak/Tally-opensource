import React from 'react'
import { Button,Toolbar } from '@/components/export'
import { useState } from 'react';

function SubmitBlock() {
    const [openToolBar, setOpenToolBar] = useState(false);
  return (
        <div  className='flex items-start  justify-start'>
          <div className='flex opacity-0  justify-start items-start'>
              <Toolbar blockId={'SUBMIT'} show={openToolBar} />  
          </div>
          <div className='flex flex-col justify-start items-start'>
            <Button>Submit</Button>
          </div>
        </div>
  )
}

export default SubmitBlock
