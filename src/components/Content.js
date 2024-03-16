import React, { useEffect, useRef, useState } from 'react';
import './Content.css';
import logo from '../images/sympologo.png'

const Content = () => {
  const [timerDays,setTimerDays] = useState('00');
  const [timerHours,setTimerHours] = useState('00');
  const [timerMinutes,setTimerMinutes] = useState('00');
  const [timerSeconds,setTimerSeconds] = useState('00');
  
  let interval = useRef();
  
  const startTimer = () =>{
    const countdownDate = new Date('March 27 2024 00:00:00').getTime();

    interval = setInterval(()=>{
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
      const minutes = Math.floor(distance % (1000 * 60 * 60) / ((1000 * 60)));
      const seconds = Math.floor(distance % (1000 * 60) / ((1000)));

      if(distance < 0){
        clearInterval(interval.current);
      }else{
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    } , 1000);
  }

  useEffect(()=>{
    startTimer();
    return ()=>{
      clearInterval(interval.current);
    }
  });
  

  return (
    <div class="content">
  
      <div class="logoContainer">
          <img src={logo} alt="Logo" />
          <h1>Innovate, Integrate, Inspire.</h1>
      </div>
      <div className="dateContainer">
        <h2>MARCH 27 , 2024</h2>
      </div>
      <a className='registerButton' href='https://forms.gle/xYKSZv81akNEyuc19' target='_blank'>Register Now</a>
      <div class="timerContainer">
          <div class="timer">
              <div class="timerNumber">
                  <p className='numbers'>{timerDays}</p>
                  <p><small>Days</small></p>
              </div>
              <div class="timerNumber">
                  <p className='numbers'>{timerHours}</p>
                  <p><small>Hours</small></p>
              </div>
              <div class="timerNumber">
                  <p className='numbers'>{timerMinutes}</p>
                  <p><small>Minutes</small></p>
              </div>
              <div class="timerNumber">
                  <p className='numbers'>{timerSeconds}</p>
                  <p><small>Seconds</small></p>
              </div>
          </div>
      </div>
</div>

  )
}

export default Content
