import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function Contact() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] py-25">
      <div className="container mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <span className="bg-[#86EFAC] text-[#14532D] px-4 py-2 rounded-full text-sm font-semibold">
            Get In Touch
          </span>

          <h1 className="mt-6 text-5xl font-bold text-[#14532D]">
            Contact Us
          </h1>

          <p className="mt-4 text-lg text-[#6B7280] max-w-2xl mx-auto">
            Have questions about our services or projects? Our team is ready
            to help and provide the best solutions for your business.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Contact Form */}
          <div className="bg-white rounded-3xl shadow-lg p-8">

            <h2 className="text-2xl font-bold text-[#14532D] mb-6">
              Send Us a Message
            </h2>

            <form className="space-y-5">

              <div>
                <label className="block mb-2 font-medium text-[#1F2937]">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full border border-gray-200 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-[#16A34A]"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium text-[#1F2937]">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border border-gray-200 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-[#16A34A]"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium text-[#1F2937]">
                  Subject
                </label>

                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full border border-gray-200 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-[#16A34A]"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium text-[#1F2937]">
                  Message
                </label>

                <textarea
                  rows="5"
                  placeholder="Write your message..."
                  className="w-full border border-gray-200 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-[#16A34A]"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#16A34A] hover:bg-[#14532D] text-white font-semibold py-4 rounded-xl transition duration-300"
              >
                Send Message
              </button>

            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">

            <div className="bg-white rounded-3xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-[#14532D] mb-6">
                Contact Information
              </h2>

              <div className="space-y-6">

                <div className="flex items-start gap-4">
                  <div className="bg-[#86EFAC] p-3 rounded-xl">
                    <Phone className="text-[#14532D]" />
                  </div>

                  <div>
                    <h4 className="font-semibold text-[#1F2937]">
                      Phone
                    </h4>
                    <p className="text-[#6B7280]">
                      +91 98765 43210
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#86EFAC] p-3 rounded-xl">
                    <Mail className="text-[#14532D]" />
                  </div>

                  <div>
                    <h4 className="font-semibold text-[#1F2937]">
                      Email
                    </h4>
                    <p className="text-[#6B7280]">
                      info@pentaauto.co.in
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#86EFAC] p-3 rounded-xl">
                    <MapPin className="text-[#14532D]" />
                  </div>

                  <div>
                    <h4 className="font-semibold text-[#1F2937]">
                      Address
                    </h4>
                    <p className="text-[#6B7280]">
                      Kolkata, West Bengal, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#86EFAC] p-3 rounded-xl">
                    <Clock className="text-[#14532D]" />
                  </div>

                  <div>
                    <h4 className="font-semibold text-[#1F2937]">
                      Working Hours
                    </h4>
                    <p className="text-[#6B7280]">
                      Mon - Sat : 9:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* CTA Card */}
            <div className="bg-[#14532D] rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold">
                Need Immediate Assistance?
              </h3>

              <p className="mt-3 text-green-100">
                Contact our team today and discover how Penta Auto can help
                your business achieve operational excellence.
              </p>

              <button className="mt-6 bg-white text-[#14532D] px-6 py-3 rounded-xl font-semibold hover:bg-[#86EFAC] transition">
                Call Now
              </button>
            </div>

          </div>

        </div>
      </div>
    </main>
  );
}