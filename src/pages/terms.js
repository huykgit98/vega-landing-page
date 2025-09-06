import React from 'react';
import DynamicMeta from '../components/DynamicMeta';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Terms = () => {
  return (
    <>
      <Navigation />
      <DynamicMeta
        title="Terms & Conditions - Vega"
        description="Read the Terms & Conditions for using the Vega money tracking app."
        url="/terms"
      />

      {/* Header Section */}
      <div 
        className="py-5" 
        style={{ 
          background: 'linear-gradient(135deg, #fde6e3 0%, #ebeafc 100%)',
          color: '#333',
          backgroundImage: 'linear-gradient(135deg, #fde6e3 0%, #ebeafc 100%)',
        }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h1 className="display-4 mb-3">Terms & Conditions</h1>
              <p className="lead mb-0">
                Terms and conditions for using the Vega money tracking app
              </p>
              <p className="text-muted mt-2">Last updated: September 6, 2025</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            {/* Table of Contents */}
            <div className="card mb-5">
              <div className="card-body">
                <h5 className="card-title">Quick Navigation</h5>
                <div className="row">
                  <div className="col-md-6">
                    <ul className="list-unstyled mb-0">
                      <li>
                        <a
                          href="#introduction"
                          className="text-decoration-none"
                        >
                          Introduction
                        </a>
                      </li>
                      <li>
                        <a
                          href="#account-registration"
                          className="text-decoration-none"
                        >
                          Account Registration
                        </a>
                      </li>
                      <li>
                        <a
                          href="#user-responsibilities"
                          className="text-decoration-none"
                        >
                          User Responsibilities
                        </a>
                      </li>
                      <li>
                        <a
                          href="#intellectual-property"
                          className="text-decoration-none"
                        >
                          Intellectual Property
                        </a>
                      </li>
                      <li>
                        <a href="#termination" className="text-decoration-none">
                          Termination of Accounts
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <ul className="list-unstyled mb-0">
                      <li>
                        <a href="#liability" className="text-decoration-none">
                          Limitation of Liability
                        </a>
                      </li>
                      <li>
                        <a
                          href="#governing-law"
                          className="text-decoration-none"
                        >
                          Governing Law
                        </a>
                      </li>
                      <li>
                        <a
                          href="#terms-changes"
                          className="text-decoration-none"
                        >
                          Changes to Terms
                        </a>
                      </li>
                      <li>
                        <a href="#contact" className="text-decoration-none">
                          Contact Us
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="terms-content">
              <section className="mb-5" id="introduction">
                <h2 className="border-bottom pb-2 mb-4">1. Introduction</h2>
                <p>
                  Welcome to Vega. These Terms and Conditions govern your use of
                  our money tracking app ("the App"). By signing up for an
                  account and using our services, you agree to comply with and
                  be bound by these terms. If you do not agree with any part of
                  these terms, please do not use the App.
                </p>
              </section>

              <section className="mb-5" id="account-registration">
                <h2 className="border-bottom pb-2 mb-4">
                  2. Account Registration
                </h2>
                <p>
                  <strong>2.1 Account Information:</strong> You agree to provide
                  accurate and complete information during registration and keep
                  your account information updated.
                </p>
                <p>
                  <strong>2.2 Account Security:</strong> You are responsible for
                  maintaining the confidentiality of your account login
                  credentials. You are also responsible for all activities that
                  occur under your account. Please notify us immediately if you
                  suspect any unauthorized use of your account.
                </p>
              </section>

              <section className="mb-5" id="user-responsibilities">
                <h2 className="border-bottom pb-2 mb-4">
                  3. User Responsibilities
                </h2>
                <p>
                  <strong>3.1 Compliance with Laws:</strong> You agree to use
                  the App in accordance with all applicable laws and
                  regulations.
                </p>
                <p>
                  <strong>3.2 Prohibited Activities:</strong> You agree not to
                  engage in any of the following activities:
                </p>
                <ul>
                  <li>
                    Using the App for any illegal or unauthorized purpose.
                  </li>
                  <li>
                    Misusing, hacking, or reverse engineering any part of the
                    App.
                  </li>
                  <li>
                    Uploading or transmitting any malicious code or harmful
                    content.
                  </li>
                  <li>
                    Impersonating any person or entity or misrepresenting your
                    affiliation with any person or entity.
                  </li>
                </ul>
              </section>

              <section className="mb-5" id="intellectual-property">
                <h2 className="border-bottom pb-2 mb-4">
                  4. Intellectual Property
                </h2>
                <p>
                  <strong>4.1 Ownership:</strong> The App, including its
                  content, features, and functionality, is owned by Vega and is
                  protected by intellectual property laws. You do not have the
                  right to copy, distribute, or create derivative works from any
                  part of the App without our express permission.
                </p>
                <p>
                  <strong>4.2 User Content:</strong> Any content you submit
                  through the App, such as feedback or suggestions, becomes the
                  property of Vega. We may use, modify, and distribute this
                  content without any obligation to you.
                </p>
              </section>

              <section className="mb-5" id="termination">
                <h2 className="border-bottom pb-2 mb-4">
                  5. Termination of Accounts
                </h2>
                <p>
                  <strong>5.1 Termination by You:</strong> You may close your
                  account at any time by contacting us.
                </p>
                <p>
                  <strong>5.2 Termination by Us:</strong> We reserve the right
                  to suspend or terminate your account if you violate these
                  Terms and Conditions or engage in any activity that we deem
                  harmful to the App or other users.
                </p>
              </section>

              <section className="mb-4">
                <h2>6. Limitation of Liability</h2>
                <p>
                  <strong>6.1 No Warranty:</strong> The App is provided "as is"
                  without any warranties, express or implied. We do not
                  guarantee that the App will be error-free, secure, or
                  continuously available.
                </p>
                <p>
                  <strong>6.2 Limitation of Liability:</strong> To the maximum
                  extent permitted by law, Vega shall not be liable for any
                  damages, including but not limited to indirect, incidental, or
                  consequential damages, arising out of or related to your use
                  of the App.
                </p>
              </section>

              <section className="mb-4">
                <h2>7. Governing Law</h2>
                <p>
                  These Terms and Conditions are governed by and construed in
                  accordance with the laws of Australia. Any disputes arising
                  from or related to these terms shall be subject to the
                  exclusive jurisdiction of the courts of Australia. If you
                  access the App from outside Australia, you are responsible for
                  complying with the local laws applicable to your use of the
                  App.
                </p>
              </section>

              <section className="mb-4">
                <h2>8. Changes to the Terms</h2>
                <p>
                  We reserve the right to modify these Terms and Conditions at
                  any time. We will update the "Last Updated" date at the top of
                  this document. Your continued use of the App after the changes
                  become effective constitutes your acceptance of the new terms.
                </p>
              </section>

              <section className="mb-4">
                <h2>9. Contact Us</h2>
                <p>
                  If you have any questions or concerns about these Terms and
                  Conditions, please contact us at{' '}
                  <a href="mailto:support@vegaapp.com">support@vegaapp.com</a>.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Terms;
