import React from 'react';
import { Link,Outlet } from 'react-router-dom';
import { RxCross1 } from 'react-icons/rx';
import bay from '../Assets/images/Group.jpg';
import '../Components/navbar.css';

const Navbar = ({ activeStep, steps }) => {
  // Calculate the width of the progress line
  const progressWidth = ((activeStep + 1) / steps) * 100 + '%';

  return (
    <>
    <nav>
      <div className='nav__container'>
        <div className='container'>
          <div className='step-indicator'>
            <div className='progress-line' style={{ width: progressWidth }}>
              <div className='progress-circle'></div>
            </div>
          </div>
          <ul className='nav__links'>
          <img src={bay} alt="company-p" className='company-logo' />
            <li><Link to="/amount">Amount</Link></li>
            <li><Link to="/recipient">Recipient</Link></li>
            <li><Link to="/review">Review</Link></li>
            <li><Link to="/pay">Pay</Link></li>
            <RxCross1 />
          </ul>
          
          <div className='icon__container'>
           
          </div>
        </div>
      </div>
    </nav>
    <Outlet/>
    </>
  );
};

export default Navbar;
