"use client"
import React from 'react'
import { Button } from '@/components/export'
import { googleauth } from './api/auth'
import { supabase } from '@/lib/supabase'
import { useEffect } from 'react'
import { sendAccesstoken } from './api/auth'
import { apiUrl } from '@/config'

function page() {
  useEffect(() => {
    const updateAccessToken = async () => {
      // Check if session already exists
      const { data } = await supabase.auth.getSession();
      const accessToken = data.session?.access_token;

      console.log(data)

      if (accessToken) {
        sendAccesstoken(accessToken);
      }

      // Listen for future auth changes
      const { data: listener } = supabase.auth.onAuthStateChange(
        async (_event, session) => {
          const accessToken = session?.access_token;

          if (!accessToken) {
            console.warn("Access token not found");
            return;
          }

          if (!apiUrl) {
            console.warn("API URL not found");
            return;
          }

          sendAccesstoken(accessToken);
        }
      )

      // Cleanup listener on unmount
      return () => {
        listener?.subscription.unsubscribe();
      };
    };

    updateAccessToken();
  }, []);


  return (
    <div>
      <Button onClick={googleauth}>Connect with google</Button>
    </div>
  )
}

export default page
