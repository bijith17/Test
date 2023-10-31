import React from 'react'

function Banner() {
  return (
    <div className='banner w-full grid place-content-center h-screen'>
        <div className="text-center ">
            <h1 className='font-bold text-xl sm:text-3xl mb-4'>Thinking of selling your home?</h1>
            <p className='text-center text-sm sm:text-base'> Get an instant estimate of your home’s value. You can quickly determine the estimated  value of <br /> your home by answering a few quick questions.</p>
            <form action="" >
                <input type="text" name="" id="" className='bg-white rounded my-3 p-2 border border-1 border-buttonBg w-96' placeholder='Enter your Address....' /> <br />
                <input type="button" className='bg-buttonBg rounded-full text-white py-2 px-4 sm:px-6' value="Get Free Estimate" />
            </form>
        </div>
    </div>
  )
}

export default Banner