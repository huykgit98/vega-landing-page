'use client';

import { useEffect } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

export default function AuthCallback() {
  useEffect(() => {
    const supabase = createClientComponentClient();

    // 1) pull token_hash, type & email out of the URL
    const params = new URL(window.location.href).searchParams;
    const tokenHash = params.get('token_hash');
    const type = params.get('type');
    const email = params.get('email');

    if (!tokenHash || type !== 'email' || !email) {
      // missing or wrong params → error
      window.location.href = 'vega://auth-error';
      return;
    }

    // 2) exchange the one-time code for a session
    supabase.auth
      .verifyOtp({
        type: 'email', // signup/email-confirmation
        token: tokenHash, // the one-time code
        email, // **required** by the TS signature
      })
      .then(({ data, error }) => {
        if (error || !data?.session) {
          window.location.href = 'vega://auth-error';
          return;
        }

        // 3) build the deep-link fragment
        const { access_token, refresh_token, expires_in } = data.session;
        const frag = new URLSearchParams({
          access_token,
          refresh_token,
          expires_in: expires_in.toString(),
        }).toString();

        // 4) hand off to Flutter
        window.location.href = `vega://auth-callback#${frag}`;
      });
  }, []);

  return (
    <div style={{ textAlign: 'center', padding: '4rem' }}>
      <h1>Signing you in…</h1>
      <p>Please wait a moment—redirecting you to the Vega app.</p>
    </div>
  );
}
