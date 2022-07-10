import React from 'react';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import defaultHeroImage from './defaultHeroImage.png';
import { getPowersAction, getHeroesAction } from '../../actions/actionCreators';

function HeroesList ({
  powersData: { powers },
  heroesData: { isFetching, error, heroes },
  getPowers,
  getHeroes,
}) {
  useEffect(() => {
    getPowers();
  }, []);

  useEffect(() => {
    getHeroes();
  }, [heroes.length]);

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
        src={image ? `http://localhost:5000/images/${image}` : defaultHeroImage}
        alt={nickname}
      />
      {nickname} {realName}
      <p>{originDescription}</p>
      <p>{catchPhrase}</p>
      <ol>
        {powers.length &&
          superpowers.map(p => (
            <li key={p}>
              {powers[powers.findIndex(i => p === i.id)].description}
            </li>
          ))}
      </ol>
    </li>
  );

  return (
    <>
      {isFetching && <div>Data is liading now...</div>}
      {error && <div>ERROR!!!</div>}
      {!error && !isFetching && <ul>{heroes.map(mapHeroes)}</ul>}
    </>
  );
}

const mapStateToProps = ({ powersData, heroesData }) => ({
  powersData,
  heroesData,
});

const mapDispatchToProps = dispatch => ({
  getPowers: () => dispatch(getPowersAction()),
  getHeroes: () => dispatch(getHeroesAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HeroesList);
