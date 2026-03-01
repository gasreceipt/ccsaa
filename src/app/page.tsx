import HeroSection from "@/components/HeroSection";
import SignUpForm from "@/components/SignUpForm";
import BulletinSection from "@/components/BulletinSection";
import QuickLinks from "@/components/QuickLinks";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <header>
        <HeroSection />
      </header>
      <main>
        <SignUpForm />
        <BulletinSection />
        <QuickLinks />
      </main>
      <Footer />
    </>
  );
}
