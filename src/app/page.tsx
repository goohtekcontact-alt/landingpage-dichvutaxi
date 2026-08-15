"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import HeroBanner from "@/components/HeroBanner";
import ServicesSection from "@/components/ServicesSection";
import WeddingEventSection from "@/components/WeddingEventSection";
import PopularRoutes from "@/components/PopularRoutes";
import FleetShowcase from "@/components/FleetShowcase";
import WhyChooseUs from "@/components/WhyChooseUs";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import QuickCallFloat from "@/components/QuickCallFloat";

export default function Home() {
  // Directly initiate phone call when booking action is requested
  const handleOpenCall = () => {
    if (typeof window !== "undefined") {
      window.location.href = "tel:02558999976";
    }
  };

  return (
    <main className="min-h-screen bg-background text-on-background font-body-md pt-[88px] overflow-x-hidden w-full" id="home">
      {/* Top Navigation */}
      <Navbar onOpenBookingModal={handleOpenCall} />

      {/* Hero Section */}
      <HeroBanner />

      {/* Popular Routes (Xe Ghép & Taxi) */}
      <PopularRoutes onOpenBookingModal={handleOpenCall} />

      {/* Our Services */}
      <ServicesSection onOpenBookingModal={handleOpenCall} />

      {/* Wedding & Event Services Dedicated Section */}
      <WeddingEventSection />

      {/* Vehicle Fleet */}
      <FleetShowcase onOpenBookingModal={handleOpenCall} />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* How It Works */}
      <HowItWorks />

      {/* Customer Reviews */}
      <Testimonials />

      {/* Footer */}
      <Footer />

      {/* Floating Action Buttons */}
      <QuickCallFloat />
    </main>
  );
}
