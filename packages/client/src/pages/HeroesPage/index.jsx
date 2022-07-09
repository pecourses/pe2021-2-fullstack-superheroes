import React from 'react';
import HeroesList from '../../components/HeroesList';
import HeroForm from '../../components/HeroForm';

function HeroesPage () {
  return (
    <>
      <HeroForm />
      <HeroesList />
    </>
  );
}

export default HeroesPage;
