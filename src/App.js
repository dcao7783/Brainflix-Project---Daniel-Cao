import './App.scss';
import Header from "./components/Header/Header";
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import HomePage from './page/Home';
import UploadPage from './page/Upload';
import { useEffect, useState } from 'react';
import axios from "axios";
import {base_url, api_key} from "./utility";



function App() {
  const [arrVideos, setArrVideos] = useState(null);

  useEffect (() => {
    axios
    .get (`${base_url}/videos?api_key=${api_key}`)
    .then (response => {
        console.log(response.data)
        setArrVideos(response.data)
    
    }).catch(e => console.log(e))
}, [])

  return (
    <BrowserRouter>
      <Header />
      <Routes>
      <Route path="/" element={<HomePage arrVideos={arrVideos}/>}/>
      <Route path="videos/:id" element={<HomePage arrVideos={arrVideos}/>}/>
      <Route path="/upload" element={<UploadPage />}/> 
      </Routes>
    </BrowserRouter >
  );
}

export default App;


