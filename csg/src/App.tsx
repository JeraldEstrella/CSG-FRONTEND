import Hero from './layout/main-section/Main';
import Navigation from './components/navigation/Navigation';
import Events from './layout/events-section/events';

const App = () => {
  return (
    <div>
      <Navigation />
      <Hero />
      <Events />
    </div>
  );
};

export default App;
