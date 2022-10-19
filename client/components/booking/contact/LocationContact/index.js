import React from 'react';

import { IoLocationOutline, IoTimeOutline, IoMailOpenOutline, IoCallOutline } from "react-icons/io5";


function LocationContact() {
  return (
    
      <div className="flex_columns flex_rows row_gap_2">
          <div className="flex_column">
            <h5>Our Location</h5>
            <p><IoLocationOutline /> 3015 Grand Ave, Coconut Grove, Merrick Way, FL 12345</p>
          </div>
          <div className="flex_column">
            <h5>Call Us</h5>
            <p><IoCallOutline /> 1.954.456.6789</p>
          </div>
          <div className="flex_column">
            <h5>Working Hours</h5>
            <p><IoTimeOutline /> Mon. – Fr. 7 am – 8 pm</p>
          </div>
          <div className="flex_column">
            <h5>Get in Touch</h5>
            <p><IoMailOpenOutline /> hello@sochi.com</p>
          </div>
      </div>
   
  )
}

export default LocationContact