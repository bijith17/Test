import React from 'react'
import NarcityCanada from '../../assets/imgs/narcityCanada.png'
import Insauga from '../../assets/imgs/insauga.png'
import Cp24 from '../../assets/imgs/cp24.png'
import Yahoo from '../../assets/imgs/yahoo.png'
import Curiocity from '../../assets/imgs/curiocity.png'
import Ottawa from '../../assets/imgs/ottawa.png'
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
function Featured() {

  return (
    <section className='py-10 w-full bg-testBg'>
        <h3 className='mb-6 text-xl font-[1000] text-center'>Featured On</h3>
          <div className=" mx-7 flex justify-evenly">
            <div className="flex items-center">
            <FaAngleLeft/>
            </div>
            <img src={NarcityCanada} alt="" className='' />
            <img src={Insauga} alt="" className='' />
            <img src={Cp24} alt="" className='' />
            <img src={Yahoo} alt="" className='' />
            <img src={Curiocity} alt="" className='hidden sm:block' />
            <img src={Ottawa} alt="" className='hidden sm:block' />
            <div className="flex items-center">
            <FaAngleRight/>
            </div>
          </div>

    </section>
  )
}

export default Featured