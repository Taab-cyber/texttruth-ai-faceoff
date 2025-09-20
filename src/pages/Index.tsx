import Header from "@/components/Header";
import TextDetector from "@/components/TextDetector";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <TextDetector />
      </main>
    </div>
  );
};

export default Index;