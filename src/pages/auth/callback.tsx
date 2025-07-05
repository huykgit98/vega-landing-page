// pages/auth/callback.tsx
'use client';

import { useEffect, useState } from 'react';

export default function AuthCallback() {
  const [deepLink, setDeepLink] = useState<string | null>(null);

  useEffect(() => {
    const frag = window.location.hash.substring(1);
    if (!frag) return;
    const link = `vega://auth-callback#${frag}`;
    setDeepLink(link);
    window.location.href = link;
  }, []);

  return (
    <div style={{ textAlign: 'center', padding: '4rem' }}>
      <h1>Signing you in…</h1>
      <p>Please wait a moment—redirecting you to the Vega app.</p>

      {deepLink && (
        <>
          <p>If nothing happened, tap below:</p>
          <button
            onClick={() => (window.location.href = deepLink)}
            style={{
              display: 'inline-block',
              padding: '12px 24px',
              background: '#5c6bc0',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '16px',
            }}
          >
            Open Vega App
          </button>
        </>
      )}
    </div>
  );
}
