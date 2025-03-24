import { Features } from "./_components/features";
import { Hero } from "./_components/hero";

const HomePage = async () => {
  return (
    <main className="flex-grow">
      <Hero />
      <Features />
    </main>
  );
};

export default HomePage;
