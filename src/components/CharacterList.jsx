import React, { useState, useEffect } from 'react';
import CharacterItem from './CharacterItem';

function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [original, setOriginal] = useState([]);
  const [alive, setAlive] = useState([]);
  const [dead, setDead] = useState([]);
  const [unknow, setUnknow] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((data) => data.json())
      .then((data) => { setCharacters(data.results); setOriginal(data.results); setAlive(data.results); setDead(data.results); setUnknow(data.results); });
  }, []);
  const showOriginalList = () => {
    setCharacters(original)
  }
  const showListAlive = () => {
    const aliveList = alive.filter((character) => character.status === 'Alive');
    setCharacters(aliveList);
  }
  const showListDead = () => {
    const deadList = dead.filter((character) => character.status === 'Dead');
    setCharacters(deadList);
  }
  const showListUnknow = () => {
    const unknowList = unknow.filter((character) => character.status === 'unknown');
    setCharacters(unknowList);
  }
  return (
    <>
      <div className="main-container">
        <div className="button-container">
          <button onClick={showOriginalList} className="btn-original">Lista original</button>
          <button onClick={showListAlive} className="btn-alive">Personajes vivos</button>
          <button onClick={showListDead} className="btn-dead">Personajes muertos</button>
          <button onClick={showListUnknow} className="btn-unknow">Personajes desconocidos</button>
        </div>

        <div className='character-list-container'>
          {characters.map((character) => (
            <CharacterItem key={character.id} props={character} value={character.id} />
          ))}
        </div>
      </div>
    </>
  )
}

export default CharacterList;





