
import './App.scss';
import Header from "./components/Header/Header";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './page/Home';
import UploadPage from './page/Upload';



function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/upload" element={<UploadPage />}/>
      </Routes>
    </BrowserRouter >
  );
}

export default App;


