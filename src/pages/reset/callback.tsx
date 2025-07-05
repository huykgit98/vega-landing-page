'use client';

import { useEffect, useState } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

export default function ResetCallback() {
  const [deepLink, setDeepLink] = useState<string>();

  useEffect(() => {
    const supabase = createClientComponentClient();

    // grab params
    const params = new URL(window.location.href).searchParams;
    const tokenHash = params.get('token_hash');
    const email = params.get('email');

    console.log('🔍 reset callback params:', { tokenHash, email });

    if (!tokenHash || !email) {
      console.error('❌ Missing token or email – redirecting to auth-error');
      alert(
        `Debug: missing token/email\n tokenHash=${tokenHash}\n email=${email}`,
      );
      window.location.href = 'vega://auth-error';
      return;
    }

    supabase.auth
      .verifyOtp({ type: 'recovery', token: tokenHash, email })
      .then(({ data, error }) => {
        console.log('🔄 verifyOtp result:', { data, error });
        if (error || !data?.session) {
          console.error(
            '❌ OTP verify failed – redirecting to auth-error',
            error,
          );
          alert(`Debug: verifyOtp failed:\n${error?.message}`);
          window.location.href = 'vega://auth-error';
          return;
        }

        // success!
        const { access_token, refresh_token, expires_in } = data.session;
        const frag = new URLSearchParams({
          access_token,
          refresh_token,
          expires_in: expires_in.toString(),
        }).toString();

        const link = `vega://reset-callback#${frag}`;
        console.log('✅ deep-linking to:', link);
        setDeepLink(link);
        window.location.href = link;
      });
  }, []);

  return (
    <div style={{ textAlign: 'center', padding: '4rem' }}>
      <h1>Resetting your password…</h1>
      <p>Please wait a moment—redirecting you to the Vega app.</p>

      {deepLink && (
        <>
          <p>If nothing happened, tap the button below:</p>
          <button
            onClick={() => (window.location.href = deepLink)}
            style={{
              padding: '12px 24px',
              background: '#ef5350',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Open Vega App
          </button>
        </>
      )}
    </div>
  );
}
