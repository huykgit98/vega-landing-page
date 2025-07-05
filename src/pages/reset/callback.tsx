// Force dynamic rendering (no static export)
export const dynamic = 'force-dynamic';
// Use the experimental edge runtime
export const runtime = 'experimental-edge';

('use client');
import { useEffect, useState } from 'react';

export default function ResetCallback() {
  const [deepLink, setDeepLink] = useState<string | null>(null);

  useEffect(() => {
    // 1) grab the fragment your Edge Function attached
    const frag = window.location.hash.substring(1);
    if (!frag) return;

    // 2) build the vega:// link
    const link = `vega://reset-callback#${frag}`;
    setDeepLink(link);

    // 3) try to redirect
    window.location.href = link;
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
              display: 'inline-block',
              padding: '12px 24px',
              background: '#ef5350',
              color: '#fff',
              textDecoration: 'none',
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
