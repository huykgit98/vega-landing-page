// pages/auth/callback.tsx
'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs';

export default function AuthCallback() {
  useEffect(() => {
    const supabase = createBrowserSupabaseClient();
    supabase.auth
      .getSessionFromUrl({ storeSession: true })
      .then(({ error }) => {
        if (error) {
          window.location.href = 'vega://auth-error';
        } else {
          window.location.href = 'vega://auth-callback?verified=true';
        }
      });
  }, []);

  return (
    <div style={{ textAlign: 'center', padding: '4rem' }}>
      <h1>Signing you in…</h1>
      <p>Please wait a moment—redirecting.</p>
    </div>
  );
}
