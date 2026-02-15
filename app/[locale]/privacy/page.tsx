import { getTranslations } from "next-intl/server";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations("meta");
  return pageMetadata({
    locale,
    pathSegment: "privacy",
    title: `Privacy Policy | GROVYN`,
    description: t("description"),
  });
}

export default async function PrivacyPage() {
  const tNav = await getTranslations("navbar");
  return (
    <main className="min-h-screen bg-white pt-28 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-black text-[#111] tracking-tight mb-2">
          Privacy Policy
        </h1>
        <p className="text-sm text-gray-500 mb-10">Last updated: 15 February 2026</p>

        <div className="prose prose-gray max-w-none text-gray-600 space-y-8">
          <p className="leading-relaxed">
            Grovyn respects your privacy and is committed to protecting the personal information of visitors, clients, and partners. This Privacy Policy explains how we collect, use, store, and protect your information when you visit our website or engage with our services.
          </p>
          <p className="leading-relaxed">
            By accessing or using our website or services, you agree to the practices described in this Privacy Policy.
          </p>

          <section>
            <h2 className="text-xl font-bold text-[#111] mt-10 mb-3">1. Information We Collect</h2>
            <p className="leading-relaxed">
              We may collect personal and non-personal information through the following methods.
            </p>

            <h3 className="text-lg font-semibold text-[#111] mt-6 mb-2">a. Information you provide voluntarily</h3>
            <p className="leading-relaxed">
              This includes information you choose to share with us, such as:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Company name</li>
              <li>Project details or inquiries</li>
              <li>Any information submitted through contact forms, emails, proposals, or direct communication</li>
            </ul>
            <p className="leading-relaxed mt-4">
              You are responsible for ensuring that the information you provide is accurate and lawful.
            </p>

            <h3 className="text-lg font-semibold text-[#111] mt-6 mb-2">b. Information collected automatically</h3>
            <p className="leading-relaxed">
              When you visit our website, certain information may be collected automatically, including:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Device and operating system information</li>
              <li>Pages visited and time spent</li>
              <li>Referring website or source</li>
              <li>Date and time of access</li>
            </ul>
            <p className="leading-relaxed mt-4">
              This information is collected for analytics, performance monitoring, and security purposes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#111] mt-10 mb-3">2. How We Use Your Information</h2>
            <p className="leading-relaxed">
              We use collected information for the following purposes:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Responding to inquiries and communication requests</li>
              <li>Preparing proposals, quotations, and service discussions</li>
              <li>Providing and improving our services</li>
              <li>Improving website functionality and user experience</li>
              <li>Monitoring security and preventing misuse or fraud</li>
              <li>Complying with applicable legal and regulatory obligations</li>
            </ul>
            <p className="leading-relaxed mt-4">
              We do not sell, rent, or trade your personal information to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#111] mt-10 mb-3">3. Cookies and Tracking Technologies</h2>
            <p className="leading-relaxed">
              Grovyn may use cookies or similar tracking technologies to:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Understand how visitors interact with our website</li>
              <li>Improve website performance and content relevance</li>
              <li>Support analytics and security features</li>
            </ul>
            <p className="leading-relaxed mt-4">
              You may control or disable cookies through your browser settings. Disabling cookies may affect certain website functionalities.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#111] mt-10 mb-3">4. Information Sharing and Disclosure</h2>
            <p className="leading-relaxed">
              We may share information only in limited circumstances, including:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>With trusted service providers who assist us in operating our website or services</li>
              <li>When required by law, regulation, or legal process</li>
              <li>To protect the rights, safety, security, or property of Grovyn, our clients, or others</li>
            </ul>
            <p className="leading-relaxed mt-4">
              We do not share personal data for marketing or advertising purposes without your explicit consent.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#111] mt-10 mb-3">5. Third-Party Services and Links</h2>
            <p className="leading-relaxed">
              Our website may reference or link to third-party websites, platforms, or services. Grovyn is not responsible for the privacy practices, content, or policies of third-party websites.
            </p>
            <p className="leading-relaxed mt-4">
              We encourage users to review the privacy policies of any external sites they visit.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#111] mt-10 mb-3">6. Data Security</h2>
            <p className="leading-relaxed">
              We implement reasonable technical and organizational measures to protect personal information against unauthorized access, loss, misuse, or alteration.
            </p>
            <p className="leading-relaxed mt-4">
              However, no method of data transmission or storage over the internet is completely secure. While we strive to protect your information, we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#111] mt-10 mb-3">7. Data Retention</h2>
            <p className="leading-relaxed">
              We retain personal information only for as long as necessary to:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Fulfill the purposes outlined in this Privacy Policy</li>
              <li>Complete business, contractual, or legal obligations</li>
              <li>Comply with applicable laws and regulations</li>
            </ul>
            <p className="leading-relaxed mt-4">
              When information is no longer required, it is securely deleted or anonymized where appropriate.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#111] mt-10 mb-3">8. Your Rights</h2>
            <p className="leading-relaxed">
              Subject to applicable Indian laws, you may have the right to:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Request access to personal information we hold about you</li>
              <li>Request correction of inaccurate or incomplete data</li>
              <li>Request deletion of personal data, where legally permissible</li>
              <li>Withdraw consent where processing is based on consent</li>
            </ul>
            <p className="leading-relaxed mt-4">
              Requests can be made by contacting us using the details provided below. We may need to verify your identity before processing requests.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#111] mt-10 mb-3">9. Children&apos;s Privacy</h2>
            <p className="leading-relaxed">
              Grovyn&apos;s website and services are not intended for individuals under the age of 18. We do not knowingly collect personal information from minors.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#111] mt-10 mb-3">10. Changes to This Privacy Policy</h2>
            <p className="leading-relaxed">
              Grovyn may update this Privacy Policy from time to time. Any changes will be reflected on this page with an updated revision date. Continued use of the website or services after changes indicates acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#111] mt-10 mb-3">11. Contact Information</h2>
            <p className="leading-relaxed">
              If you have any questions or concerns regarding this Privacy Policy, you may contact us at:
            </p>
            <div className="mt-4 p-4 bg-gray-50 rounded-lg text-sm">
              <p>
                Email:{" "}
                <a href="mailto:admin@grovyn.in" className="text-emerald-600 hover:underline">
                  admin@grovyn.in
                </a>
              </p>
              <p className="mt-2">
                Website:{" "}
                <a href="https://grovyn.in" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline">
                  https://grovyn.in
                </a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
