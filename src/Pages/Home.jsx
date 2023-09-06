import React from 'react'
import MyCarousel from '../Components/MyCarousel';
import Table from '../Components/Table';
import Ourservices from '../Components/Ourservices';
import Textslider from '../Components/Textslider';
import Testimonials from '../Components/Testimonials';
import Ceo from '../Components/Ceo';
import Pyramid from '../Components/pyramid';

const Home = () => {
  return (
    <div className=''>
        <MyCarousel/>
        < Textslider/>
        <Table/>
        <Pyramid/>
        <Ceo/>
        <Ourservices/>
        <Testimonials/>
        
    </div>
  )
}

export default Home