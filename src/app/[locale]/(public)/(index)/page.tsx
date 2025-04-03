import { List } from "./_components/features";
import { Hero } from "./_components/hero";

const HomePage = async () => {
  return (
    <main className="flex-grow">
      <Hero />
      <List />
    </main>
  );
};

export default HomePage;
