import Navbar from "@/components/navigation/navbar";
import React from "react";

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <Navbar />
      {children}
    </main>
  );
}

export default RootLayout;
