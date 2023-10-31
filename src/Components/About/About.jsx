import React from 'react'
import visibility from '../../assets/imgs/visibility.png'
import realLocalAgents from '../../assets/imgs/real local agents.png'
import emailNotification from '../../assets/imgs/notification.png'
import proffesionalPhotos from '../../assets/imgs/professional photos.png'
function About() {
  return (
    <section className=' about my-12 mx-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 space-x-10 bg-[#FFFFFF]'>
        <div className='p-5'>
            <img src={visibility} alt="Visibility" className='mx-auto d-block w-52' />
            <h3 className='font-bold text-center mt-3 mb-1'>Visibility</h3>
            <p className='text-custom text-gray-500 text-center'>Your house will appear as a ‘featured listing’ on the home page, ensuring your house gets the maximum visibility</p>
        </div>
        <div>
            <img src={realLocalAgents} alt="real Local Agents" className='w-60 mt-7' />
            <h3 className='font-bold text-center mt-3 mb-1'>Real Local Agents</h3>
            <p className='text-custom text-gray-500 text-center'>You are backed by a team of Real estate agents who know the market in and out. With their market insights, experience and sound data, your home will sell in no time.</p>
        </div>
        <div className='mt-4 sm:mt-0'>
            <img src={emailNotification} alt="email & Notification" />
            <h3 className='font-bold text-center mt-3 mb-1'>Email & Notification</h3>
            <p className='text-custom text-gray-500 text-center'>Users get instant notifications about new listings, price hikes, price drops, and neighborhood alerts. We get your property shown to people who are actively looking and eager to buy.</p>
        </div>
        <div>
            <img src={proffesionalPhotos} alt="proffesional Photos" className='mt-5' />
            <h3 className='font-bold text-center mt-3 mb-1'>Proffesional Photos</h3>
            <p className='text-custom text-gray-500 text-center'>With professional staging and photos, we make your house reach the best of its abilities and show it off because looks are what sell.</p>
        </div>
    </section>
  )
}

export default About