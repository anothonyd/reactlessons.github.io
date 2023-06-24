import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Layout';
import Eight from './pages/Handson-08/Eight';
import Nine from './pages/Handson-09/Nine';
import Ten from './pages/Handson-10/Ten';
import Eleven from './pages/Handson-11/Eleven';
import Twelve from './pages/Handson-12/Twelve';
import Thirteen from './pages/Handson-13/Thirteen';
import Fourteen from './pages/Handson-14/Fourteen';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Eight />} />
            <Route path="nine" element={<Nine />} />
            <Route path="ten" element={<Ten />} />
            <Route path="eleven" element={<Eleven />} />
            <Route path="twelve" element={<Twelve />} />
            <Route path="thirteen" element={<Thirteen />} />
            <Route path="fourteen" element={<Fourteen />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
