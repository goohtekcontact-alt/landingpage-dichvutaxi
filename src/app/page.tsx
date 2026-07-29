"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import HeroBanner from "@/components/HeroBanner";
import ServicesSection from "@/components/ServicesSection";
import FleetShowcase from "@/components/FleetShowcase";
import BookingProcess from "@/components/BookingProcess";
import Testimonials from "@/components/Testimonials";
import AboutStats from "@/components/AboutStats";
import CoverageMap from "@/components/CoverageMap";
import FaqSection from "@/components/FaqSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import QuickCallFloat from "@/components/QuickCallFloat";

export default function Home() {
  // Directly initiate phone call when booking action is requested
  const handleOpenCall = () => {
    if (typeof window !== "undefined") {
      window.location.href = "tel:0981234567";
    }
  };

  return (
    <main className="min-h-screen bg-background text-on-background font-body-md">
      {/* Top Navigation */}
      <Navbar onOpenBookingModal={handleOpenCall} />

      {/* Hero Section */}
      <HeroBanner />

      {/* Our Services */}
      <ServicesSection onOpenBookingModal={handleOpenCall} />

      {/* Vehicle Fleet */}
      <FleetShowcase onOpenBookingModal={handleOpenCall} />

      {/* Booking Process */}
      <BookingProcess />

      {/* Customer Reviews */}
      <Testimonials />

      {/* About & Stats */}
      <AboutStats />

      {/* Coverage & Map */}
      <CoverageMap onOpenBookingModal={handleOpenCall} />

      {/* FAQ */}
      <FaqSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />

      {/* Floating Action Buttons */}
      <QuickCallFloat onOpenBookingModal={handleOpenCall} />
    </main>
  );
}
