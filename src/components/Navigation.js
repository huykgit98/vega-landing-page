import React, { Component } from 'react';
import Link from 'next/link';
import Image from 'next/image';

class Navigation extends Component {
  render() {
    return (
      <nav className="navbar bg-primary">
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
