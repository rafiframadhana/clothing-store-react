import React from 'react'
import Hero from './Hero.jsx';
import ProductDisplay from './ProductDisplay.jsx';
import Testimonials from './Testimonials.jsx';
import './../../styles/Home.css';

export default function Home() {
  return (
    <>
      <Hero />
      <ProductDisplay />
      <Testimonials />
    </>
  )
}