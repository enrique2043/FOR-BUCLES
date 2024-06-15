document.getElementById('promptButton').addEventListener('click', function() {
    const userInput = parseInt(prompt('Ingrese un número:'));
    if (isNaN(userInput) || userInput <= 0) {
        alert('Por favor, ingrese un número válido.');
        return;
    }

    fetch('pokemon.json')
        .then(response => response.json())
        .then(pokemons => {
            const multiplesOfFive = pokemons.filter(pokemon => pokemon.number % 5 === 0 && pokemon.number <= userInput);
            const pokemonList = document.getElementById('pokemonList');
            pokemonList.innerHTML = '';
            multiplesOfFive.forEach(pokemon => {
                const listItem = document.createElement('li');
                listItem.textContent = pokemon.name;
                pokemonList.appendChild(listItem);
            });
        })
        .catch(error => console.error('Error fetching the Pokémon data:', error));
});
