import React, { Component } from 'react';
import Link from 'next/link';
import Image from 'next/image';

class Navigation extends Component {
  render() {
    return (
      <nav 
        className="navbar" 
        style={{
          background: 'linear-gradient(135deg, #fde6e3 0%, #ebeafc 100%)',
          backgroundImage: 'linear-gradient(135deg, #fde6e3 0%, #ebeafc 100%)',
        }}
      >
        <Link href="/" legacyBehavior>
          <a className="navbar-brand">
            <Image
              src="/images/vega-icon.png"
              alt="Vega Logo"
              height={90}
              width={90}
            />
          </a>
        </Link>
      </nav>
    );
  }
}

export default Navigation;
