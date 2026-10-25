import type { ReactNode } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { AgeGate } from "@/components/AgeGate";

export const Layout = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen bg-background">
    <AgeGate />
    <Navigation />
    <main>{children}</main>
    <Footer />
  </div>
);
