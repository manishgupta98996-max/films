import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { SITE_NAME, COURSE_TITLE } from "@/lib/config";

export const metadata = buildMetadata({
  title: "Privacy Policy | AI Filmmaking Studio",
  description: `Privacy policy for ${SITE_NAME}. Transparent disclosure on data handling, Google AdSense advertising cookies, analytics, GDPR, and CCPA compliance.`,
  path: "/privacy",
  ogImage: "/og-default.png",
});

export default function PrivacyPage() {
  return (
    <div className="flex-1 flex flex-col bg-light-bg text-light-text">
      {/* Dark Subpage Header */}
      <header className="bg-gradient-to-b from-dark-bg via-[#0c1224] to-[#0A0F1E] border-b border-dark-surface/60 py-16 px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-semibold mb-2 block">
            Privacy &amp; Data Security
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm sm:text-base text-zinc-400 max-w-xl mx-auto">
            How we protect, process, and handle your data when using {SITE_NAME}.
          </p>
        </div>
      </header>

      {/* Privacy Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="rounded-2xl border border-light-muted/20 bg-light-surface p-8 sm:p-10 shadow-sm space-y-8 text-base leading-relaxed text-zinc-800">
          <div className="text-xs font-mono text-zinc-500 uppercase tracking-wide">
            Last Updated: November 2026
          </div>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-zinc-900">
              1. Information We Collect
            </h2>
            <p>
              When you purchase <strong>{COURSE_TITLE}</strong> or subscribe to our free template library, we collect basic transactional contact information such as your name and email address to deliver your course materials, receipts, educational updates, and product announcements.
            </p>
            <p>
              We only collect personal information that you voluntarily provide to us when interacting with our website, subscribing to resources, or communicating with us directly.
            </p>
          </section>

          <section className="space-y-3 pt-6 border-t border-light-muted/15">
            <h2 className="text-xl font-bold text-zinc-900">
              2. Log Files &amp; Analytics Tracking
            </h2>
            <p>
              Like most standard website operators, {SITE_NAME} follows a standard procedure of utilizing log files. The information gathered within these log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamps, referring/exit pages, platform type, and the number of clicks.
            </p>
            <p>
              This data is collected automatically to administer the site, analyze trends, track user navigation patterns across our pages, prevent abuse, and gather broad demographic information for aggregate use. Log file records are not linked to personally identifiable information.
            </p>
            <p>
              In addition, we utilize <strong>Google Analytics</strong> to measure website traffic, monitor page performance, and understand user interactions. Google Analytics uses first-party cookies and anonymous identifiers to report aggregate trends without identifying individual visitors.
            </p>
          </section>

          <section className="space-y-3 pt-6 border-t border-light-muted/15">
            <h2 className="text-xl font-bold text-zinc-900">
              3. Cookies &amp; Web Beacons
            </h2>
            <p>
              Cookies are small text files placed on your device by websites that you visit. We use cookies to improve your browsing experience, store preferences, deliver essential session functionality, and understand how visitors interact with our content.
            </p>
            <p>
              You can instruct your browser to refuse all cookies or indicate when a cookie is being sent. However, if you disable cookies, some features and conveniences of our website may not function properly.
            </p>
          </section>

          <section className="space-y-3 pt-6 border-t border-light-muted/15">
            <h2 className="text-xl font-bold text-zinc-900">
              4. Third-Party Advertising &amp; Google AdSense
            </h2>
            <p>
              We may display third-party advertisements on {SITE_NAME} via advertising partners, including <strong>Google AdSense</strong>. Third-party vendors, including Google, use cookies to serve advertisements based on a user&apos;s prior visits to this website or other websites across the Internet.
            </p>
            <p>
              Google&apos;s use of advertising cookies (such as DoubleClick DART cookies) enables it and its partners to serve targeted ads to our visitors based on their visits to our site and/or other sites on the World Wide Web.
            </p>
            <p>
              Third-party ad servers or ad networks use technologies like cookies, JavaScript, or Web Beacons within their respective advertisements and links that appear on {SITE_NAME}. These technologies are sent directly to users&apos; browsers, automatically receiving your IP address when this happens. These mechanisms are used to measure the effectiveness of advertising campaigns and personalize the advertising content you see.
            </p>
            <p className="text-sm text-zinc-600 italic">
              Note: {SITE_NAME} has no direct access to or control over cookies that are used by third-party advertisers.
            </p>
          </section>

          <section className="space-y-3 pt-6 border-t border-light-muted/15">
            <h2 className="text-xl font-bold text-zinc-900">
              5. User Cookie Opt-Out Instructions
            </h2>
            <p>
              You have the right to control and opt out of personalized advertising at any time. You can choose to opt out of personalized Google advertising and manage your preferences through the following official channels:
            </p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li>
                <strong>Google Ads Settings:</strong> You can opt out of personalized advertising directly by visiting{" "}
                <a
                  href="https://www.google.com/settings/ads"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-800 font-semibold underline hover:text-amber-900 break-words"
                >
                  https://www.google.com/settings/ads
                </a>.
              </li>
              <li>
                <strong>Network Advertising Initiative &amp; AboutAds:</strong> You can opt out of third-party vendor cookies for personalized advertising by visiting the Digital Advertising Alliance&apos;s Consumer Choice Page at{" "}
                <a
                  href="https://www.aboutads.info/choices/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-800 font-semibold underline hover:text-amber-900 break-words"
                >
                  https://www.aboutads.info/choices/
                </a>{" "}
                or the Network Advertising Initiative (NAI) opt-out tool at{" "}
                <a
                  href="https://optout.networkadvertising.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-800 font-semibold underline hover:text-amber-900 break-words"
                >
                  https://optout.networkadvertising.org/
                </a>.
              </li>
              <li>
                <strong>Browser Cookie Controls:</strong> You can configure your web browser (Chrome, Safari, Edge, Firefox) to block third-party cookies or notify you whenever a cookie is set. Consult your specific browser&apos;s help menu to manage stored cookies.
              </li>
            </ul>
          </section>

          <section className="space-y-3 pt-6 border-t border-light-muted/15">
            <h2 className="text-xl font-bold text-zinc-900">
              6. Payment Data &amp; Merchant of Record
            </h2>
            <p>
              All payment transactions for {COURSE_TITLE} are processed through our merchant of record, <strong>Lemon Squeezy</strong>. {SITE_NAME} never sees, stores, or processes your credit card numbers, CVVs, or banking information directly on our servers.
            </p>
            <p>
              Lemon Squeezy acts as the Merchant of Record, handling all billing, sales tax calculation, EU VAT compliance, and PCI-DSS Level 1 compliant secure payment fulfillment.
            </p>
          </section>

          <section className="space-y-3 pt-6 border-t border-light-muted/15">
            <h2 className="text-xl font-bold text-zinc-900">
              7. General Data Protection Regulation (GDPR) Compliance
            </h2>
            <p>
              If you are a resident of the European Economic Area (EEA) or the United Kingdom (UK), your personal data is protected under the General Data Protection Regulation (GDPR). We process your personal data based on lawful bases:
            </p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li>
                <strong>Contractual Necessity:</strong> To fulfill purchases, process digital deliveries, and provide customer support for {COURSE_TITLE}.
              </li>
              <li>
                <strong>Consent:</strong> Where you have explicitly opted in to receive newsletter updates, free templates, or non-essential cookies.
              </li>
              <li>
                <strong>Legitimate Interests:</strong> To secure our infrastructure, monitor aggregate performance, and protect against fraudulent activity.
              </li>
            </ul>
            <p className="mt-3">
              Under GDPR, you have the following rights:
            </p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li><strong>Right of Access:</strong> You may request copies of your personal data held by us.</li>
              <li><strong>Right to Rectification:</strong> You may request that we correct inaccurate or incomplete personal information.</li>
              <li><strong>Right to Erasure (&quot;Right to be Forgotten&quot;):</strong> You may request the deletion of your personal data under certain legal conditions.</li>
              <li><strong>Right to Restrict Processing:</strong> You may request that we limit the processing of your data.</li>
              <li><strong>Right to Object to Processing:</strong> You may object to our processing of your personal information, including for direct marketing purposes.</li>
              <li><strong>Right to Data Portability:</strong> You may request that we transfer your personal data to another service provider or directly to you in a machine-readable format.</li>
              <li><strong>Right to Withdraw Consent:</strong> Where processing is based on consent, you may withdraw that consent at any time without affecting prior lawful processing.</li>
              <li><strong>Right to Lodge a Complaint:</strong> You have the right to lodge a complaint with your local Data Protection Authority if you believe our data processing violates applicable regulations.</li>
            </ul>
            <p className="mt-2">
              To exercise any of these rights, please contact us through our{" "}
              <Link href="/contact" className="text-amber-800 font-semibold underline hover:text-amber-900">
                Contact Page
              </Link>. We will respond to all valid requests within thirty (30) days.
            </p>
          </section>

          <section className="space-y-3 pt-6 border-t border-light-muted/15">
            <h2 className="text-xl font-bold text-zinc-900">
              8. California Consumer Privacy Act (CCPA &amp; CPRA) Rights
            </h2>
            <p>
              This section applies exclusively to California residents under the California Consumer Privacy Act (CCPA) and the California Privacy Rights Act (CPRA).
            </p>
            <p>
              <strong>Categories of Personal Information Collected:</strong> In the preceding 12 months, we have collected identifiers (name, email address, IP address), commercial transaction data (via Lemon Squeezy), and internet or network activity records (interaction metrics via Google Analytics and advertising partners).
            </p>
            <p>
              Under California law, California residents have the following rights:
            </p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li>
                <strong>Right to Know &amp; Access:</strong> You have the right to request disclosure of the specific pieces and categories of personal information we have collected, the categories of sources, and the business purpose for collecting it.
              </li>
              <li>
                <strong>Right to Delete:</strong> You have the right to request the deletion of your personal data, subject to statutory exemptions (such as completing transactions or complying with legal obligations).
              </li>
              <li>
                <strong>Right to Correct:</strong> You have the right to request correction of inaccurate personal information that we maintain about you.
              </li>
              <li>
                <strong>Right to Opt-Out of Sale or Sharing:</strong> We do not sell your personal information for monetary compensation. However, because the use of third-party advertising cookies (such as Google AdSense) may be classified as &quot;sharing&quot; or &quot;selling&quot; under California law for cross-context behavioral advertising, you have the right to opt out at any time using the opt-out links in Section 5 or by contacting us.
              </li>
              <li>
                <strong>Right to Non-Discrimination:</strong> We will not discriminate against you in pricing, service quality, or access to {SITE_NAME} educational content for exercising any of your CCPA/CPRA rights.
              </li>
            </ul>
            <p className="mt-2">
              California consumers may exercise their rights by submitting a request via our{" "}
              <Link href="/contact" className="text-amber-800 font-semibold underline hover:text-amber-900">
                Contact Page
              </Link>.
            </p>
          </section>

          <section className="space-y-3 pt-6 border-t border-light-muted/15">
            <h2 className="text-xl font-bold text-zinc-900">
              9. Children&apos;s Online Privacy Protection Act (COPPA)
            </h2>
            <p>
              Protecting the online privacy of children is of paramount importance to {SITE_NAME}. Our website, curriculum, and educational materials are intended strictly for individuals aged 13 and older (or aged 16 and older in the EEA).
            </p>
            <p>
              We do not knowingly collect, solicit, or maintain personally identifiable information from children under the age of 13. If you are under 13, please do not attempt to register, purchase courses, download templates, or provide any personal information on this site.
            </p>
            <p>
              If a parent or legal guardian discovers that their child under 13 has provided personal information to {SITE_NAME} without parental consent, please contact us immediately via our{" "}
              <Link href="/contact" className="text-amber-800 font-semibold underline hover:text-amber-900">
                Contact Page
              </Link>. We will take prompt and affirmative steps to permanently delete such information from our databases and server records.
            </p>
          </section>

          <section className="space-y-3 pt-6 border-t border-light-muted/15">
            <h2 className="text-xl font-bold text-zinc-900">
              10. Data Retention &amp; Security Safeguards
            </h2>
            <p>
              We retain personal data only for as long as necessary to fulfill the purposes for which it was collected, including fulfilling access to {COURSE_TITLE}, maintaining accurate financial accounts, resolving disputes, and adhering to applicable legal obligations.
            </p>
            <p>
              We implement industry-standard technical, organizational, and physical security measures to safeguard your personal data against unauthorized access, disclosure, alteration, or destruction. However, please be aware that no transmission over the Internet or electronic storage method is 100% secure.
            </p>
          </section>

          <section className="space-y-3 pt-6 border-t border-light-muted/15">
            <h2 className="text-xl font-bold text-zinc-900">
              11. Changes to This Privacy Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time to reflect operational, legal, or regulatory changes, or enhancements to our course offerings and advertising implementations. Any modifications will be posted directly to this page with an updated &quot;Last Updated&quot; revision date at the top of the policy. We encourage visitors to review this page periodically to stay informed about how we protect your personal information.
            </p>
          </section>

          <section className="space-y-3 pt-6 border-t border-light-muted/15">
            <h2 className="text-xl font-bold text-zinc-900">
              12. Contact Us
            </h2>
            <p>
              If you have any questions, concerns, or requests regarding this Privacy Policy, your personal information, or our data handling practices under GDPR, CCPA, or Google AdSense policies, please contact us directly via our{" "}
              <Link href="/contact" className="text-amber-800 font-semibold underline hover:text-amber-900">
                Contact Page
              </Link>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
