// 'use client'
// import { useState } from "react";
// import Link from "next/link";
// import { ReactNode } from "react";

// // Tambahkan interface untuk props
// interface NavLinkProps {
//   href: string;
//   children: ReactNode;
// }

// interface MobileNavLinkProps extends NavLinkProps {
//   onClick?: () => void;
// }

// interface ButtonProps {
//   fullWidth?: boolean;
// }

// export default function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <nav className="fixed w-full top-0 z-50 bg-white/5 backdrop-blur-sm border-b border-white/10">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           {/* Logo */}
//           <Link href="/" className="text-2xl font-bold text-gray-800">
//             Logo
//           </Link>

//           {/* Hamburger Menu (Mobile) */}
//           <button
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//             className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100"
//           >
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
//               />
//             </svg>
//           </button>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex items-center space-x-8 flex-1 justify-center">
//             <NavLink href="/">Home</NavLink>
//             <NavLink href="/rumah">Rumah</NavLink>
//             <NavLink href="/kost">Kost</NavLink>
//             <NavLink href="/tentang">Tentang</NavLink>
//             <NavLink href="/kontak">Kontak</NavLink>
//             <NavLink href="/freelance">Freelance</NavLink>
//           </div>

//           {/* Tombol Kanan */}
//           <div className="hidden md:flex items-center space-x-4">
//             <LoginButton  />
//             <RegisterButton />
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {isMenuOpen && (
//           <div className="md:hidden bg-white py-4 space-y-2">
//             <MobileNavLink href="/" onClick={() => setIsMenuOpen(false)}>
//               Home
//             </MobileNavLink>
//             <MobileNavLink href="/rumah" onClick={() => setIsMenuOpen(false)}>
//               Rumah
//             </MobileNavLink>
//             <MobileNavLink href="/kost" onClick={() => setIsMenuOpen(false)}>
//               Kost
//             </MobileNavLink>
//             <MobileNavLink href="/tentang" onClick={() => setIsMenuOpen(false)}>
//               Tentang
//             </MobileNavLink>
//             <MobileNavLink href="/kontak" onClick={() => setIsMenuOpen(false)}>
//               Kontak
//             </MobileNavLink>
//             <MobileNavLink href="/freelance" onClick={() => setIsMenuOpen(false)}>
//               Freelance
//             </MobileNavLink>
//             <div className="pt-4 mt-4 border-t border-gray-100">
//               <LoginButton fullWidth />
//               <RegisterButton fullWidth />
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// }

// const NavLink: React.FC<NavLinkProps> = ({ href, children }) => (
//   <Link
//     href={href}
//     className="text-gray-600 hover:text-gray-900 transition-colors"
//   >
//     {children}
//   </Link>
// );

// const MobileNavLink: React.FC<MobileNavLinkProps> = ({ href, children, onClick }) => (
//   <Link
//     href={href}
//     onClick={onClick}
//     className="block px-4 py-2 text-gray-700 hover:bg-gray-50"
//   >
//     {children}
//   </Link>
// );

// const LoginButton: React.FC<ButtonProps> = ({ fullWidth }) => (
//   <Link
//     href="/login"
//     className={`flex items-center ${
//       fullWidth ? "w-full" : "px-4"
//     } py-2 space-x-2 bg-white rounded-lg hover:bg-gray-100 transition-colors`}
//   >
//     <UserIcon />
//     <span className="text-gray-600">Login</span>
//   </Link>
// );

// const RegisterButton: React.FC<ButtonProps> = ({ fullWidth }) => (
//   <Link
//     href="/register"
//     className={`flex items-center ${
//       fullWidth ? "w-full mt-2" : "px-4"
//     } py-2 space-x-2 bg-[#00c194] rounded-lg hover:bg-[#00a37d] transition-colors`}
//   >
//     <AddUserIcon />
//     <span className="text-white">Register</span>
//   </Link>
// );

// // Icons
// const UserIcon = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     className="h-5 w-5"
//     fill="none"
//     viewBox="0 0 24 24"
//     stroke="currentColor"
//   >
//     <path
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       strokeWidth={2}
//       d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
//     />
//   </svg>
// );

// const AddUserIcon = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     className="h-5 w-5"
//     fill="none"
//     viewBox="0 0 24 24"
//     stroke="currentColor"
//   >
//     <path
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       strokeWidth={2}
//       d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
//     />
//   </svg>
// );

"use client";
import { useState } from "react";
import Link from "next/link";
import { ReactNode } from "react";
import Image from "next/image";

interface NavLinkProps {
  href: string;
  children: ReactNode;
}

interface MobileNavLinkProps extends NavLinkProps {
  onClick?: () => void;
}

interface ButtonProps {
  fullWidth?: boolean;
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    // <nav className="fixed w-full top-0 z-50 bg-white/1 backdrop-blur-xs border-b border-white">
    <nav className="fixed w-full top-0 z-50 bg-white/70 border-b shadow-2xl  border-[#00a37d]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="text-2xl font-bold text-slate-900 hover:text-gray-900 transition-colors"
          >
            <Image
              height={50}
              priority={true}
              width={50}
              alt="logo"
              src="/logo.jpg"
              className=" rounded-full"
            />
          </Link>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 ml-3 transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>

          <div className="hidden md:flex items-center space-x-8 flex-1 justify-center">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/rumah">Rumah</NavLink>
            <NavLink href="/kost">Kost</NavLink>
            <NavLink href="/tentang">Tentang</NavLink>
            <NavLink href="/kontak">Kontak</NavLink>
            <NavLink href="/referal">Referal</NavLink>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <LoginButton />
            <RegisterButton />
          </div>
        </div>

        <div
          className={`md:hidden fixed inset-0 z-50 transform ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out`}
        >
          <div className="fixed left-0 top-0 h-full w-64 bg-white/95 backdrop-blur-sm shadow-xl">
            <div className="flex flex-col h-full overflow-y-auto">
              <div className="px-4 py-4 border-b border-gray-200">
                <Link href="/" className="text-xl font-bold text-gray-800">
                  <Image
                    height={50}
                    priority={true}
                    width={50}
                    alt="logo"
                    src="/logo.jpg"
                    className=" rounded-full"
                  />
                </Link>
              </div>

              <nav className="flex-1 px-4 py-6 space-y-2">
                <MobileNavLink href="/" onClick={() => setIsMenuOpen(false)}>
                  Home
                </MobileNavLink>
                <MobileNavLink
                  href="/rumah"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Rumah
                </MobileNavLink>
                <MobileNavLink
                  href="/kost"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Kost
                </MobileNavLink>
                <MobileNavLink
                  href="/tentang"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Tentang
                </MobileNavLink>
                <MobileNavLink
                  href="/kontak"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Kontak
                </MobileNavLink>
                <MobileNavLink
                  href="/freelance"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Referal
                </MobileNavLink>
              </nav>

              <div className="px-4 py-4 border-t border-gray-200 space-y-3">
                <LoginButton fullWidth />
                <RegisterButton fullWidth />
              </div>
            </div>
          </div>

          {isMenuOpen && (
            <div
              className="fixed inset-0 bg-black/50 z-[-1]"
              onClick={() => setIsMenuOpen(false)}
            />
          )}
        </div>
      </div>
    </nav>
  );
}

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => (
  <Link
    href={href}
    className="text-gray-600 hover:text-white  hover:bg-[#00a37d] px-3 py-2 rounded-md transition-colors font-medium"
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

const LoginButton: React.FC<ButtonProps> = ({ fullWidth }) => (
  <Link
    href="/login"
    className={`flex items-center justify-center ${
      fullWidth ? "w-full" : "px-4"
    } py-2.5 space-x-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors`}
  >
    <UserIcon />
    <span className="text-gray-700 font-medium">Login</span>
  </Link>
);

const RegisterButton: React.FC<ButtonProps> = ({ fullWidth }) => (
  <Link
    href="/register"
    className={`flex items-center justify-center ${
      fullWidth ? "w-full" : "px-4"
    } py-2.5 space-x-2 bg-[#00c194] rounded-lg hover:bg-[#00a37d] transition-colors`}
  >
    <AddUserIcon />
    <span className="text-white font-medium">Register</span>
  </Link>
);

const UserIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
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
);

const AddUserIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
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
);
