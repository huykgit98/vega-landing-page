// src/pages/auth/callback.js
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { createClient } from '@supabase/supabase-js'

// Initialize Supabase with your public values:
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

export default function AuthCallback() {
  const router = useRouter()

  useEffect(() => {
    async function handleCallback() {
      // 1) Grab the part after the “#”
      const hash = window.location.hash.substring(1)
      const params = new URLSearchParams(hash)

      // 2) Pull out tokens
      const access_token = params.get('access_token')
      const refresh_token = params.get('refresh_token')
      const error_description = params.get('error_description')

      if (error_description) {
        console.error('Auth error:', error_description)
        // you could show an error message here
        return
      }

      if (access_token && refresh_token) {
        // 3) Set the session in Supabase
        const { error } = await supabase.auth.setSession({
          access_token,
          refresh_token,
        })
        if (error) {
          console.error('Failed to set session:', error)
          return
        }
        // 4) Send them into your app’s home/dashboard
        router.replace('/')
      }
    }

    handleCallback()
  }, [router])

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Signing you in…</h1>
      <p>Please wait a moment—redirecting.</p>
    </div>
  )
}
