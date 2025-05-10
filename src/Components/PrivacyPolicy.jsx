import React from "react";
import Footer from "./Footer";

const PrivacyPolicy = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-100 text-gray-800 px-6 py-28 md:px-20 lg:px-40">
        <h1 className="text-4xl font-bold mb-6 text-green-600">
          Privacy Policy
        </h1>

        <p className="mb-4">
          At <strong>HealthLife</strong>, your privacy is important to us. This
          Privacy Policy outlines the types of personal information we collect,
          how we use it, and the steps we take to ensure your data is secure.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">
          1. Information We Collect
        </h2>
        <ul className="list-disc pl-5 mb-4">
          <li>
            Personal Information (e.g., name, email address, etc.) when you contact us
          </li>
          <li>
            Non-personal data such as browser type, operating system, and site
            usage patterns
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-2">
          2. How We Use Your Information
        </h2>
        <ul className="list-disc pl-5 mb-4">
          <li>To improve our website and services</li>
          <li>To send updates, newsletters, or respond to inquiries</li>
          <li>To personalize content based on user interests</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-2">3. Data Protection</h2>
        <p className="mb-4">
          We use secure servers and implement various security measures to
          ensure the safety of your personal data. However, please note that no
          method of transmission over the internet is 100% secure.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">4. Your Consent</h2>
        <p className="mb-4">
          By using our website, you consent to this Privacy Policy.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">
          5. Changes to This Policy
        </h2>
        <p className="mb-4">
          We may update this policy occasionally. Changes will be posted on this
          page with a revised effective date.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">6. Contact Us</h2>
        <p className="mb-4">
          If you have any questions about this Privacy Policy, feel free to
          contact us at{" "}
          <a
            href="mailto:healthlifesupport@gmail.com"
            className="text-green-600 underline"
          >
            healthlifesupport@gmail.com
          </a>
          .
        </p>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
