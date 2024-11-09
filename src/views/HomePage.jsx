import HomeHeroSection from "../components/section/home/HomeHeroSection";
import HomeTrendingSection from "../components/section/home/HomeTrendingSection";

export default function HomePage() {
  return (
    <>
      <div className="w-full">
        <HomeHeroSection />
        <HomeTrendingSection />
      </div>
    </>
  );
}
