// pages/reset/callback.tsx
export const dynamic = 'force-dynamic';
export const runtime = 'edge';

('use client');

import { useEffect, useState } from 'react';

export default function ResetCallback() {
  const [deepLink, setDeepLink] = useState<string | null>(null);

  useEffect(() => {
    // 1) The Edge Function should have redirected here with
    //    vega://reset-callback#access_token=…&refresh_token=…&expires_in=…
    const frag = window.location.hash.substring(1);
    if (!frag) return;

    // 2) Build the mobile deep-link
    const link = `vega://reset-callback#${frag}`;
    setDeepLink(link);

    // 3) Try to redirect immediately
    window.location.href = link;
  }, []);

  return (
    <div style={{ textAlign: 'center', padding: '4rem' }}>
      <h1>Resetting your password…</h1>
      <p>Please wait a moment—redirecting you to the Vega app.</p>

      {deepLink && (
        <>
          <p>If you don’t get prompted, tap the button below:</p>
          <button
            onClick={() => (window.location.href = deepLink)}
            style={{
              padding: '12px 24px',
              background: '#ef5350',
              color: '#fff',
              border: 'none',
              borderRadius: 4,
              cursor: 'pointer',
              fontSize: 16,
            }}
          >
            Open Vega App
          </button>
        </>
      )}
    </div>
  );
}
