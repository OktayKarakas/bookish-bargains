import Header from "@/components/layout/Header";
import Landing from "./../components/HomePage/Landing";
import AuthorBookIncludesSection from "./../components/HomePage/AuthorBookIncludesSection";
import About from "@/components/HomePage/About";

export default function Home() {
  return (
    <main className="overflow-auto mx-h-full">
      <div className="bg-special_colors-blue lg:h-screen max-h-full">
        <div className="relative max-w-7xl mx-auto h-full max-h-full py-10 lg:py-0">
          <Header />
          <div className="lg:flex lg:items-center lg:justify-center lg:h-4/5 overflow-hidden">
            <Landing />
          </div>
        </div>
      </div>
      <div className="bg-white py-10 flex items-center justify-center mb-14">
        <AuthorBookIncludesSection />
      </div>
      <div className="bg-[#F4F8FF]">
        <div className="bg-[#F4F8FF] py-10 flex items-center justify-center max-w-7xl mx-auto">
          <About
            author_img={"/images/HomePage/Author.svg"}
            qr_img={"/images/HomePage/author_qr.svg"}
          />
        </div>
      </div>
    </main>
  );
}
