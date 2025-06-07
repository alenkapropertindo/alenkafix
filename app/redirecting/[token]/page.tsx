// app/redirect-handler/page.tsx
"use client";

import { useSession } from "next-auth/react";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import { FaGear } from "react-icons/fa6";

export default function RedirectHandler() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const params = useParams();
  const token = params.token as string;
  const [isValidToken, setIsValidToken] = useState(false);
  const [redirected, setRedirected] = useState(false);
  // useBlockBackNavigation();
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Ambil token dari session storage
    const storedToken = sessionStorage.getItem('redirect_state');
    
    // Validasi token
    if (storedToken && storedToken === token) {
      setIsValidToken(true);
      // Hapus token setelah validasi
      sessionStorage.removeItem('redirect_state');
    } else {
      // Token tidak valid, redirect ke error page
      router.replace('/auth/error?code=invalid_redirect_token');
    }
  }, [token, router]);

  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      if (status !== 'authenticated' || !isValidToken || redirected) return;
    
    // Tandai sudah di-redirect untuk mencegah duplikasi
    setRedirected(true);

      if (!session) {
        router.push("/auth/signin");
        return;
      }

      const role = session.user?.role;
    switch (role) {
      case 'ADMIN':
        router.replace('/admin/dashboard');
        break;
      case 'FREELANCE':
        router.replace('/freelance/dashboard');
        break;
      default:
        router.replace('/auth/error?message=Invalid_role');
    }
    }, 3000); 

    return () => clearTimeout(redirectTimer);
  }, [session, status,isValidToken, redirected, router]);
useEffect(() => {
    const handleBackNavigation = (e: BeforeUnloadEvent) => {
      e.preventDefault();
      e.returnValue = '';
    };

    window.addEventListener('beforeunload', handleBackNavigation);
    return () => {
      window.removeEventListener('beforeunload', handleBackNavigation);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <div className="mb-8 animate-pulse">
        <Image
          src="/soon.svg"
          alt="Coming Soon"
          width={300}
          height={200}
          className="w-full max-w-xs md:max-w-sm"
        />
      </div>

      <div className="text-center">
        <p className="text-xl font-medium text-gray-700 mb-6">
          Please wait while redirecting...
        </p>

        <div className="flex flex-col items-center">
          {/* <FaGear className="text-4xl text-emerald-600 animate-spin mb-3" /> */}
          <FaGear className="text-4xl text-emerald-600 animate-smooth-spin mb-3" />
       
        </div>
      </div>

      <p className="mt-8 text-gray-500 text-sm max-w-md text-center">
        You're being redirected to your personalized dashboard based on your
        account role. This should only take a moment.
      </p>
    </div>
  );
}
