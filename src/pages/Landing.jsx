import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGasPump } from "react-icons/fa";

export default function Landing() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-8 md:px-24 min-h-screen bg-gradient-to-r from-blue-50 to-blue-100">
  <div className="flex-1 mb-12 md:mb-0">
    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
      Fuel at Your <span className="text-blue-600">Doorstep</span>
    </h1>
    <p className="text-gray-600 text-base md:text-lg mb-8 max-w-md">
      Premium fuel delivery service with verified partners. Fast, secure, and convenient fuel delivery right to your location.
    </p>
    <div className="space-x-4">
      <Link
        to="/login"
        className="bg-blue-600 text-white px-7 py-3 rounded-md font-semibold shadow hover:bg-blue-700 duration-200"
      >
        Login
      </Link>
      <Link
        to="/register"
        className="bg-green-500 text-white px-7 py-3 rounded-md font-semibold shadow hover:bg-green-600 duration-200"
      >
        Sign Up
      </Link>
    </div>
  </div>
  <div className="flex-1 flex justify-center">
    {/* Truck image from public/images */}
    <img
      src="/images/truck.jpg"
      alt="Fuel delivery truck"
      className="w-full max-w-md rounded-2xl shadow-2xl"
    />
  </div>
</section>



      {/* Why Choose Us */}
      <section className="h-screen bg-gray-50 flex items-center justify-center px-4 md:px-0">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-6">
            Why Choose Our Service?
          </h2>
          <p className="text-lg text-gray-600 mb-16 max-w-2xl mx-auto">
            Experience the future of fuel delivery with our premium service
            designed for your convenience and peace of mind.
          </p>
          <div className="flex flex-col md:flex-row gap-10 justify-center">
            <div className="flex-1 bg-white rounded-2xl shadow-lg p-10 flex flex-col items-center">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-100 mb-6">
                <span className="text-3xl text-blue-500">🕒</span>
              </div>
              <h3 className="font-bold text-2xl mb-4">24/7 Convenience</h3>
              <p className="text-gray-500">
                Get fuel delivered anytime, anywhere. Our round-the-clock
                service ensures you never run out of fuel when you need it most.
              </p>
            </div>
            <div className="flex-1 bg-white rounded-2xl shadow-lg p-10 flex flex-col items-center">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-green-100 mb-6">
                <span className="text-3xl text-green-500">🛡️</span>
              </div>
              <h3 className="font-bold text-2xl mb-4">Verified Partners</h3>
              <p className="text-gray-500">
                All our fuel suppliers are certified and verified. Premium
                quality fuel with complete safety and security guarantees.
              </p>
            </div>
            <div className="flex-1 bg-white rounded-2xl shadow-lg p-10 flex flex-col items-center">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-yellow-100 mb-6">
                <span className="text-3xl text-yellow-500">🎁</span>
              </div>
              <h3 className="font-bold text-2xl mb-4">Reward Points</h3>
              <p className="text-gray-500">
                Earn points with every delivery and redeem them for discounts.
                The more you use our service, the more you save.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="h-screen bg-gray-900 text-gray-200 flex flex-col justify-center px-8 md:px-24">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 justify-between">
          <div className="flex-1">
            <div className="flex items-center mb-4">
              <div className="flex items-center mb-4">
                 <FaGasPump className="text-4xl text-green-500" />
                    <span className="ml-3 text-3xl font-bold">PetroGoo</span>
              </div>
            </div>
            <p className="mb-6 text-gray-400 max-w-sm">
              Revolutionary fuel delivery service bringing premium quality fuel
              directly to your doorstep. Safe, secure, and always on time.
            </p>
            <div className="flex gap-6">
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <FaFacebook className="w-8 h-8 text-blue-600 hover:text-blue-800" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer">
                <FaTwitter className="w-8 h-8 text-blue-400 hover:text-blue-600" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <FaInstagram className="w-8 h-8 text-pink-500 hover:text-pink-700" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                <FaLinkedin className="w-8 h-8 text-blue-700 hover:text-blue-900" />
              </a>
            </div>
          </div>

          <div className="flex-1">
            <h4 className="font-semibold text-lg mb-3 text-white">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-white">About Us</Link></li>
              <li><Link to="/how-it-works" className="hover:text-white">How It Works</Link></li>
              <li><Link to="/pricing" className="hover:text-white">Pricing</Link></li>
              <li><Link to="/service-areas" className="hover:text-white">Service Areas</Link></li>
              <li><Link to="/partner" className="hover:text-white">Partner With Us</Link></li>
            </ul>
          </div>

          <div className="flex-1">
            <h4 className="font-semibold text-lg mb-3 text-white">Support</h4>
            <ul className="space-y-2">
              <li><Link to="/help" className="hover:text-white">Help Center</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact Us</Link></li>
              <li><Link to="/terms" className="hover:text-white">Terms of Service</Link></li>
              <li><Link to="/privacy" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link to="/safety" className="hover:text-white">Safety Guidelines</Link></li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row items-center justify-between">
  <form className="flex flex-col md:flex-row items-center gap-4 mb-6 md:mb-0">
    <span className="text-lg font-medium">Stay Updated</span>
    <input
      type="email"
      placeholder="Enter your email"
      className="py-2 px-4 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-green-400 text-white"
    />
    <button
      type="submit"
      className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-2 rounded-lg font-semibold hover:from-green-500 hover:to-blue-600"
    >
      Subscribe
    </button>
  </form>

  {/* Added margin-top on small screens & gap for spacing */}
  <div className="text-sm text-gray-400 text-center md:text-right mt-4 md:mt-0 md:ml-6">
    © 2024 PetroGoo. All rights reserved. | Delivering excellence to your doorstep.
  </div>
</div>

      </footer>
    </div>
  );
}
