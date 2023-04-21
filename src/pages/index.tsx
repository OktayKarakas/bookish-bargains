import Header from "@/components/layout/Header";
import Landing from "./../components/HomePage/Landing";

export default function Home() {
  return (
    <main className="bg-special_colors-blue max-h-screen h-screen overflow-auto">
      <div className="max-w-7xl mx-auto">
        <Header />
        <Landing />
      </div>
    </main>
  );
}
