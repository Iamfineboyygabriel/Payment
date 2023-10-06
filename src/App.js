import React from 'react';
import './App.css';
import Payment from './Payment/Payment';
import Amount from './Components/Amount';
import Recipient from './Components/Recipient';
import Pay from './Components/Pay';
import Review from './Components/Review';
import Inside from './Components/Inside';
import Outside from './Components/Outside';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';

function App() {
  
  return (
    <Router>
      <div className="App">
        <Payment/>
        <Routes>
          <Route path="/amount" element={<Amount />} />
          <Route path="/recipient" element={<Recipient />}>
            <Route path="inside" element={<Inside />} />
            <Route path="outside" element={<Outside />} />
          </Route>
          <Route path="/review" element={<Review />} />
          <Route path="/pay" element={<Pay />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
