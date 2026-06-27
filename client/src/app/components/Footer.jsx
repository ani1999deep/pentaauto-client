"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  MapPin,
  Phone,
  Mail,
  X,
  Shield,
  FileText,
} from "lucide-react";

const footerLinks = [
  { name: "About", path: "/#about" },
  { name: "Services", path: "/#services" },
  { name: "Projects", path: "/#projects" },
  { name: "Contact", path: "/contact" },
];

function Modal({ open, onClose, title, children, icon: Icon }) {
  if (!open) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          onClick={(e) => e.stopPropagation()}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          className="bg-white rounded-3xl w-full max-w-4xl max-h-[85vh] overflow-hidden shadow-2xl"
        >
          <div className="sticky top-0 bg-white border-b p-6 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="bg-green-100 p-3 rounded-xl">
                <Icon className="text-green-700" />
              </div>

              <div>
                <h2 className="text-2xl font-bold">{title}</h2>
                <p className="text-sm text-gray-500">Last Updated: June 2026</p>
              </div>
            </div>

            <button onClick={onClose}>
              <X />
            </button>
          </div>

          <div className="p-8 overflow-y-auto max-h-[70vh] text-gray-600 space-y-6">
            {children}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function Footer() {
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [termsOpen, setTermsOpen] = useState(false);

  return (
    <>
      <footer className="py-14">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            <div>
              <Image
                src="/pentaauto2.jpeg"
                alt="logo"
                width={170}
                height={60}
              />

              <p className="mt-4 text-gray-500">
                Smart automation solutions with PLC, SCADA, MCC & industrial
                excellence.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-5">Company</h3>

              {footerLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className="block mb-3 text-gray-600 hover:text-green-600"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div>
              <h3 className="font-semibold mb-5">Solutions</h3>

              {["PLC Automation", "SCADA", "Electrical Panel", "MCC / PCC"].map(
                (t) => (
                  <p key={t} className="mb-3 text-gray-600">
                    {t}
                  </p>
                ),
              )}
            </div>

            <div>
              <h3 className="font-semibold mb-5">Contact</h3>

              <Link href="/contact" className="flex gap-3 mb-3">
                <MapPin size={18} />
                Kolkata, India
              </Link>

              <a href="tel:+919836688442" className="flex gap-3 mb-3">
                <Phone size={18} />
                +91 98366 88442
              </a>

              <a
                href="mailto:penta.automation2012@gmail.com"
                className="flex gap-3"
              >
                <Mail size={18} />
                Email Us
              </a>
            </div>
          </div>

          <div className="mt-12 border-t pt-6 flex justify-between">
            <p className="text-sm text-gray-500">© 2026 Penta Automation</p>

            <div className="flex gap-6">
              <button
                onClick={() => setPrivacyOpen(true)}
                className="hover:text-green-600"
              >
                Privacy Policy
              </button>

              <button
                onClick={() => setTermsOpen(true)}
                className="hover:text-green-600"
              >
                Terms & Conditions
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Privacy */}
      <Modal
        open={privacyOpen}
        onClose={() => setPrivacyOpen(false)}
        title="Privacy Policy"
        icon={Shield}
      >
        <div className="space-y-6 text-gray-600 leading-8">
          <p>
            At <strong>Penta Automation</strong>, we value your trust and are
            committed to protecting your privacy. This Privacy Policy explains
            how we collect, use, store, and protect information shared through
            our website and services.
          </p>

          <div>
            <h3 className="font-semibold text-black">
              1. Information We Collect
            </h3>

            <ul className="list-disc pl-6 mt-2">
              <li>Full Name</li>
              <li>Email Address</li>
              <li>Phone Number</li>
              <li>Company / Organization Details</li>
              <li>Inquiry, project & communication details</li>
              <li>
                Browser type, IP information, device details & website usage
                data
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-black">
              2. How We Use Your Information
            </h3>

            <ul className="list-disc pl-6 mt-2">
              <li>Respond to inquiries & provide support</li>
              <li>Deliver automation & engineering services</li>
              <li>Improve website performance</li>
              <li>Share project updates</li>
              <li>Maintain service quality standards</li>
              <li>Ensure website security</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-black">
              3. Data Protection & Security
            </h3>

            <p>
              We apply reasonable administrative, technical, and security
              measures to protect personal information.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-black">
              4. Cookies & Website Analytics
            </h3>

            <ul className="list-disc pl-6 mt-2">
              <li>Improve website functionality</li>
              <li>Understand visitor interactions</li>
              <li>Analyze performance trends</li>
              <li>Enhance browsing experience</li>
            </ul>

            <p className="mt-2">
              Users may manage cookies through browser settings.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-black">
              5. Third-Party Services
            </h3>

            <p>
              Our website may contain third-party links or integrations. Penta
              Automation is not responsible for external privacy practices.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-black">6. Information Sharing</h3>

            <p>We do not sell, trade, or rent personal information except:</p>

            <ul className="list-disc pl-6 mt-2">
              <li>When legally required</li>
              <li>To provide requested services</li>
              <li>To support project execution</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-black">7. Your Privacy Rights</h3>

            <ul className="list-disc pl-6 mt-2">
              <li>Access your information</li>
              <li>Correct inaccurate information</li>
              <li>Request eligible data deletion</li>
              <li>Contact us for privacy concerns</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-black">8. Policy Updates</h3>

            <p>
              This policy may be revised periodically. Changes become effective
              after publication.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-black">9. Contact Us</h3>

            <p>
              For privacy-related questions, please contact us through our
              Contact page.
            </p>
          </div>
        </div>
      </Modal>

      {/* Terms */}
      <Modal
        open={termsOpen}
        onClose={() => setTermsOpen(false)}
        title="Terms & Conditions"
        icon={FileText}
      >
        <div className="space-y-6 text-gray-600 leading-8">
          <p>
            Welcome to <strong>Penta Automation</strong>. By accessing or using
            our website and services, you agree to comply with these Terms &
            Conditions.
          </p>

          <div>
            <h3 className="font-semibold text-black">1. Acceptance of Terms</h3>

            <p>
              By using this website, you accept these terms and applicable laws.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-black">2. Our Services</h3>

            <ul className="list-disc pl-6 mt-2">
              <li>PLC & DCS Systems</li>
              <li>Industrial Control Panels</li>
              <li>Automation Engineering</li>
              <li>Electrical & Electronic Control Systems</li>
              <li>Installation & Commissioning</li>
              <li>Technical Support & Maintenance</li>
            </ul>

            <p className="mt-2">
              Service availability depends on project requirements.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-black">3. Website Usage</h3>

            <ul className="list-disc pl-6 mt-2">
              <li>Use the website lawfully</li>
              <li>Avoid misuse or unauthorized access</li>
              <li>Provide accurate inquiry information</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-black">
              4. Intellectual Property
            </h3>

            <p>
              All website content, graphics, branding, and materials belong to
              Penta Automation unless stated otherwise.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-black">
              5. Information Accuracy
            </h3>

            <p>
              We strive to maintain accurate information but do not guarantee
              completeness or uninterrupted availability.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-black">
              6. Project & Commercial Terms
            </h3>

            <p>
              Pricing, timelines, warranties, and implementation schedules are
              governed through quotations or agreements.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-black">
              7. Limitation of Liability
            </h3>

            <p>
              Penta Automation shall not be liable for indirect or consequential
              damages arising from website usage.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-black">8. Third-Party Links</h3>

            <p>
              External links are provided for convenience and do not imply
              endorsement.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-black">9. Modifications</h3>

            <p>Terms may be updated at any time without prior notice.</p>
          </div>

          <div>
            <h3 className="font-semibold text-black">10. Contact</h3>

            <p>
              For questions regarding these Terms, please contact us through the
              Contact page.
            </p>
          </div>
        </div>
      </Modal>
    </>
  );
}
