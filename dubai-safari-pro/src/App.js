import './App.css';
import Header from './components/header/Header';
import HeroHeader from './components/hero-header/HeroHeader';
import Services from './components/services/Services';
function App() {
  return (
    <div className="App">
      <Header />
      <HeroHeader />
      <Services />
    </div>
  );
}

export default App;
