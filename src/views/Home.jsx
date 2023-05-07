import React from 'react';
import '../styles/tab-style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductCategories from '../components/ProductCategories';
import Slider from '../components/Slider';
import { SliderData } from '../data/SliderData';


export default function Home() {
  return (
    <div>
       <Slider slides={SliderData}/>
      <title>GFC | Home</title>
      <ProductCategories />
    </div>

  )
}
