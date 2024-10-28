import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSelction2 from "@/components/HeroSelction2";


export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSelction2/>
      <FeaturedCourses/>
    </main>
  );
}
