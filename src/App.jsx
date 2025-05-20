import Header from "./components/Header";
import Hero from "./components/Hero";
import ResearchInfo from "./sections/ResearchInfo";
import Diagrams from "./sections/Diagrams";
import Milestones from "./sections/Milestones";
import Documents from "./sections/Documents";
import Team from "./sections/Team";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Technologies from "./sections/Technologies";


function App() {
  return (
    <div className="bg-white dark:bg-black text-gray-900 dark:text-white">
      <Header />
      <main className="pt-20">
        <Hero />
        <ResearchInfo/>
        <Diagrams />
        <Technologies/>
        <Milestones/>
        <Documents/>
        <Team/>
        <About/>
        <Contact/>
      </main>
    </div>
  );
}

export default App;
