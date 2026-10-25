import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppWidget from "@/components/layout/WhatsAppWidget";

export default function SiteLayout() {
  return (
    <div className="relative min-h-screen bg-midnight">
      <Navbar />
      <main className="pt-20 sm:pt-24">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppWidget />
    </div>
  );
}