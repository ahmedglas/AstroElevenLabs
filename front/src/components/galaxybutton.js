import React, { useEffect, useRef } from 'react';
import '../styles/GalaxyButton.css';
import PropTypes from 'prop-types';

const GalaxyButton = ({ onClick }) => {
  const particlesRef = useRef(null);

  useEffect(() => {
    const RANDOM = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
    const PARTICLES = particlesRef.current.querySelectorAll('.star');

    PARTICLES.forEach((P) => {
      P.setAttribute(
        'style',
        `
                --angle: ${RANDOM(0, 360)};
                --duration: ${RANDOM(6, 20)};
                --delay: ${RANDOM(1, 10)};
                --alpha: ${RANDOM(40, 90) / 100};
                --size: ${RANDOM(2, 6)};
                --distance: ${RANDOM(40, 200)};
            `,
      );
    });
  }, []);

  return (
    <div className='galaxy-button' ref={particlesRef}>
      <button onClick={onClick}>
        <span className='spark'></span>
        <span className='backdrop'></span>
        <span className='galaxy__container'>
          <span className='star star--static'></span>
          <span className='star star--static'></span>
          <span className='star star--static'></span>
          <span className='star star--static'></span>
        </span>
        <span className='galaxy'>
          <span className='galaxy__ring'>
            <span className='star'></span>
            <span className='star'></span>
            <span className='star'></span>
            <span className='star'></span>
          </span>
        </span>
        <span className='text'>Add Astronaut</span>
      </button>
    </div>
  );
};

GalaxyButton.propTypes = {
  onClick: PropTypes.func,
};

export default GalaxyButton;
