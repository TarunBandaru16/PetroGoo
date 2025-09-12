// src/pages/auth/Login.jsx
import { Link } from "react-router-dom";
import { FaEnvelope, FaLock, FaGasPump, FaGoogle, FaApple } from "react-icons/fa";

export default function Login() {
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
          <Link to="/login" className="flex-1 py-2 text-center font-medium border-b-2 border-blue-500">
            Login
          </Link>
          <Link to="/register" className="flex-1 py-2 text-center font-medium text-gray-500 border-b">
            Sign Up
          </Link>
        </div>

        {/* Form */}
        <form className="space-y-4">
          <div>
            <label className="text-sm font-medium">Email or Phone</label>
            <div className="flex items-center border rounded-lg px-3 mt-1">
              <FaEnvelope className="text-gray-400" />
              <input
                type="text"
                placeholder="Enter your email or phone"
                className="flex-1 py-2 px-2 outline-none"
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium">Password</label>
            <div className="flex items-center border rounded-lg px-3 mt-1">
              <FaLock className="text-gray-400" />
              <input
                type="password"
                placeholder="Enter your password"
                className="flex-1 py-2 px-2 outline-none"
              />
            </div>
          </div>

          <button className="w-full bg-gradient-to-r from-blue-500 to-green-400 text-white py-2 rounded-lg font-semibold hover:opacity-90">
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <hr className="flex-1" />
          <span className="px-2 text-gray-400 text-sm">Or continue with</span>
          <hr className="flex-1" />
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
