import { Typography } from 'antd';
import React from 'react';

const PrivacyPolicy: React.FC = () => {
  const user = 'mh';
  const domain = 'thisisholti.com';
  return (
    <div>
      <h2>Privacy Policy</h2>
      <p>
        Your privacy is important to us. This privacy policy explains how we
        collect, use, and protect your information.
      </p>

      <h3>1. Information We Collect</h3>
      <p>
        We do not collect any personal information from users of our
        application. We do not use cookies or any other tracking technologies.
      </p>

      <h3>2. Use of Information</h3>
      <p>
        Since we do not collect any personal information, we do not use or share
        any personal information with third parties.
      </p>

      <h3>3. Hosting on Netlify</h3>
      <p>
        Our application is hosted on Netlify. Netlify may collect log data and
        use cookies to ensure the proper functioning of our website. Netlify’s
        privacy policy can be found{' '}
        <a href="https://www.netlify.com/privacy/">here</a>.
      </p>

      <h3>4. Data Security</h3>
      <p>
        We are committed to ensuring that your information is secure. However,
        since we do not collect any personal information, there is no personal
        information to secure.
      </p>

      <h3>5. Changes to This Privacy Policy</h3>
      <p>
        We may update this privacy policy from time to time. Any changes will be
        posted on this page. Your continued use of the application after any
        changes signifies your acceptance of the new privacy policy.
      </p>

      <h3>6. Contact Us</h3>
      <p>
        If you have any questions about this privacy policy, please{' '}
        <Typography.Link
          href={`mailto:${user}@${domain}`}
          title="Contact"
        >
          contact us
        </Typography.Link>
        .
      </p>
    </div>
  );
};

export default PrivacyPolicy;
