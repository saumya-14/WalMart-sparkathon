import React from 'react';

const Footer = () => {
  return (
    <div className='bg-[#0071DC] w-full text-white py-8'>
    <div className='container  px-4'>
      <div className='flex flex-col space-y-4'>
        <div className='flex flex-wrap justify-center text-xs space-x-4 mt-0'>
          <span>All Departments</span>
          <span>Store Directory</span>
          <span>Careers</span>
          <span>Our Company</span>
          <span>Sell on Walmart.com</span>
          <span>Help</span>
          <span>Product Recalls</span>
          <span>Accessibility</span>
          <span>Tax Exempt Program</span>
          <span>Get the Walmart App</span>
        </div>
        <div className='flex flex-wrap justify-center text-xs space-x-4 mt-0'>
          <span>Sign-up for Email</span>
          <span>Safety Data Sheet</span>
          <span>Terms of Use</span>
          <span>Privacy & Security</span>
          <span>California Supply Chain Act</span>
          <span>Privacy choices iconYour Privacy Choices</span>
          <span>Notice at Collection</span>
        </div>
        <div className='flex flex-wrap justify-center text-xs space-x-4 mt-0'>
          <span>NV Consumer Health Data Privacy Notice</span>
          <span>WA Consumer Health Data Privacy Notice</span>
          <span>Request My Personal Information</span>
          <span>Brand Shop Directory</span>
          <span>Pharmacy</span>
          <span>Walmart Business</span>
          <span>#IYWYK</span>
        </div>
        <div className='flex justify-center text-xs'>
          <span>Delete Account</span>
        </div>
        <div className='flex justify-center mt-4 text-xs'>
          <span>© 2024 Walmart. All Rights Reserved.</span>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Footer;
