import React from 'react';
import "../Styles/reviews.css";

const Section = ({ label, value, labelColor, valueColor, customClass, spaceBetween, fontsize }) => {
  const sectionStyle = {
    justifyContent: spaceBetween? 'space-between' : 'initial',
  };

  // Define a style object for the value based on the customClass and valueFontSize props
  const valueStyle = {
    color: valueColor,
    fontSize: customClass === 'you-send' ? '20px' : 'inherit', // Apply custom font size
    fontWeight: 400,
    lineHeight: '24px',
    letterSpacing: '0em',
    textAlign: 'left',
    alignSelf: 'flex-end',
  };

  return (
    <div className={`pt ${customClass}`} style={sectionStyle}>
      <p style={{ color: labelColor }}>{label}</p>
      <p style={valueStyle}>{value}</p>
    </div>
  );
};

const Review = () => {
  const sections = [
    { label: 'You send', value: '1,000 USD', labelColor: '#8B8F96', valueColor: '#8B8F96', customClass: 'you-send', alignEnd: true, valueFontSize: "20px" },
    { label: 'Total Fees (included)', value: '3.69 USD', labelColor: '#8B8F96', valueColor: '#404040' },
    { label: "Amount we'll convert", value: '996.31 USD', labelColor: '#8B8F96', valueColor: '#404040' },
    { label: 'Guaranteed weight', value: '1,102.89 USD', labelColor: '#8B8F96', valueColor: '#404040' },
    { label: 'Johny', value: '1,248.63 EUR', labelColor: '#8B8F96', valueColor: '#8B8F96',  valueFontSize: "20px", valueStyle: "inherit"}
  ];

  return (
    <div className='house'>
      <div>
        <h3 style={{ color: 'purple' }}>Review details of your transfer</h3>
      </div>
      <hr />

      {sections.map((section, index) => (
        <Section key={index} {...section} />
      ))}

      <hr />

      <div className='john'>
        <Section label='Name' value='Johny Gbadamosi' labelColor='#8B8F96' valueColor='#404040' />
        <Section label='Email' value='johny.Gbadamosi@gmail.com' labelColor='#8B8F96' valueColor='#404040' />
        <Section label='IBAN/Account' value='DE898919013902102' labelColor='#8B8F96' valueColor='#404040' />
      </div>
      <button>Confirm And Continue</button>
    </div>
  );
};

export default Review;
