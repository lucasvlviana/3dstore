import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import FeaturedSection from "@/components/sections/FeaturedSection";
import AboutSection from "@/components/sections/AboutSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import PaymentSection from "@/components/sections/PaymentSection";
import ReviewsSection from "@/components/sections/ReviewsSection";

export const metadata: Metadata = { alternates: { canonical: "/" } };

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedSection />
      <AboutSection />
      <HowItWorksSection />
      <PaymentSection />
      <ReviewsSection />
    </>
  );
}
