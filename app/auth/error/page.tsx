// app/auth/error/page.tsx
"use client";

// import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function AuthErrorPage() {
  // const params = useSearchParams();
  // const errorCode = params.get('code');
  // const message = params.get('message');

  // const errorMessages: Record<string, string> = {
  //   invalid_redirect_token: "Invalid redirect token. Please sign in again.",
  //   Invalid_role: "Your account role is not recognized.",
  //   default: "An unexpected error occurred during authentication."
  // };

  // const errorMessage = errorCode 
  //   ? errorMessages[errorCode] || errorMessages.default
  //   : message || errorMessages.default;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-lg text-center">
        <h1 className="text-2xl font-bold text-red-600 mb-4">Authentication Error</h1>
        <p className="text-gray-700 mb-6"></p>
        <Link 
          href="/" 
          className="inline-block bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition"
        >
          Return to Sign In
        </Link>
      </div>
    </div>
  );
}