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
    pathSegment: "terms",
    title: `Terms & Conditions | GROVYN`,
    description: t("description"),
  });
}

export default async function TermsPage() {
  const tNav = await getTranslations("navbar");
  return (
    <main className="min-h-screen bg-white pt-28 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-black text-[#111] tracking-tight mb-2">
          {tNav("terms")} & Conditions
        </h1>
        <p className="text-sm text-gray-500 mb-10">Last updated: 15 February 2026</p>

        <div className="prose prose-gray max-w-none text-gray-600 space-y-8">
          <p className="leading-relaxed">
            Welcome to Grovyn. These Terms and Conditions govern your access to our website and your engagement with our services. Please read them carefully.
          </p>

          <section>
            <h2 className="text-xl font-bold text-[#111] mt-10 mb-3">1. Acceptance of Terms</h2>
            <p className="leading-relaxed">
              By accessing the Grovyn website or engaging with any of our services, you acknowledge that you have read, understood, and agreed to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you should refrain from using our website or services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#111] mt-10 mb-3">2. Use of Website</h2>
            <p className="leading-relaxed">
              The content available on this website is provided for general informational purposes only.
            </p>
            <p className="leading-relaxed mt-4">You agree not to:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Use the website for any unlawful or unauthorized purpose</li>
              <li>Attempt to gain unauthorized access to any systems, servers, or data</li>
              <li>Disrupt, interfere with, or compromise the security or functionality of the website</li>
            </ul>
            <p className="leading-relaxed mt-4">
              Grovyn reserves the right to restrict or terminate access to the website if misuse is detected.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#111] mt-10 mb-3">3. Intellectual Property</h2>
            <p className="leading-relaxed">
              All content on this website, including but not limited to text, designs, graphics, logos, branding, code samples, and materials, is the intellectual property of Grovyn unless explicitly stated otherwise.
            </p>
            <p className="leading-relaxed mt-4">
              You may not copy, reproduce, distribute, modify, or exploit any content without prior written consent from Grovyn.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#111] mt-10 mb-3">4. Services and Engagements</h2>
            <p className="leading-relaxed">
              Information provided on this website does not constitute a binding offer.
            </p>
            <p className="leading-relaxed mt-4">All services offered by Grovyn are subject to:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>A formally approved quotation or agreement</li>
              <li>A clearly defined scope of work</li>
              <li>Mutually agreed commercial and legal terms</li>
            </ul>
            <p className="leading-relaxed mt-4">
              Project work commences only after written confirmation, approval, or payment as agreed between Grovyn and the client.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#111] mt-10 mb-3">5. Payments, Fees, and No Refund Policy</h2>
            <p className="leading-relaxed">
              All fees charged by Grovyn are for professional services rendered and time allocated.
            </p>
            <p className="leading-relaxed mt-4">Unless explicitly stated in writing:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>All payments made to Grovyn are non-refundable</li>
              <li>Advance payments and milestone payments are non-refundable</li>
              <li>Delays or changes caused by the client do not entitle refunds</li>
            </ul>
            <p className="leading-relaxed mt-4">
              Refunds, if any, are issued solely at Grovyn&apos;s discretion and only when expressly agreed in writing.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#111] mt-10 mb-3">6. Domain, Hosting, and Third-Party Services</h2>
            <p className="leading-relaxed">
              Grovyn may assist with domain and hosting integration where required. However:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-1">
              <li>Domain and hosting services are provided by third-party vendors</li>
              <li>Fees for domain and hosting are payable directly by the client</li>
              <li>Grovyn is not responsible for downtime, suspension, data loss, or service failures caused by third-party providers</li>
              <li>Any third-party tools, platforms, APIs, or services used during a project are governed by their respective terms and conditions.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#111] mt-10 mb-3">7. Limitation of Liability</h2>
            <p className="leading-relaxed">
              To the maximum extent permitted under Indian law, Grovyn shall not be liable for:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Indirect, incidental, or consequential damages</li>
              <li>Loss of data, revenue, profits, or business opportunities</li>
              <li>Delays or failures caused by factors beyond reasonable control</li>
            </ul>
            <p className="leading-relaxed mt-4">
              The total liability of Grovyn, if any, shall not exceed the amount paid by the client for the specific service giving rise to the claim.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#111] mt-10 mb-3">8. Confidentiality</h2>
            <p className="leading-relaxed">
              Any non-public information shared during discussions, proposals, or project execution will be treated as confidential and used solely for the purpose of providing services.
            </p>
            <p className="leading-relaxed mt-4">
              Formal confidentiality obligations apply only where governed by a written agreement or contract.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#111] mt-10 mb-3">9. Intellectual Property Ownership for Client Projects</h2>
            <p className="leading-relaxed">Unless otherwise agreed in writing:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Intellectual property ownership transfers to the client only after full and final payment</li>
              <li>Grovyn retains the right to showcase completed work in its portfolio</li>
              <li>Third-party assets, libraries, or tools remain subject to their original licenses</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#111] mt-10 mb-3">10. Maintenance and AMC Services</h2>
            <p className="leading-relaxed">
              Maintenance or AMC services, if applicable, are governed by:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>A separate agreement or</li>
              <li>An approved quotation clearly defining scope, duration, and pricing</li>
            </ul>
            <p className="leading-relaxed mt-4">
              Grovyn is not obligated to provide ongoing maintenance unless formally agreed.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#111] mt-10 mb-3">11. Governing Law and Jurisdiction</h2>
            <p className="leading-relaxed">
              These Terms and Conditions are governed by the laws of India.
            </p>
            <p className="leading-relaxed mt-4">
              Any disputes shall be subject to the exclusive jurisdiction of the courts located in Mumbai, Maharashtra.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#111] mt-10 mb-3">12. Changes to Terms</h2>
            <p className="leading-relaxed">
              Grovyn reserves the right to update or modify these Terms and Conditions at any time. Continued use of the website or services after changes constitutes acceptance of the updated terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#111] mt-10 mb-3">13. Contact Information</h2>
            <p className="leading-relaxed">
              For any questions regarding these Terms and Conditions, please contact:
            </p>
            <div className="mt-4 p-4 bg-gray-50 rounded-lg text-sm">
              <p className="font-semibold text-[#111]">Grovyn</p>
              <p>
                Email:{" "}
                <a href="mailto:admin@grovyn.in" className="text-emerald-600 hover:underline">
                  admin@grovyn.in
                </a>
              </p>
              <p>
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
