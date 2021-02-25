import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Destinations</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem src='images/img-9.jpg' text='Find hidden waterfalls in a unforgettable jungle trek' label='Adventure' path='/services' />
            <CardItem src='images/img-2.jpg' text='Navigate through the emerald waters of Bali' label='Luxury' path='/services' />
          </ul>
          <ul className='cards__items'>
            <CardItem src='images/img-3.jpg' text='Pacific Ocean tour visiting Uncharted Waters' label='Mystery' path='/services' />
            <CardItem src='images/img-4.jpg' text='Play Football on Top of the Himilayan Mountains' label='Adventure' path='/products' />
            <CardItem src='images/img-8.jpg' text='Guided camel tour across the Sahara Desert' label='Adrenaline' path='/sign-up' />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
