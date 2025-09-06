import 'bootstrap/dist/css/bootstrap.css';
import '@/styles/globals.scss';
import '@/styles/blogs.scss';
import { Montserrat } from 'next/font/google';
import { useEffect } from 'react';
import Head from 'next/head';
import ReactGA from 'react-ga4';
import DynamicMeta from '@/components/DynamicMeta';
import useDropShadow from '@/hooks/useDropShadow';
import Layout from '@/components/Layout';

const montserrat = Montserrat({ subsets: ['latin'] });

export default function App({ Component, pageProps, router }) {
  useDropShadow();
  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle.min.js');

    // Initialize Google Analyitics.
    ReactGA.initialize(`${process.env.NEXT_PUBLIC_GTAG_ID}`);
  }, []);

  // Pages that shouldn't use the global Layout (home page has its own navigation via Hero component)
  const pagesWithoutLayout = [
    '/',
    '/privacy',
    '/terms',
    '/blogs/how-to-start-a-private-micro-podcast',
    '/blogs/the-evolution-of-audio-from-radio-to-roads',
  ];
  const shouldUseLayout = !pagesWithoutLayout.includes(router.pathname);
  
  // Debug logging
  console.log('Current pathname:', router.pathname);
  console.log('Should use layout:', shouldUseLayout);

  return (
    <>
      <DynamicMeta />
      <main className={montserrat.className}>
        {shouldUseLayout ? (
          <Layout>
            <Component {...pageProps} />
          </Layout>
        ) : (
          <Component {...pageProps} />
        )}
      </main>
    </>
  );
}
