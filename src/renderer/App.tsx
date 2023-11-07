import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import LeftPanel from './components/LeftPanel';
import Home from './screens/Home';
import Nav from './components/Nav';
import { useState } from 'react';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="h-screen flex dark:bg-[#242529] bg-white dark:text-white">
      <div className="w-full absolute h-[10px] top-0 drag" />

      <Router>
        <div>
          <Nav handleClick={handleClick} isOpen={isOpen} />
          <LeftPanel isOpen={isOpen} onClick={handleClick} />
        </div>

        <Routes>
          <Route path="/" element={<Home />} index={true} />{' '}
          <Route path="/messages" element={<Home />} index={true} />{' '}
          <Route path="/tasks" element={<Home />} index={true} />
        </Routes>
      </Router>
    </div>
  );
}
