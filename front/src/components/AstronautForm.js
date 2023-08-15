import React, { useEffect, useState, useRef } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { useCreateAstro } from '../hooks/useCreateAstro';
import { useUpdateAstro } from '../hooks/useUpdateAstro';
import * as yup from 'yup';
import PropTypes from 'prop-types';

const schema = yup.object().shape({
  name: yup.string().required(),
  age: yup.number().min(18).max(80).required(),
  mission: yup.string().min(8).max(32).required(),
});

const AstronautForm = ({ onSubmit }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { state } = useLocation();
  const { createAsto } = useCreateAstro();
  const { editAstro } = useUpdateAstro();
  const name = useRef();
  const age = useRef();
  const mission = useRef();

  const [errors, setErrors] = useState({
    name: false,
    age: false,
    mission: false,
  });

  useEffect(() => {
    if (id) {
      name.current.value = state?.name || '';
      age.current.value = state?.age || '';
      mission.current.value = state?.mission || '';
    }
  }, [state, id]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = {
      name: name.current.value,
      age: Number(age.current.value),
      mission: mission.current.value,
    };
    const isFormValid = await schema.isValid(data, {
      abortEarly: false, 
    });
    // If form is not valid, set errors and return
    if (!isFormValid) {
      schema.validate(data, { abortEarly: false }).catch((err) => {
        const errors = err.inner.reduce((acc, error) => {
          return {
            ...acc,
            [error.path]: true,
          };
        }, {});
        setErrors(errors);
      });
    } else {
      id
        ? editAstro(
            { id, data },
            {
              onSuccess: () => {
                navigate('/');
              },
            },
          )
        : createAsto(data, {
            onSuccess: () => {
              navigate('/');
            },
          });

      onSubmit && onSubmit();
    }
  };

  return (
      <div className='card-body'>
        <form className='card-form' onSubmit={handleSubmit}>
        <p className='card-header'>{id ? 'Update Astronaut' : 'Add Astronaut'}</p>
        <div>
          <div className='card-content'>
            <label>Name:</label>
            <input type='text' name='name' ref={name} required />
            {errors.name && <p className='error'>Name is required</p>}
          </div>
          <div className='card-content'>
            <label>Age:</label>
            <input type='number' name='age' ref={age} required />
            {errors.age && <p className='error'>Age must be between 18 and 80</p>}
          </div>
          <div className='card-content'>
            <label>Mission:</label>
            <input type='text' name='mission' ref={mission} required />
            {errors.mission && <p className='error'>Mission must be between 8 and 32 characters</p>}
          </div>
          <div className='card-actions'>
            <button className='button' type='submit'>{id ? 'Update' : 'Add'}</button>
            <button className = 'button delete' type='button' onClick={() => navigate('/')}>
               Cancel
            </button>
          </div>
          </div>
        </form>
      </div>
  );
};

AstronautForm.propTypes = {
  onSubmit: PropTypes.func,
};

export default AstronautForm;
