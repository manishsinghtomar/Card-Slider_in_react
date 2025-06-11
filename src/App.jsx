import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,//how many slide you want show initially 
    slidesToScroll: 1//on clicking on arrow button how many slide will scroll at a time
  };

  return (
    <div className='w-3/4 m-auto'>
      <div className="mt-20">
    <Slider {...settings}>
        {data.map((d)=>(
          <div className='bg-white h-[450px] text-black rounded-xl'>
            <div className='h-56 rounded-t-xl bg-indigo-500 flex justify-center items-center'>
              <img src={d.img} alt="" className='h-44 w-44 rounded-full'/>
            </div>
            <div className='flex flex-col justify-center items-center gap-4 p-4'>
              <p className='text-xl font-semibold'>{d.name}</p>
              <p className='text-center'>{d.review}</p>
              <button className='bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl'>Read More</button>
            </div>
          </div>
        ))}
        </Slider>
      </div>
    </div>
  );
}

const data =[
  {
    name : `Chainsaw Man`,
    img: `/Student/pochita.jpg`,
    review: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. vitae natus voluptate similique, esse provident repellat! Qui magnam eum saepe dolor totam eius assumend.`
  },
    {
    name : `OnePunch Man`,
    img: `/Student/onepunchman.png`,
    review: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi blanditiis vitae natus voluptate similique, esse provident repellat! Qui magnam eum saepe dolor totam eius.`
  },  
  {
    name : `Onichan`,
    img: `/Student/girl.png`,
    review: `Lorem ipsum dolor sit amet consectetur, adipisicing elit, esse provident repellat! Qui magnam eum saepe dolor totam eius assumenda.`
    } ,{
    name : `Ben`,
    img: `https://cdn.pixabay.com/photo/2024/01/10/16/22/man-8499961_1280.jpg`,
    review: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi blanditiis vitae, esse provident repellat! dolor totam eius assumenda.`
    }
]

export default App
