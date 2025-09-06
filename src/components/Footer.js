import React, { Component } from 'react';
import Link from 'next/link';
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoTiktok,
  IoLogoYoutube,
} from 'react-icons/io5';

class Footer extends Component {
  render() {
    const current_year = new Date().getFullYear();
    return (
      <div id="section_footer">
        <div className="text-center py-4">
          <Link href="/privacy" className="btn btn-link">
            Privacy
          </Link>
          <span>|</span>
          <Link href="/terms" className="btn btn-link">
            Terms
          </Link>
          <span>|</span>
          <Link
            href="mailto:Vega Support<support@vegaapp.com>"
            className="btn btn-link"
          >
            Contact
          </Link>

          <div className="mt-2 mb-3">
            <Link
              href="https://www.facebook.com/vegamoneytracker"
              target="_blank"
              className="social-icon mx-1"
            >
              <IoLogoFacebook size={25} />
            </Link>

            <Link
              href="https://www.instagram.com/vegamoneytracker/"
              target="_blank"
              className="social-icon mx-1"
            >
              <IoLogoInstagram size={25} />
            </Link>

            <Link
              href="https://www.linkedin.com/company/vega-money-tracker/"
              target="_blank"
              className="social-icon mx-1"
            >
              <IoLogoLinkedin size={25} />
            </Link>

            <Link
              href="https://www.tiktok.com/@vegamoneytracker"
              target="_blank"
              className="social-icon mx-1"
            >
              <IoLogoTiktok size={25} />
            </Link>

            <Link
              href="https://www.youtube.com/@VegaMoneyTracker"
              target="_blank"
              className="social-icon mx-1"
            >
              <IoLogoYoutube size={25} />
            </Link>
          </div>

          <div>
            <Link
              href="/blogs/smart-budgeting-with-ai-technology"
              className="btn btn-link"
            >
              Smart Budgeting with AI
            </Link>
            <Link
              href="/blogs/how-to-track-expenses-effectively"
              className="btn btn-link"
            >
              How to Track Expenses Effectively
            </Link>
          </div>

          <p className="mt-4">
            Copyright © {current_year}, 1ManStartup LLC. All Rights Reserved.
          </p>
        </div>
      </div>
    );
  }
}

export default Footer;
