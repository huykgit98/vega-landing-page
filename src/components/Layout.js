import React from 'react';
import useDropShadow from '@/hooks/useDropShadow';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Layout = ({ children, showNavigation = true, showFooter = true }) => {
  useDropShadow();

  return (
    <div>
      {showNavigation && <Navigation />}
      <main>{children}</main>
      {showFooter && <Footer />}
    </div>
  );
};

export default Layout;
