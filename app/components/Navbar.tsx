import React from "react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/5 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold text-gray-800">Logo</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-gray-900">Home</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Rumah</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Kost</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Tentang</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Kontak</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Freelance</a>
          </div>

          <div className="flex items-center space-x-4">
            <button className="bg-white px-4 py-2 rounded-lg shadow-sm hover:bg-gray-100 transition-colors duration-200 flex items-center">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 mr-2 text-gray-600" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" 
                />
              </svg>
              <span className="text-gray-600">Login</span>
            </button>

            <button className="bg-[#00c194] px-4 py-2 rounded-lg shadow-sm hover:bg-[#00a37d] transition-colors duration-200 flex items-center">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 mr-2 text-white" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" 
                />
              </svg>
              <span className="text-white">Register</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}