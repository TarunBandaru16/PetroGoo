// src/pages/auth/Register.jsx
import { Link } from "react-router-dom";
import { FaEnvelope, FaLock, FaUser, FaGasPump, FaGoogle, FaApple } from "react-icons/fa";

export default function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-lg animate-fadeIn">
        
        {/* Logo */}
        <div className="flex flex-col items-center mb-6">
          <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-green-400 text-white text-3xl">
            <FaGasPump />
          </div>
          <h1 className="text-2xl font-bold mt-3">PetroGoo</h1>
          <p className="text-gray-500">Fuel delivery at your doorstep</p>
        </div>

        {/* Tabs */}
        <div className="flex mb-6">
          <Link to="/login" className="flex-1 py-2 text-center font-medium text-gray-500 border-b">
            Login
          </Link>
          <Link to="/register" className="flex-1 py-2 text-center font-medium border-b-2 border-blue-500">
            Sign Up
          </Link>
        </div>

        {/* Form */}
        <form className="space-y-4">
          <div className="flex items-center border rounded-lg px-3 py-2">
            <FaUser className="text-gray-400 mr-2" />
            <input type="text" placeholder="Full Name" className="w-full outline-none" />
          </div>

          <div className="flex items-center border rounded-lg px-3 py-2">
            <FaEnvelope className="text-gray-400 mr-2" />
            <input type="email" placeholder="Email or Phone" className="w-full outline-none" />
          </div>

          <div className="flex items-center border rounded-lg px-3 py-2">
            <FaLock className="text-gray-400 mr-2" />
            <input type="password" placeholder="Create a password" className="w-full outline-none" />
          </div>

          <div className="flex items-center border rounded-lg px-3 py-2">
            <FaLock className="text-gray-400 mr-2" />
            <input type="password" placeholder="Confirm password" className="w-full outline-none" />
          </div>

          <div className="flex items-center text-sm">
            <input type="checkbox" id="terms" className="mr-2" />
            <label htmlFor="terms">
              I agree to the <span className="text-blue-600">Terms of Service</span> and{" "}
              <span className="text-blue-600">Privacy Policy</span>
            </label>
          </div>

          <button className="w-full bg-gradient-to-r from-blue-500 to-green-400 text-white py-2 rounded-lg font-semibold hover:opacity-90">
            Create Account
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-2 text-sm text-gray-400">Or continue with</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Social Buttons */}
        <div className="space-y-3">
          <button className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-lg hover:bg-gray-50">
            <FaGoogle className="text-red-500" />
            <span>Continue with Google</span>
          </button>

          <button className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-lg hover:bg-gray-50">
            <FaApple className="text-black" />
            <span>Continue with Apple</span>
          </button>
        </div>
      </div>
    </div>
  );
}
