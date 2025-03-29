import React from "react";
import { FaLink, FaShareAlt, FaEdit, FaChartLine } from "react-icons/fa";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const AboutPage = () => {
  return (
    <div className="lg:px-14 sm:px-8 px-5 min-h-[calc(100vh-64px)] pt-2">
      <div className="bg-white w-full sm:py-10 py-8">
        <h1 className="sm:text-4xl text-slate-800 text-3xl font-bold italic mb-6">
          About Shortify 
        </h1>
        <p className="text-gray-700 text-sm mb-8 xl:w-[60%] lg:w-[70%] sm:w-[80%] w-full">
        Shortify  is your go-to platform for effortless URL shortening, link
          management, and powerful analytics. With just a few clicks, you can
          create, track, and manage short URLs, all while ensuring top-notch
          security and performance.
        </p>

        <div className="space-y-6 xl:w-[60%] lg:w-[70%] sm:w-[80%] w-full">
          <div className="flex items-start space-x-4">
            <FaLink className="text-blue-500 text-3xl" />
            <div>
              <h2 className="sm:text-2xl font-bold text-slate-800">
                Simple URL Shortening
              </h2>
              <p className="text-gray-600">
                Create short, memorable URLs in seconds. Our user-friendly
                interface ensures that anyone can start shortening links without
                a hassle.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <FaShareAlt className="text-green-500 text-3xl" />
            <div>
              <h2 className="sm:text-2xl font-bold text-slate-800">
                Powerful Analytics
              </h2>
              <p className="text-gray-600">
                Monitor your link's performance with in-depth analytics. Track
                clicks, user location, and referral sources to optimize your
                campaigns.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <FaEdit className="text-purple-500 text-3xl" />
            <div>
              <h2 className="sm:text-2xl font-bold text-slate-800">
                Enhanced Security
              </h2>
              <p className="text-gray-600">
                Our platform employs advanced encryption to ensure that your
                shortened URLs and user data are kept safe and secure.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <FaChartLine className="text-red-500 text-3xl" />
            <div>
              <h2 className="sm:text-2xl font-bold text-slate-800">
                Fast and Reliable
              </h2>
              <p className="text-gray-600">
                With high uptime and fast redirects, Linklytics ensures that your
                links perform seamlessly across devices and regions.
              </p>
            </div>
          </div>
        </div>

        {/* Call-to-Action Section */}
        <div className="mt-12 flex justify-center">
          <Link
            to="/register" 
            className="bg-blue-500 text-white py-3 px-8 rounded-full text-xl hover:bg-blue-600 transition duration-300"
          >
            Get Started with Shortify 
          </Link>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 xl:w-[60%] lg:w-[70%] sm:w-[80%] w-full">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">FAQs</h2>
          <div className="space-y-4">
            <div className="border-b border-gray-300 pb-3">
              <h3 className="font-semibold text-lg text-slate-700">
                What is Shortify ?
              </h3>
              <p className="text-gray-600">
              Shortify  is a URL shortening and analytics platform that helps you manage and track your links with ease.
              </p>
            </div>

            <div className="border-b border-gray-300 pb-3">
              <h3 className="font-semibold text-lg text-slate-700">
                Is Shortify  free to use?
              </h3>
              <p className="text-gray-600">
                Yes! Shortify  offers free URL shortening with basic features. For advanced analytics, you can upgrade to a premium plan.
              </p>
            </div>

            <div className="border-b border-gray-300 pb-3">
              <h3 className="font-semibold text-lg text-slate-700">
                How secure is my data?
              </h3>
              <p className="text-gray-600">
                We prioritize security by employing advanced encryption techniques to protect your links and personal data.
              </p>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mt-16 xl:w-[60%] lg:w-[70%] sm:w-[80%] w-full">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">What Our Users Say</h2>
          <div className="space-y-4">
            <div className="border-b border-gray-300 pb-3">
              <p className="italic text-gray-600">
                "Linklytics has made URL shortening so much easier, and the analytics are a game-changer for tracking my campaigns."
              </p>
              <p className="font-semibold text-slate-800">John Doe</p>
              <p className="text-gray-500">Marketing Specialist</p>
            </div>

            <div className="border-b border-gray-300 pb-3">
              <p className="italic text-gray-600">
                "I love how fast and reliable Linklytics is. The security features make me feel confident about using it for my business."
              </p>
              <p className="font-semibold text-slate-800">Jane Smith</p>
              <p className="text-gray-500">Small Business Owner</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
