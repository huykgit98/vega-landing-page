import React from 'react';
import DynamicMeta from '../components/DynamicMeta';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Privacy = () => {
  return (
    <>
      <Navigation />
      <DynamicMeta
        title="Privacy Policy - Vega"
        description="Learn about how Vega protects your privacy and handles your personal information."
        url="/privacy"
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
              <h1 className="display-4 mb-3">Privacy Policy</h1>
              <p className="lead mb-0">
                Learn how Vega protects your privacy and handles your personal
                information
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
                          href="#information-collect"
                          className="text-decoration-none"
                        >
                          Information We Collect
                        </a>
                      </li>
                      <li>
                        <a href="#how-we-use" className="text-decoration-none">
                          How We Use Your Information
                        </a>
                      </li>
                      <li>
                        <a
                          href="#data-sharing"
                          className="text-decoration-none"
                        >
                          Data Sharing and Disclosure
                        </a>
                      </li>
                      <li>
                        <a href="#your-rights" className="text-decoration-none">
                          Your Data Rights
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <ul className="list-unstyled mb-0">
                      <li>
                        <a
                          href="#data-security"
                          className="text-decoration-none"
                        >
                          Data Security Disclaimer
                        </a>
                      </li>
                      <li>
                        <a
                          href="#policy-changes"
                          className="text-decoration-none"
                        >
                          Changes to Privacy Policy
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

            <div className="privacy-content">
              <div className="alert alert-info" role="alert">
                <strong>At Vega, your privacy is our priority.</strong> This
                Privacy Policy outlines how we collect, use, and safeguard your
                personal information when you use our money tracking app.
              </div>

              <section className="mb-5" id="information-collect">
                <h2 className="border-bottom pb-2 mb-4">
                  Information We Collect
                </h2>
                <p>We collect the following types of information:</p>

                <h3>1. Personal Information</h3>
                <p>
                  <strong>1.1 Email Address:</strong> Used for account creation
                  and login purposes.
                </p>
                <p>
                  <strong>1.2 Name:</strong> Optional, used to personalize your
                  experience.
                </p>
                <p>
                  <strong>1.3 Gender:</strong> Optional, used to personalize
                  your experience with our chatbot feature and provide more
                  relevant financial guidance and recommendations.
                </p>

                <h3>2. Financial Information</h3>
                <p>
                  <strong>2.1 Transaction Data:</strong> Includes categories,
                  items, amounts, and dates of transactions you input.
                </p>

                <h3>3. Usage Data</h3>
                <p>
                  <strong>3.1 Device Information:</strong> Information about the
                  device you use to access our app, such as device type,
                  operating system, and unique device identifiers.
                </p>
                <p>
                  <strong>3.2 Log Data:</strong> Information about your
                  interactions with the app, including timestamps, features
                  used, and errors encountered.
                </p>

                <h3>4. Marketing Communications</h3>
                <p>
                  <strong>4.1 Default Opt-In:</strong> By signing up for our
                  app, you are automatically opted in to receive marketing
                  communications from us. These communications may include
                  information about our products, services, promotions, and
                  other updates.
                </p>
                <p>
                  <strong>4.2 Opt-Out Option:</strong> You can opt out of
                  marketing communications at any time by clicking the
                  "unsubscribe" link at the bottom of our emails or by adjusting
                  your preferences in the app's settings.
                </p>
              </section>

              <section className="mb-5" id="how-we-use">
                <h2 className="border-bottom pb-2 mb-4">
                  How We Use Your Information
                </h2>
                <p>
                  We use the collected information for the following purposes:
                </p>
                <ol>
                  <li>
                    <strong>To Provide and Maintain the Service:</strong> Ensure
                    smooth operation and functionality of the app.
                  </li>
                  <li>
                    <strong>To Improve Our Service:</strong> Analyze usage
                    patterns to enhance user experience and add new features.
                  </li>
                  <li>
                    <strong>To Personalize Your Experience:</strong> Use
                    personal information such as name and gender to provide
                    customized chatbot interactions and tailored financial
                    guidance.
                  </li>
                  <li>
                    <strong>To Communicate with You:</strong> Send important
                    updates, notifications, and support messages.
                  </li>
                  <li>
                    <strong>To Ensure Security:</strong> Protect your account
                    and our services from unauthorized access and abuse.
                  </li>
                </ol>
              </section>

              <section className="mb-5" id="data-sharing">
                <h2 className="border-bottom pb-2 mb-4">
                  Data Sharing and Disclosure
                </h2>
                <p>
                  We do not share your personal information with third parties
                  except in the following cases:
                </p>
                <ol>
                  <li>
                    <strong>With Your Consent:</strong> When you explicitly
                    agree to share your information.
                  </li>
                  <li>
                    <strong>Legal Requirements:</strong> If required by law, to
                    comply with legal processes or protect our rights.
                  </li>
                  <li>
                    <strong>Service Providers:</strong> Third-party vendors who
                    assist us in providing the service, under strict
                    confidentiality agreements.
                  </li>
                </ol>
              </section>

              <section className="mb-5" id="your-rights">
                <h2 className="border-bottom pb-2 mb-4">Your Data Rights</h2>
                <p>You have the following rights regarding your data:</p>
                <ol>
                  <li>
                    <strong>Access:</strong> Request a copy of the personal
                    information we hold about you.
                  </li>
                  <li>
                    <strong>Correction:</strong> Request corrections to any
                    inaccurate or incomplete information.
                  </li>
                  <li>
                    <strong>Deletion:</strong> Request deletion of your personal
                    information, subject to legal and contractual obligations.
                  </li>
                </ol>
              </section>

              <section className="mb-5" id="data-security">
                <h2 className="border-bottom pb-2 mb-4">
                  Data Security Disclaimer
                </h2>
                <p>
                  We take reasonable measures to secure your personal
                  information and protect it from unauthorized access, use, or
                  disclosure. However, no method of transmission over the
                  internet or electronic storage is completely secure.
                  Therefore, while we strive to use commercially acceptable
                  means to protect your data, we cannot guarantee its absolute
                  security. By using our service, you acknowledge and agree that
                  we are not liable for any data breach or unauthorized access
                  beyond our reasonable control.
                </p>
              </section>

              <section className="mb-5" id="policy-changes">
                <h2 className="border-bottom pb-2 mb-4">
                  Changes to the Privacy Policy
                </h2>
                <p>
                  We reserve the right to modify this Privacy Policy at any
                  time. We will update the "Last Updated" date at the top of
                  this document. Your continued use of the App after the changes
                  become effective constitutes your acceptance of the new
                  policies.
                </p>
              </section>

              <section className="mb-5" id="contact">
                <h2 className="border-bottom pb-2 mb-4">Contact Us</h2>
                <p>
                  If you have any questions or concerns about this Privacy
                  Policy, please contact us at{' '}
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

export default Privacy;
