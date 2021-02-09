import React, { useState, useEffect, useRef } from 'react';
import lottie from 'lottie-web';

const LottieAnimation = () => {
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

  console.log(timeOfDay, thisHour);

  return <div className='container' ref={container}></div>;
};

export default LottieAnimation;
