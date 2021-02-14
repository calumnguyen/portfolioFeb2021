import React, { useState, useEffect, useRef } from 'react';
import lottie from 'lottie-web';

export const HomepageLottie = () => {
  const container = useRef(null);
  const thisHour = new Date().getHours();
  const [timeOfDay, setTimeOfDay] = useState(
    `${thisHour < 6 ? 'night' : thisHour < 19 ? 'morning' : 'night'}`
  );

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      autoSize: true,
      animationData: require(`${
        timeOfDay === 'morning' ? './morningLottie.json' : './nightLottie.json'
      }`),
    });
  }, [thisHour]);

  return <div className='container' ref={container}></div>;
};

export const ConnectLottie = () => {
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      autoSize: true,
      animationData: require('./connect.json'),
    });
  }, []);

  return <div className='container' ref={container}></div>;
};
