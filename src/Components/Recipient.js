import React from 'react';
import { Link, Routes, Route, useNavigate } from 'react-router-dom';
import Inside from './Inside';
import Outside from './Outside';
import '../Styles/recipient.css';

const Recipient = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className='house'>
        <div>
          <h3 style={{ color: 'purple' }}>Your Recipient</h3>
          <p>Who are you sending money to?</p>
          <hr />
          <br />
        </div>

        <div className='house__content'>
          <p style={{ color: 'grey' }}>Their email (optional)</p>
          <input type='text' />
        </div>

        <div className='house__content'>
          <p style={{ color: 'grey' }}>Full name of the account holder</p>
          <input type='text' />
        </div>

        <h3 style={{ color: 'purple' }}>Bank Details</h3>
        <hr />

        <div className='go'>
          <nav>
            <Link
              to="inside"
              className="nav-link"
              onClick={() => navigate('inside')}
            >
              Inside Europe
            </Link>
            <Link
              to="outside"
              className="nav-link"
              onClick={() => navigate('outside')}
            >
              Outside Europe
            </Link>
          </nav>
        </div>
        <hr />
        <Routes>
          <Route path='inside' element={<Inside />} />
          <Route path='outside' element={<Outside />} />
        </Routes>

        <button style={{background: "purple", marginTop: "3em"}}>Continue</button>
      </div>
    </>
  );
};

export default Recipient;
