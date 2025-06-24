"use client"
import React from 'react'
import { Button } from '@/components/export'
import { googleauth } from './api/auth'
import { useEffect } from 'react'
import { sendAccesstoken } from './api/auth'
import { apiUrl } from '@/config'

function page() {


  return (
    <div>
      <Button onClick={googleauth}>Connect with google</Button>
    </div>
  )
}

export default page
