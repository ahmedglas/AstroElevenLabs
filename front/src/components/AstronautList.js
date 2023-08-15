import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner';
import { useFetchAstro } from '../hooks/useAstro';
import { AstronautCard } from './card';
import GalaxyButton from './galaxybutton';

const AstronautList = () => {
  const navigate = useNavigate();
  const { isLoading, isError, data: astronauts = [] } = useFetchAstro();

  if (isLoading) {
    return (
      <div className='center-container'>
        <ThreeDots type='ThreeDots' color='#007bff' height='150' width='150' />
      </div>
    );
  }
  if (isError) {
    return (
      <h1 className='center-container' style={{ color: 'white' }}>
        Error loading astronauts. Please try again later.
      </h1>
    );
  }
  return (
    <>
      {!isLoading ? (
        <div
          className='center-container'
          style={astronauts.length === 0 ? { height: '85vh', placeItems: 'center' } : {}}
        >
          <GalaxyButton onClick={() => navigate('/add')} />
        </div>
      ) : (
        ''
      )}

      <div className='flex-container'>
        {astronauts.map((astronaut, idx) => (
          <AstronautCard key={idx} astronaut={astronaut} />
        ))}
      </div>
    </>
  );
};

export default AstronautList;
