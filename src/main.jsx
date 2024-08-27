import React from 'react';
import ReactDOM from 'react-dom/client';
import './main.css';
import { BrowserRouter, Route,Routes} from 'react-router-dom'
import Layout from './Layout.jsx';
import Homepage from './Pages/Homepage/Homepage.jsx'
import Wallet from './Pages/Walletpage/Wallet.jsx'
import Leaderboard from './Pages/Leaderboardpage/Leaderboard.jsx'

const router = (
    <BrowserRouter>
      <Routes>
        <Route path= "/" element= {<Layout />}>
        <Route index element={<Homepage />}/>
        <Route path="/Wallet" element={<Wallet />}/>
        <Route path="/Leaderboard" element={<Leaderboard />}/>
      </Route>
      </Routes>
    </BrowserRouter>
   )
  

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {router} 
  </React.StrictMode>,
);


reportWebVitals();
