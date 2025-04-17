import BitixIntro from "@/components/BitixIntro";
import Advantages from "@/components/Advantages";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <BitixIntro />
      <Advantages />
      <Pricing />
      <Footer />
    </main>
  );
};

export default Index;
