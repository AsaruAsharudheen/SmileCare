import Header from "@/components/Header";
import Hero from "@/components/Hero";
import QuickActions from "@/components/QuickActions";
import About from "@/components/About";
import Treatments from "@/components/Treatments";
import WhyChooseUs from "@/components/WhyChooseUs";
import DoctorProfile from "@/components/DoctorProfile";
import Technology from "@/components/Technology";
import SmileGallery from "@/components/SmileGallery";
import Testimonials from "@/components/Testimonials";
import Blog from "@/components/Blog";
import AppointmentForm from "@/components/AppointmentForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-[#F8FAFD]">
      {/* SECTION 01: Header */}
      <Header />

      {/* SECTION 02: Hero Banner */}
      <Hero />

      {/* SECTION 03: Quick Action Cards */}
      <QuickActions />

      {/* SECTION 04: About Us / Trusted Dental Care */}
      <About />

      {/* SECTION 05: Personalized Dental Treatments */}
      <Treatments />

      {/* SECTION 06: Why Choose Smilecare */}
      <WhyChooseUs />

      {/* SECTION 07: Featured Dentist Profile */}
      <DoctorProfile />

      {/* SECTION 08: Advanced Dental Technology */}
      <Technology />

      {/* SECTION 09: Smile Gallery */}
      <SmileGallery />

      {/* SECTION 10: Testimonials and Community */}
      <Testimonials />

      {/* SECTION 11: Patient Education / Blog */}
      <Blog />

      {/* SECTION 12: Appointment Booking */}
      <AppointmentForm />

      {/* SECTION 13: Footer */}
      <Footer />
    </main>
  );
}
