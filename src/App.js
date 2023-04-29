import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const [nextUrl, setNextUrl] = useState('');
  const [prevUrl, setPrevUrl] = useState('');
  const [loading, setLoading] = useState(true);
  const initialUrl = 'https://pokeapi.co/api/v2/pokemon';

  async function fetchData() {
    let response = await getAllPokemon(initialUrl);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>

    </div>
  );
}

export default App;

