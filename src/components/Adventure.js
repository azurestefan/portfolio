import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Adventure.css';
import myVideo from '../videos/video-1.mp4';

function Adventure() {
  return (
    <div className='adventure-container'>
      <video src={myVideo} type='video/mp4' autoPlay loop muted />
      <h1>WELCOME ADVENTURER</h1>
      <p>Plan your own adventure today!</p>
      <div className='adven-btns'>
        <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
          GET STARTED
        </Button>
        <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default Adventure;
