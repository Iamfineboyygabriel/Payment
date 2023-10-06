import React from 'react';
import "../Styles/pay.css";
import vi from "../Assets/images/visa3.jpg";

const Pay = () => {
  return (
    <header>
      <div className='container2'>
        <div className='right'>
          <h3>Payment</h3>
          <form action="input">
            <div className='visas'>
              <img src={vi} alt="" />
              <img src={vi} alt="" />
              <img src={vi} alt="" />
            </div>

            <label htmlFor="credit-card-number">Credit Card Number</label>
            <input type="text" id="credit-card-number" name="credit-card-number" placeholder='Credit card number' />

            <label htmlFor="exp-month">Exp month</label>
            <input type="text" id="exp-month" name="exp-month" placeholder='Exp month' />

            <div className='Zip'>
              <div className='exp-year'>
                <label htmlFor="exp-year">Exp Year</label>
                <select id="exp-year" name="exp-year">
                  <option value="">Choose Year</option>
                  <option value="2024">2024</option>
                  <option value="2025">2025</option>
                  <option value="2026">2026</option>
                  <option value="2027">2027</option>
                </select>
              </div>
              <div className='cvv'>
                <label htmlFor="cvv">CVV</label>
                <input type="number" id="cvv" name='cvv' placeholder='CVV' />
              </div>
            </div>
          </form>
        </div>
      </div>
    </header>
  );
};

export default Pay;
