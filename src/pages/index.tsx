import Header from "@/components/layout/Header";
import Landing from "./../components/HomePage/Landing";
import AuthorBookIncludesSection from "./../components/HomePage/AuthorBookIncludesSection";

export default function Home() {
  return (
    <main className="overflow-auto bg-special_colors-blue max-h-screen h-screen">
      <div className="max-w-7xl mx-auto mb-5">
        <Header />
        <Landing />
      </div>
      <div className="bg-white py-10 flex items-center justify-center">
        <AuthorBookIncludesSection />
      </div>
    </main>
  );
}
