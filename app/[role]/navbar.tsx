"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";
import type { Session } from "next-auth";
import UserDropdown from "@/components/UserDropdown";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { data: session, status } = useSession();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Lock body scroll when mobile menu is open
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md backdrop-blur-md" : "bg-white/70"
      } border-b border-[#00a37d]`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left side: Hamburger menu (mobile only) */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              {isMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Right side: User dropdown (desktop) */}
          <div className="hidden md:flex items-center">
            {status === "loading" ? null : session ? (
              <UserDropdown session={session} />
            ) : (
              <LoginButton />
            )}
          </div>

          {/* Mobile: User avatar placeholder */}
          {/* <div className="md:hidden">
            {session?.user?.image ? (
              <Image
                src={session.user.image}
                alt="User"
                width={32}
                height={32}
                className="rounded-full cursor-pointer"
                onClick={() => setIsMenuOpen(true)}
              />
            ) : (
              <div className="bg-gray-200 rounded-full w-8 h-8" />
            )}
          </div> */}
        </div>

        {/* Mobile sidebar */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 z-50 flex">
            <div className="w-64 bg-white flex flex-col h-full">
              <div className="flex-1 overflow-y-auto">
                {/* Sidebar header */}
                <div className="p-4 border-b border-gray-300">
                  <div className="flex justify-between items-center">
                    <button
                      onClick={() => setIsMenuOpen(false)}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Main menu */}
                <div className="p-4">
                  <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                    Menu Utama
                  </h3>
                  <nav className="space-y-1">
                    <a
                      href="#"
                      className="flex items-center px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50"
                    >
                      Dashboard
                    </a>
                    <a
                      href="#"
                      className="flex items-center px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50"
                    >
                      Projects
                    </a>
                    <a
                      href="#"
                      className="flex items-center px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50"
                    >
                      Calendar
                    </a>
                    <a
                      href="#"
                      className="flex items-center px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50"
                    >
                      Reports
                    </a>
                  </nav>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-300 my-2"></div>

                {/* User section */}
                <div className="p-4">
                  <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                    Akun
                  </h3>
                  {status === "loading" ? (
                    <div className="animate-pulse flex space-x-4">
                      <div className="rounded-full bg-gray-200 h-10 w-10"></div>
                      <div className="flex-1 space-y-2 py-1">
                        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                      </div>
                    </div>
                  ) : session ? (
                    <div className="flex items-center space-x-3 mb-4">
                      <Image
                        src={session.user?.image || "/default-avatar.png"}
                        alt="User Avatar"
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          {session.user?.name}
                        </p>
                        <p className="text-xs text-gray-500">
                          {session.user?.email}
                        </p>
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>

              {/* Footer with logout button */}
              <div className="p-4 border-t border-gray-300">
                {session ? (
                  <button
                    onClick={() => {
                      setIsMenuOpen(false);
                      signOut({ callbackUrl: "/" });
                    }}
                    className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700"
                  >
                    Logout
                  </button>
                ) : (
                  <LoginButton fullWidth onLogin={() => setIsMenuOpen(false)} />
                )}
              </div>
            </div>

            {/* Backdrop */}
            <div
              className="flex-1 bg-black/30"
              onClick={() => setIsMenuOpen(false)}
            />
          </div>
        )}
      </div>
    </nav>
  );
}

const LoginButton = ({
  fullWidth,
  onLogin,
}: {
  fullWidth?: boolean;
  onLogin?: () => void;
}) => (
  <button
    onClick={() => {
      signIn("google");
      onLogin?.();
    }}
    className={`flex items-center justify-center space-x-2 py-2 ${
      fullWidth ? "w-full px-4" : "px-4"
    } bg-white rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors`}
  >
    <div className="bg-gray-200 border-2 border-dashed rounded-xl w-5 h-5" />
    <span className="text-black font-medium">Log in with Google</span>
  </button>
);
