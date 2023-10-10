async function fetchPokemonData() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10'); // Cambia el límite según tus necesidades
    const data = await response.json();
    return data.results;
  }
  
  async function fetchPokemonDetails(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }
  
  async function displayPokemonList() {
    const pokemonList = await fetchPokemonData();
    const pokemonListContainer = document.getElementById('pokemon-list');
  
    for (const pokemon of pokemonList) {
      const pokemonDetails = await fetchPokemonDetails(pokemon.url);
  
      const listItem = document.createElement('li');
      listItem.textContent = `${pokemonDetails.name} - Tipo(s): ${pokemonDetails.types.map(type => type.type.name).join(', ')}`;
  
      const image = document.createElement('img'); // Creamos un elemento de imagen
      image.src = pokemonDetails.sprites.front_default; // Asignamos la URL de la imagen
      listItem.appendChild(image); // Agregamos la imagen al elemento de la lista
  
      pokemonListContainer.appendChild(listItem);
    }
  }
  
  displayPokemonList();
  