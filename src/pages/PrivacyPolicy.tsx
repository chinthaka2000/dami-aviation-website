import React, { useEffect } from 'react';
const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <section className="py-20 bg-gradient-to-b from-[#0a1929] to-[#0f2942] min-h-screen">
      <div className="container mx-auto px-4 md:px-6 pt-20">
        <div className="max-w-4xl mx-auto bg-[#0f2942]/50 backdrop-blur-lg rounded-2xl p-6 md:p-10 border border-white/10 shadow-xl">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Privacy Policy
          </h1>
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-gray-300">
              Last Updated:{' '}
              {new Date().toLocaleDateString('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric'
            })}
            </p>
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">
              1. Introduction
            </h2>
            <p className="text-gray-300">
              DAMI Aviation Lanka (Pvt) Ltd ("we," "our," or "us") respects your
              privacy and is committed to protecting it through our compliance
              with this policy. This Privacy Policy describes the types of
              information we may collect from you or that you may provide when
              you visit our website and our practices for collecting, using,
              maintaining, protecting, and disclosing that information.
            </p>
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">
              2. Information We Collect
            </h2>
            <p className="text-gray-300">
              We collect several types of information from and about users of
              our website, including:
            </p>
            <ul className="list-disc pl-6 text-gray-300 space-y-2 mt-4">
              <li>
                Personal information such as name, email address, telephone
                number, and postal address when you fill out our contact form or
                apply for our programs.
              </li>
              <li>
                Information about your internet connection, the equipment you
                use to access our website, and usage details.
              </li>
              <li>
                Non-personal identification information, including browser name,
                type of computer, and technical information about your means of
                connection to our website.
              </li>
            </ul>
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">
              3. How We Use Your Information
            </h2>
            <p className="text-gray-300">
              We use information that we collect about you or that you provide
              to us:
            </p>
            <ul className="list-disc pl-6 text-gray-300 space-y-2 mt-4">
              <li>To present our website and its contents to you.</li>
              <li>
                To provide you with information, products, or services that you
                request from us.
              </li>
              <li>To fulfill any other purpose for which you provide it.</li>
              <li>
                To notify you about changes to our website or any products or
                services we offer.
              </li>
              <li>To improve our website and services.</li>
            </ul>
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">
              4. Disclosure of Your Information
            </h2>
            <p className="text-gray-300">
              We may disclose personal information that we collect or you
              provide as described in this privacy policy:
            </p>
            <ul className="list-disc pl-6 text-gray-300 space-y-2 mt-4">
              <li>To our subsidiaries and affiliates.</li>
              <li>
                To contractors, service providers, and other third parties we
                use to support our business.
              </li>
              <li>To comply with any court order, law, or legal process.</li>
              <li>
                To enforce or apply our terms of use and other agreements.
              </li>
              <li>
                If we believe disclosure is necessary or appropriate to protect
                the rights, property, or safety of DAMI Aviation Lanka, our
                customers, or others.
              </li>
            </ul>
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">
              5. Data Security
            </h2>
            <p className="text-gray-300">
              We have implemented measures designed to secure your personal
              information from accidental loss and from unauthorized access,
              use, alteration, and disclosure. All information you provide to us
              is stored on secure servers behind firewalls.
            </p>
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">
              6. Changes to Our Privacy Policy
            </h2>
            <p className="text-gray-300">
              It is our policy to post any changes we make to our privacy policy
              on this page. If we make material changes to how we treat our
              users' personal information, we will notify you through a notice
              on the website home page. The date the privacy policy was last
              revised is identified at the top of the page.
            </p>
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">
              7. Contact Information
            </h2>
            <p className="text-gray-300">
              To ask questions or comment about this privacy policy and our
              privacy practices, contact us at:
            </p>
            <p className="text-gray-300 mt-4">
              <strong>DAMI Aviation Lanka (Pvt) Ltd</strong>
              <br />
              123 Airport Road, Colombo, Sri Lanka
              <br />
              Email: privacy@damiaviation.lk
              <br />
              Phone: +94 11 234 5678
            </p>
          </div>
        </div>
      </div>
    </section>;
};
export default PrivacyPolicy;