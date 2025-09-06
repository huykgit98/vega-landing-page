import React from 'react';
import Layout from '../components/Layout';
import DynamicMeta from '../components/DynamicMeta';

const Privacy = () => {
  return (
    <Layout>
      <DynamicMeta
        title="Privacy Policy - Roads"
        description="Learn about how Roads protects your privacy and handles your personal information."
        url="/privacy"
      />
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <h1 className="mb-4">Privacy Policy</h1>
            <p className="text-muted mb-4">Last updated: September 6, 2025</p>

            <div className="privacy-content">
              <section className="mb-4">
                <h2>1. Information We Collect</h2>
                <p>
                  When you use Roads, we may collect the following types of
                  information:
                </p>
                <ul>
                  <li>
                    <strong>Account Information:</strong> Email address,
                    username, and profile information you provide when creating
                    an account.
                  </li>
                  <li>
                    <strong>Audio Content:</strong> Voice recordings and audio
                    content you share through the platform.
                  </li>
                  <li>
                    <strong>Usage Data:</strong> Information about how you
                    interact with our app, including features used and time
                    spent.
                  </li>
                  <li>
                    <strong>Device Information:</strong> Device type, operating
                    system, and app version.
                  </li>
                </ul>
              </section>

              <section className="mb-4">
                <h2>2. How We Use Your Information</h2>
                <p>We use the information we collect to:</p>
                <ul>
                  <li>Provide and maintain the Roads service</li>
                  <li>Process and deliver audio content</li>
                  <li>Improve our app and develop new features</li>
                  <li>Communicate with you about updates and support</li>
                  <li>Ensure the security and integrity of our platform</li>
                </ul>
              </section>

              <section className="mb-4">
                <h2>3. Information Sharing</h2>
                <p>
                  We do not sell, trade, or otherwise transfer your personal
                  information to third parties without your consent, except in
                  the following circumstances:
                </p>
                <ul>
                  <li>With your explicit consent</li>
                  <li>To comply with legal obligations</li>
                  <li>To protect our rights and safety</li>
                  <li>
                    With trusted service providers who assist in operating our
                    platform
                  </li>
                </ul>
              </section>

              <section className="mb-4">
                <h2>4. Data Security</h2>
                <p>
                  We implement appropriate technical and organizational measures
                  to protect your personal information against unauthorized
                  access, alteration, disclosure, or destruction.
                </p>
              </section>

              <section className="mb-4">
                <h2>5. Your Rights</h2>
                <p>You have the right to:</p>
                <ul>
                  <li>Access your personal information</li>
                  <li>Correct inaccurate data</li>
                  <li>Delete your account and associated data</li>
                  <li>Export your data</li>
                  <li>Opt-out of certain communications</li>
                </ul>
              </section>

              <section className="mb-4">
                <h2>6. Data Retention</h2>
                <p>
                  We retain your personal information for as long as necessary
                  to provide our services and comply with legal obligations. You
                  can request deletion of your account at any time.
                </p>
              </section>

              <section className="mb-4">
                <h2>7. Children's Privacy</h2>
                <p>
                  Roads is not intended for children under 13 years of age. We
                  do not knowingly collect personal information from children
                  under 13.
                </p>
              </section>

              <section className="mb-4">
                <h2>8. Changes to This Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. We will
                  notify you of any changes by posting the new Privacy Policy on
                  this page and updating the "Last updated" date.
                </p>
              </section>

              <section className="mb-4">
                <h2>9. Contact Us</h2>
                <p>
                  If you have any questions about this Privacy Policy, please
                  contact us at:
                </p>
                <p>
                  Email:{' '}
                  <a href="mailto:support@vegaapp.com">support@vegaapp.com</a>
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Privacy;
