import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDeleteAstro } from '../hooks/useDeleteAstro';
import PropTypes from 'prop-types';

export const AstronautCard = ({ astronaut }) => {
  const { deleteAstro } = useDeleteAstro();
  const [showFullMission, setShowFullMission] = useState(false);
  const navigate = useNavigate();
  const handleEditClick = () => {
    navigate(`/edit/${astronaut._id}`, { state: astronaut });
  };
  const toggleMissionText = () => {
    setShowFullMission(!showFullMission);
  };
  const missionText =
    astronaut.mission.length > 10 && !showFullMission
      ? `${astronaut.mission.substring(0, 10)}...`
      : astronaut.mission;

  return (
    <div key={astronaut._id} className='astronaut-card'>
      <div className='card-content'>
        <span className='b'>Name: </span>
        {astronaut.name}
      </div>
      <div className='card-content'>
        <span className='b'>Age: </span>
        {astronaut.age}
      </div>
      <div className='card-content'>
        <span className='b'>Mission:</span>
        <span
          className='mission-text'
          onClick={astronaut.mission.length > 10 ? toggleMissionText : ''}
        >
          {missionText}
        </span>
      </div>
      <div className='card-actions'>
        <button className='button' onClick={handleEditClick}>
          Edit
        </button>
        <button className='button delete' onClick={() => deleteAstro(astronaut._id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

AstronautCard.propTypes = {
  astronaut: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    mission: PropTypes.string.isRequired,
  }).isRequired,
};
