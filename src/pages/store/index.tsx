import StoreMain from "@/components/Store/StoreMain";
import Landing from "@/components/Store/Landing";
import Header from "@/components/layout/Header";
import Subscription from "@/components/HomePage/Subscription";
import Footer from "@/components/layout/Footer";
const Store = () => {
  return (
    <div className="overflow-auto max-h-full">
      <div className="bg-special_colors-blue max-h-full">
        <div className="max-w-7xl mx-auto h-full max-h-full min-h-full py-10 lg:py-0">
          <Header />
          <Landing />
        </div>
      </div>
      <StoreMain />
      <div className="bg-white pt-8 pb-20 flex items-center justify-center my-20 max-w-full max-h-full">
        <Subscription />
      </div>
      <Footer />
    </div>
  );
};

export default Store;
