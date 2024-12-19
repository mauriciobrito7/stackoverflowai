import React from "react";
import Image from "next/image";
import SocialAuthForm from "@/components/forms/SocialAuthForm";

function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-auth-light dark:bg-auth-dark bg-cover bg-no-repeat bg-center px-4 py-10">
      <section className="light-border background-light800_dark200 shadow-light-100_dark100 min-w-full rounded-lg border px-4  py-10 shadow-md sm:min-w-[520px] sm:px-8">
        <div className="flex items-center justify-between gap-2">
          <div className="space-y-2 5">
            <h1 className="h2-bold text-dark100_light900">
              Join StackOverflow AI
              <p className="paragraph-regular text-dark500_light400">
                To get your questions answered
              </p>
            </h1>
          </div>
          <Image
            src="/images/site-logo.svg"
            alt="StackOverflow AI"
            width={50}
            height={50}
            className="object-contain"
          />
        </div>
        {children}

        <SocialAuthForm />
      </section>
    </main>
  );
}

export default AuthLayout;
