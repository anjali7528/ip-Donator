import React from 'react'
import './donatedbox.css'


export default function DonatedBox() {
  
  return (
    <div className='post'>
      <span className='postTitle'>
       Donatations
      </span>
      <div className='postdiv'>
          <ul className='category'>
              <li className='organdiv'>
                ORGANS
                  <ul  className='categoryDon'>
                    <li>Heart</li>
                    <li>Lungs</li>
                    <li>Kidneys</li>
                  </ul>
              </li>
              <li>TISSUES
                  <ul className='categoryDon'>
                     <li>Cornea</li>
                     <li>Skin</li>
                     <li>Bones</li>
                  </ul>
              </li>
          </ul>
      </div>
    </div>
  )
}
