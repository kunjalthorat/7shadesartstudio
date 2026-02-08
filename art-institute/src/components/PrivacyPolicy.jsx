import { motion } from "framer-motion"

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-white pt-32 pb-20 px-6 sm:px-10">
            <div className="max-w-4xl mx-auto prose prose-slate">
                <h1 className="text-3xl md:text-4xl font-bold text-[#1F5C8C] mb-8">Privacy Policy</h1>

                <p className="text-gray-600 mb-6 italic">Effective Date: February 8, 2026</p>

                <section className="mb-8">
                    <h2 className="text-xl font-bold text-gray-800 mb-4">1. Introduction</h2>
                    <p className="text-gray-600 leading-relaxed">
                        Welcome to 7 Shades Art Studio. We respect your privacy and are committed to protecting
                        your personal data. This Privacy Policy informs you about how we handle your data
                        when you visit our website and use our services.
                    </p>Section
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-bold text-gray-800 mb-4">2. Data We Collect</h2>
                    <p className="text-gray-600 leading-relaxed">
                        We may collect personal information such as:
                    </p>
                    <ul className="list-disc ml-6 text-gray-600 mt-2 space-y-2">
                        <li>Identity Data: Name, parent's name (for minors).</li>
                        <li>Contact Data: Email address, phone number (WhatsApp).</li>
                        <li>Technical Data: IP address, browser type, and usage data via Google Analytics.</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-bold text-gray-800 mb-4">3. How We Use Your Data</h2>
                    <p className="text-gray-600 leading-relaxed">
                        We use your data to:
                    </p>
                    <ul className="list-disc ml-6 text-gray-600 mt-2 space-y-2">
                        <li>Process your enquiries and enrollment.</li>
                        <li>Send important updates via WhatsApp or email.</li>
                        <li>Improve our website performance and user experience.</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-bold text-gray-800 mb-4">4. Cookies and Tracking</h2>
                    <p className="text-gray-600 leading-relaxed">
                        Our website uses cookies and similar tracking technologies to track activity and
                        hold certain information. You can instruct your browser to refuse all cookies.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-bold text-gray-800 mb-4">5. Contact Us</h2>
                    <p className="text-gray-600 leading-relaxed">
                        If you have any questions about this Privacy Policy, please contact us at:<br />
                        <strong>Email:</strong> yythorat@gmail.com<br />
                        <strong>Phone:</strong> +91 8390493388
                    </p>
                </section>
            </div>
        </div>
    )
}
