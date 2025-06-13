import React from 'react'
import { Button } from '@/components/export'
import { googleauth } from './api/auth'

function page() {

  return (
    <div>
      <Button onClick={googleauth}></Button>
    </div>
  )
}

export default page
