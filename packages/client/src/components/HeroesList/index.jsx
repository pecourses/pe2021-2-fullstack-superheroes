import React, { useState, useEffect } from 'react';
import axios from 'axios';

const axiosInstance = axios.create({ baseURL: 'http://localhost:5000/api' });

function HeroesList () {
  const [heroes, setHeroes] = useState([]);
  const [powers, setPowers] = useState([]);
  // подгрузить силы

  useEffect(() => {
    axiosInstance
      .get('/heroes')
      .then(response => {
        setHeroes(response.data.data);
      })
      .catch(err => console.log('err', err));

    axiosInstance
      .get('/powers')
      .then(response => {
        setPowers(response.data.data);
      })
      .catch(err => console.log('err', err));
  }, []);

  const mapHeroes = ({
    id,
    image,
    nickname,
    originDescription,
    catchPhrase,
    realName,
    superpowers,
    isGood,
  }) => (
    <li key={id}>
      <input type='checkbox' checked={isGood} onChange={() => {}} />
      <img
        style={{ width: '100px', height: '100px', objectFit: 'cover' }}
        src={
          image
            ? `http://localhost:5000/images/${image}`
            : './defaultHeroImage.png'
        }
        alt={nickname}
      />
      {nickname} {realName}
      <p>{originDescription}</p>
      <p>{catchPhrase}</p>
      <ol>
        {superpowers.map(p => (
          <li>{powers[powers.findIndex(i => p === i.id)].description}</li>
        ))}
      </ol>
    </li>
  );

  return <ul>{heroes.map(mapHeroes)}</ul>;
}

export default HeroesList;
