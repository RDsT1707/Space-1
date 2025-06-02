import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Homes/Home';
import Destination from './components/destination/Destination';
import Crew from './components/crew/Crew';
import Technology from './components/tech/Tech';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/crew" element={<Crew />} />
          <Route path="/technology" element={<Technology />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;