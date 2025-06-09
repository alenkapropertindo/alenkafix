"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";
import { ReactNode } from "react";
import type { Session } from "next-auth";
import UserDropdown from "./UserDropdown";

interface NavLinkProps {
  href: string;
  children: ReactNode;
}

interface MobileNavLinkProps extends NavLinkProps {
  onClick?: () => void;
}

interface ButtonProps {
  fullWidth?: boolean;
  session?: Session | null;
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { data: session, status } = useSession();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`
        fixed w-full top-0 z-50 transition-all duration-300
        ${isScrolled ? "bg-white shadow-md backdrop-blur-md" : "bg-white/70"}
        border-b border-[#00a37d]
      `}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold text-slate-900">
            <Image
              src="/logo.jpg"
              alt="logo"
              width={50}
              height={50}
              className="rounded-full"
              priority
            />
          </Link>

          {/* Hamburger (tombol drawer untuk mobile) */}
          <button
            onClick={() => setIsMenuOpen((o) => !o)}
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
          >
            {/* SVG ikon hamburger (tiga garis) */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8 flex-1 justify-center">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/rumah">Rumah</NavLink>
            {/* <NavLink href="/kost">Kost</NavLink> */}
            <NavLink href="/tentang">Tentang</NavLink>
            <NavLink href="/kontak">Kontak</NavLink>
            <NavLink href="/referal">Referal</NavLink>
          </div>

          {/* Right side (desktop): login / avatar + logout */}
          <div className="hidden md:flex items-center space-x-4">
            {status === "loading" ? null : session ? (
              <UserDropdown session={session}  />
            ) : (
              <LoginButton session={session} />
            )}
          </div>
        </div>

        {/* Mobile slide-out */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 z-50 flex">
            <div className="w-64 bg-white/95 backdrop-blur-sm shadow-xl flex flex-col">
              <div className="p-4 border-b">
                <Link href="/">
                  <Image
                    src="/logo.jpg"
                    alt="logo"
                    width={50}
                    height={50}
                    className="rounded-full"
                    priority
                  />
                </Link>
              </div>
              <nav className="flex-1 px-4 py-6 space-y-2">
                <MobileNavLink href="/" onClick={() => setIsMenuOpen(false)}>
                  Home
                </MobileNavLink>
                <MobileNavLink href="/rumah" onClick={() => setIsMenuOpen(false)}>
                  Rumah
                </MobileNavLink>
                {/* <MobileNavLink href="/kost" onClick={() => setIsMenuOpen(false)}>
                  Kost
                </MobileNavLink> */}
                <MobileNavLink href="/tentang" onClick={() => setIsMenuOpen(false)}>
                  Tentang
                </MobileNavLink>
                <MobileNavLink href="/kontak" onClick={() => setIsMenuOpen(false)}>
                  Kontak
                </MobileNavLink>
                <MobileNavLink href="/referal" onClick={() => setIsMenuOpen(false)}>
                  Referal
                </MobileNavLink>
              </nav>
              <div className="p-4 border-t">
                {status === "loading" ? null : session ? (
                  <button
                    onClick={() => {
                      setIsMenuOpen(false);
                      signOut({ callbackUrl: "/" });
                    }}
                    className="w-full px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                  >
                    Log out
                  </button>
                ) : (
                  <LoginButton fullWidth session={session} />
                )}
              </div>
            </div>
            {/* Backdrop */}
            <div
              className="flex-1 bg-black/50"
              onClick={() => setIsMenuOpen(false)}
            />
          </div>
        )}
      </div>
    </nav>
  );
}

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => (
  <Link
    href={href}
    className="text-gray-600 hover:text-white hover:bg-[#00a37d] px-3 py-2 rounded-md transition-colors font-medium"
  >
    {children}
  </Link>
);

const MobileNavLink: React.FC<MobileNavLinkProps> = ({
  href,
  children,
  onClick,
}) => (
  <Link
    href={href}
    onClick={onClick}
    className="block px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors font-medium"
  >
    {children}
  </Link>
);

const LoginButton: React.FC<ButtonProps> = ({ fullWidth, session }) => (
  <button
    onClick={() =>
      signIn("google")
    }
    className={`
      flex items-center justify-center 
      ${fullWidth ? "w-full" : "px-4"} 
      py-2.5 space-x-2 bg-white rounded-lg border border-gray-300 hover:bg-blue-50 transition-colors
    `}
  >
    <Image
      src="/google.svg"
      alt="Google Logo"
      className="w-5 h-5"
      width={20}
      height={20}
    />
    <span className="text-black font-medium">Log in with Google</span>
  </button>
);



// "use client";
// import { useEffect, useState } from "react";
// import { signIn, signOut, useSession } from "next-auth/react";
// import UserDropdown from "@/components/UserDropdown";

// export default function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const { data: session,status } = useSession();
//   console.log(status)
//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 50);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     if (isMenuOpen) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "unset";
//     }
//     return () => {
//       document.body.style.overflow = "unset";
//     };
//   }, [isMenuOpen]);

//   return (
//     <nav
//       className={`fixed w-full top-0 z-50 transition-all duration-300 ${
//         isScrolled ? "bg-white shadow-md backdrop-blur-md" : "bg-white/70"
//       } border-b border-[#00a37d]`}
//     >
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           {/* Hamburger menu (mobile only) */}
//           <div className="md:hidden flex items-center">
//             <button
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               className="text-gray-700 hover:text-gray-900 focus:outline-none"
//             >
//               {isMenuOpen ? (
//                 <svg
//                   className="h-6 w-6"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 </svg>
//               ) : (
//                 <svg
//                   className="h-6 w-6"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M4 6h16M4 12h16M4 18h16"
//                   />
//                 </svg>
//               )}
//             </button>
//           </div>

//           {/* User dropdown (desktop only) */}
//           <div className="hidden md:flex items-center">
//             <UserDropdown session={session} />
//           </div>
//         </div>

//         {/* Mobile sidebar */}
//         {isMenuOpen && (
//           <div className="md:hidden fixed inset-0 z-50 flex">
//             <div className="w-64 bg-white flex flex-col h-full">
//               <div className="flex-1 overflow-y-auto">
//                 {/* Sidebar header */}
//                 <div className="p-4 border-b border-gray-300">
//                   <div className="flex justify-between items-center">
//                     <button
//                       onClick={() => setIsMenuOpen(false)}
//                       className="text-gray-500 hover:text-gray-700"
//                     >
//                       <svg
//                         className="h-6 w-6"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2}
//                           d="M6 18L18 6M6 6l12 12"
//                         />
//                       </svg>
//                     </button>
//                   </div>
//                 </div>

              
//               </div>

//               {/* User section & Logout */}
//               <div className="p-4 border-t border-gray-300">
//                 {session ? (
//                   <>
//                     <div className="mb-4">
//                       <UserDropdown session={session} mobileView />
//                     </div>
//                     <button
//                       onClick={() => {
//                         setIsMenuOpen(false);
//                         signOut({ callbackUrl: "/" });
//                       }}
//                       className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700"
//                     >
//                       Logout
//                     </button>
//                   </>
//                 ) : (
//                   <LoginButton 
//                     fullWidth 
//                     onLogin={() => setIsMenuOpen(false)} 
//                   />
//                 )}
//               </div>
//             </div>

//             {/* Backdrop */}
//             <div
//               className="flex-1 bg-black/30"
//               onClick={() => setIsMenuOpen(false)}
//             />
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// }

// const LoginButton = ({
//   fullWidth,
//   onLogin,
// }: {
//   fullWidth?: boolean;
//   onLogin?: () => void;
// }) => (
//   <button
//     onClick={() => {
//       signIn("google");
//       onLogin?.();
//     }}
//     className={`flex items-center justify-center space-x-2 py-2 ${
//       fullWidth ? "w-full px-4" : "px-4"
//     } bg-white rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors`}
//   >
//     <div className="bg-gray-200 border-2 border-dashed rounded-xl w-5 h-5" />
//     <span className="text-black font-medium">Log in with Google</span>
//   </button>
// );