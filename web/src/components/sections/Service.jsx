import React from 'react'
import { FaLaravel, FaReact } from 'react-icons/fa';
import { SiExpress, SiFastapi } from 'react-icons/si';
import { TbBrandReactNative } from 'react-icons/tb';
import Slider from "react-slick";


const SliderItem = ({desc}) => (
  <div className="carousel__item">
    <h1>principal service</h1>
    <div className='my-4 text-gray-500 font-title text-3xl'>{desc.service}</div> 
    <div className='flex gap-4'>
      {desc.lang.map((Icon, index) => (
        <Icon key={index} className="text-gray-500" />
      ))}
    </div>
  </div>
)
export default function Service() {
  const serviceDescriptions = [
    {
      service: 'Application web responsive',
      lang: [ FaReact, FaLaravel]
    },
    {
      service: 'API Serverless',
      lang: [ SiExpress, SiFastapi]
    },
    {
      service: 'Application mobile multiplateforme',
      lang: [TbBrandReactNative]
    },
  ]
 
  return (
    <div id="service">
        <Slider 
          dots
          autoplay 
          infinite 
          arrows={false}
          autoplaySpeed={10000} 
          className='m-auto mb-20'
          dotsClass='slick-dots text-white'
        >
        {
          serviceDescriptions.map((desc, index) => (
            <SliderItem key={index} desc={desc} />
          ))
        }
        </Slider>
    </div>
  )
}
