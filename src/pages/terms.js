import React from 'react';
import Layout from '../components/Layout';
import DynamicMeta from '../components/DynamicMeta';

const Terms = () => {
  return (
    <Layout>
      <DynamicMeta
        title="Terms of Service - Roads"
        description="Read the Terms of Service for using the Roads audio sharing platform."
        url="/terms"
      />
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <h1 className="mb-4">Terms of Service</h1>
            <p className="text-muted mb-4">Last updated: September 6, 2025</p>

            <div className="terms-content">
              <section className="mb-4">
                <h2>1. Acceptance of Terms</h2>
                <p>
                  By accessing and using Roads, you accept and agree to be bound
                  by the terms and provision of this agreement. If you do not
                  agree to abide by the above, please do not use this service.
                </p>
              </section>

              <section className="mb-4">
                <h2>2. Description of Service</h2>
                <p>
                  Roads is an audio sharing platform that allows users to
                  create, share, and discover audio content. The service
                  includes features for recording, uploading, and distributing
                  audio content to other users.
                </p>
              </section>

              <section className="mb-4">
                <h2>3. User Accounts</h2>
                <p>
                  To access certain features of Roads, you must create an
                  account. You are responsible for:
                </p>
                <ul>
                  <li>
                    Maintaining the confidentiality of your account credentials
                  </li>
                  <li>All activities that occur under your account</li>
                  <li>Providing accurate and complete information</li>
                  <li>Notifying us immediately of any unauthorized use</li>
                </ul>
              </section>

              <section className="mb-4">
                <h2>4. Content Guidelines</h2>
                <p>
                  When using Roads, you agree not to upload, share, or
                  distribute content that:
                </p>
                <ul>
                  <li>Violates any laws or regulations</li>
                  <li>Contains hate speech, harassment, or threats</li>
                  <li>Infringes on intellectual property rights</li>
                  <li>Contains malicious software or spam</li>
                  <li>Is sexually explicit or inappropriate</li>
                  <li>Promotes violence or illegal activities</li>
                </ul>
              </section>

              <section className="mb-4">
                <h2>5. Intellectual Property</h2>
                <p>
                  You retain ownership of the content you create and share on
                  Roads. By using our service, you grant us a non-exclusive,
                  worldwide license to use, display, and distribute your content
                  solely for the purpose of operating and improving our
                  platform.
                </p>
              </section>

              <section className="mb-4">
                <h2>6. Privacy</h2>
                <p>
                  Your privacy is important to us. Please review our Privacy
                  Policy, which also governs your use of the service, to
                  understand our practices.
                </p>
              </section>

              <section className="mb-4">
                <h2>7. Prohibited Uses</h2>
                <p>You may not use Roads to:</p>
                <ul>
                  <li>Violate any applicable laws or regulations</li>
                  <li>Transmit viruses or malicious code</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Interfere with or disrupt the service</li>
                  <li>Create multiple accounts for fraudulent purposes</li>
                </ul>
              </section>

              <section className="mb-4">
                <h2>8. Termination</h2>
                <p>
                  We may terminate or suspend your account immediately, without
                  prior notice or liability, for any reason whatsoever,
                  including without limitation if you breach the Terms.
                </p>
              </section>

              <section className="mb-4">
                <h2>9. Disclaimers</h2>
                <p>
                  Roads is provided on an "as is" and "as available" basis. We
                  make no warranties, expressed or implied, and hereby disclaim
                  all other warranties including implied warranties of
                  merchantability, fitness for a particular purpose, or
                  non-infringement.
                </p>
              </section>

              <section className="mb-4">
                <h2>10. Limitation of Liability</h2>
                <p>
                  In no event shall 1ManStartup LLC be liable for any indirect,
                  incidental, special, consequential, or punitive damages,
                  including without limitation, loss of profits, data, use,
                  goodwill, or other intangible losses.
                </p>
              </section>

              <section className="mb-4">
                <h2>11. Changes to Terms</h2>
                <p>
                  We reserve the right to modify or replace these Terms at any
                  time. If a revision is material, we will try to provide at
                  least 30 days notice prior to any new terms taking effect.
                </p>
              </section>

              <section className="mb-4">
                <h2>12. Contact Information</h2>
                <p>
                  If you have any questions about these Terms of Service, please
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

export default Terms;
