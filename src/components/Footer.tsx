import React from 'react'

const Footer = () => {
  return (
    <div className='bg-gray-800 text-white p-10 mt-10'>
      <div className='flex justify-between items-center'>
        <h3 className='text-2xl font-bold mb-4'>APraSak Technologies</h3>
      </div>

      <div className='flex justify-between'>
        <div>
          <h4 className='font-bold mb-2 text-lg mt-10'>Contact Us</h4>
          <p>Email: enquiries@apstechnologies.in</p>
          <p className='mt-10 text-sm'>Copyright © 2025 APraSak Technologies - All Rights Reserved.</p>
        </div>
      </div>

    </div>
  )
}

export default Footer