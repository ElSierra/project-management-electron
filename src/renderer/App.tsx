import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';

function Hello() {
  return (
    <div>
      <div className='w-full h-[30px] absolute top-0 drag'/>
      <div  className="h-screen flex items-center justify-center dark:bg-black bg-white">
       
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
