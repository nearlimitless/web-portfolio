import SocialSidebar from "@/components/SocialSidebar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Spotlight from "@/components/Spotlight";

export default function Home() {
  return (
    <>
      <SocialSidebar />

      <div className="main-content flex min-h-screen flex-col pb-16 pl-20 pr-6 pt-8 sm:pl-28 sm:pr-14">
        <Navbar />
        <Hero />
        <Spotlight />
      </div>
    </>
  );
}
