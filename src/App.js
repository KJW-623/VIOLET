import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Intro from './intro';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Intro />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
