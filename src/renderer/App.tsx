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
    <div className="h-screen flex dark:bg-[#242529] font-inter bg-white dark:text-white">
      <div className="w-full absolute h-[10px] drag top-0 " />

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
