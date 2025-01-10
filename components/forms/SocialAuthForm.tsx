"use client";

import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { toast } from "@/hooks/use-toast";
import { signIn } from "next-auth/react";
import ROUTES from "@/constants/routes";

function SocialAuthForm() {
  const buttonClassName =
    "background-dark400_light900 body-medium text-dark200_light800 min-h-12 flex-1 rounded-2 px-4 py-3.5";

  const handleSignIn = async (provider: "github" | "google") => {
    try {
      await signIn(provider, { callbackUrl: ROUTES.HOME });
    } catch (error) {
      console.log(error);

      toast({
        title: "Sign-in failed",
        description:
          error instanceof Error ? error.message : "Something went wrong",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="mt-10 flex flex-wrap gap-2.5">
      <Button
        onClick={() => handleSignIn("github")}
        className={buttonClassName}
      >
        <Image
          src="/icons/github.svg"
          alt="Github Logo"
          width={20}
          height={20}
          className="invert-colors mr-2.5 object-contain"
        />
        <span>Sign in with Github</span>
      </Button>

      <Button
        onClick={() => handleSignIn("google")}
        className={buttonClassName}
      >
        <Image
          src="/icons/google.svg"
          alt="Google Logo"
          width={20}
          height={20}
          className="mr-2.5 object-contain"
        />
        <span>Sign in with Google</span>
      </Button>
    </div>
  );
}

export default SocialAuthForm;
