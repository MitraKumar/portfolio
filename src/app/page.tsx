import Header from "@/components/Header";
import { NavBar } from "@/components/Navbar";

export default function Home() {
  return (
    <main>
      <div className="bg-brush-pattern bg-full-width bg-no-repeat bg-center">
        <NavBar />
        <Header />
      </div>
    </main>
  );
}
