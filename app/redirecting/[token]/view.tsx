"use client"
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { FaGear } from "react-icons/fa6";
import Image from "next/image";

export default function ViewRedirect() {
    const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status !== "authenticated") {
      router.replace("/");
      return;
    }
    const role = session.user.role;
    if (role === "ADMIN") router.replace("/admin/dashboard");
    else if (role === "FREELANCE") router.replace("/freelance/dashboard");
    else router.replace("/auth/error?message=invalid_role");
  }, [status, session, router]);
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
          <FaGear className="text-4xl text-emerald-600 animate-smooth-spin mb-3" />
        </div>
      </div>
      <p className="mt-8 text-gray-500 text-sm max-w-md text-center">
        You are being redirected to your personalized dashboard based on your
        account role. This should only take a moment.
      </p>
    </div>
    );
}