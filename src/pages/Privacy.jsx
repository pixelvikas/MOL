import React from "react";

const Privacy = () => {
  return (
    <>
      <div className="privacy-container">
        <h1 className="privacy-title">Privacy Policy</h1>

        <section className="privacy-section">
          <h2>Introduction</h2>
          <p>
            At <strong>My Ocean Logistics</strong>, we respect your privacy and
            are committed to protecting your personal data. We adhere to all
            legal, regulatory, and contractual obligations related to data
            privacy.
          </p>
        </section>

        <section className="privacy-section">
          <h2>Scope</h2>
          <p>
            This policy applies to all visitors of the My Ocean Logistics
            website.
          </p>
        </section>

        <section className="privacy-section">
          <h2>Information We Collect</h2>
          <h3>Personal Information:</h3>
          <ul>
            <li>Full Name</li>
            <li>Contact Numbers</li>
            <li>Residential Address</li>
            <li>Email Address</li>
            <li>Gender</li>
            <li>Date of Birth</li>
          </ul>

          <h3>Sensitive Personal Data or Information (SPDI):</h3>
          <ul>
            <li>Passwords</li>
            <li>Financial Information</li>
            <li>Health Conditions</li>
            <li>Sexual Orientation</li>
            <li>Medical History</li>
            <li>Biometric Information</li>
          </ul>

          <p>
            <em>
              Note: Information available in the public domain is not considered
              sensitive.
            </em>
          </p>
        </section>

        <section className="privacy-section">
          <h2>Purpose of Collection</h2>
          <p>We collect information to:</p>
          <ul>
            <li>Enable downloads and services</li>
            <li>Seek feedback or provide support</li>
            <li>Improve user experience</li>
            <li>Process applications or orders</li>
          </ul>
        </section>

        <section className="privacy-section">
          <h2>Data Usage & Retention</h2>
          <p>
            We only collect the minimum information needed. We retain and
            process it only as long as required, using strict security
            protocols.
          </p>
        </section>

        <section className="privacy-section">
          <h2>Disclosure of Information</h2>
          <p>We only disclose data:</p>
          <ul>
            <li>With your consent</li>
            <li>As legally required</li>
            <li>To secure business partners</li>
          </ul>
        </section>

        <section className="privacy-section">
          <h2>Rights & Access</h2>
          <p>
            You can modify or delete your data, or withdraw consent, by
            contacting our Grievance Officer at{" "}
            <a href="mailto:Support@myoceanlogistics.com">
              Support@myoceanlogistics.com
            </a>
            .
          </p>
        </section>

        <section className="privacy-section">
          <h2>Mobile App Privacy</h2>
          <p>
            We also ensure the privacy of users interacting via our mobile apps:
          </p>
          <ul>
            <li>Process orders and queries</li>
            <li>Send updates and alerts</li>
            <li>Improve services</li>
          </ul>
        </section>

        <footer className="privacy-footer">
          <p>
            For questions, contact us at{" "}
            <a href="mailto:Support@myoceanlogistics.com">
              Support@myoceanlogistics.com
            </a>
          </p>
        </footer>
      </div>

      <style>{`
        .privacy-container {
          max-width: 900px;
          margin: auto;
          padding: 40px 20px;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          color: #2c3e50;
          background: #ffffff;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
        }

        .privacy-title {
          text-align: center;
          font-size: 38px;
          font-weight: bold;
          color: #0d47a1;
          margin-bottom: 30px;
        }

        .privacy-section {
          margin-bottom: 30px;
        }

        .privacy-section h2 {
          font-size: 24px;
          margin-bottom: 10px;
          color: #1a237e;
        }

        .privacy-section h3 {
          font-size: 18px;
          margin-top: 15px;
          color: #3949ab;
        }

        .privacy-section p {
          font-size: 16px;
          line-height: 1.7;
        }

        .privacy-section ul {
          list-style: disc inside;
          padding-left: 15px;
          margin-top: 10px;
        }

        .privacy-footer {
          text-align: center;
          padding-top: 20px;
          border-top: 1px solid #ddd;
        }

        .privacy-footer a {
          color: #0d47a1;
          text-decoration: none;
          font-weight: bold;
        }

        .privacy-footer a:hover {
          text-decoration: underline;
        }

        @media (max-width: 600px) {
          .privacy-title {
            font-size: 28px;
          }

          .privacy-section h2 {
            font-size: 20px;
          }
        }
      `}</style>
    </>
  );
};

export default Privacy;
