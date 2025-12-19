import Hero from "./layout/main-section/Main";
import Navigation from "./components/navigation/Navigation";
import Events from "./layout/events-section/events";
import Announcement from "./layout/announcement-section/Announcement";
import Footer from "./components/footer/Footer";
import About from "./layout/about-section/About";
import Officer from "./layout/officer-layout/Officer";
import Document from "./layout/document-section/Document";

// redo

const App = () => {
  return (
    <div>
      <Navigation />
      <Hero />
      <Announcement />
      <Document />
      <Events />
      <About />
      <Officer />
      <Footer />
    </div>
  );
};

export default App;
