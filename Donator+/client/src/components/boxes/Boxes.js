import React from 'react';
import './boxes.css';
import ProfileBox from '../box/ProfileBox';
import OrganDonationeBox from '../box/OrganDonationBox';
import DonatedBox from '../box/DonatedBox';

export default function Boxes() {
  return (
    <div className='posts'>
          <DonatedBox/>
          <ProfileBox/>
          <OrganDonationeBox/>  
    </div>
  )
}
