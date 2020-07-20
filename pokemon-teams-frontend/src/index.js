document.addEventListener('DOMContentLoaded', (event) => {

	const BASE_URL = "http://localhost:3000"
	const TRAINERS_URL = `${BASE_URL}/trainers`
	const POKEMONS_URL = `${BASE_URL}/pokemons`

	const fetchTrainer = () => {
		fetch (TRAINERS_URL)
		.then(resp => resp.json())
		.then(resp => resp.forEach(trainer => renderTrainers(trainer)))
	};

	// const fetchPokemon = () => {
	// 	fetch (POKEMON_URL)
	// 	.then(resp => resp.json())
	// 	.then(resp => resp.forEach(pokemon => renderPokemons(pokemon)))
	// }


	const renderTrainers = (trainer) => {
		pokemon = trainer.pokemons.map(pokemon => `<li> ${pokemon.nickname} <button class="release"> "Release" </button> </li>`) 
		main = document.querySelector('main')
		console.log(trainer)
		card = document.createElement('div')
		card.className = 'card'

		card.innerHTML = `<p> ${trainer.name} </p> `
		main.append(card)
		pokemonUl = document.createElement('ul')
		pokemonUl.innerHTML = `${pokemon.join('')} `

		const addPokemonButton = document.createElement('button')
		addPokemonButton.innerHTML = "Add Pokemon"
		card.append(addPokemonButton)
		
		card.append(pokemonUl)
	
	}

	fetchTrainer();


});

// <div class="card" data-id="1"><p>Prince</p>
//   <button data-trainer-id="1">Add Pokemon</button>
//   <ul>
//     <li>Jacey (Kakuna) <button class="release" data-pokemon-id="140">Release</button></li>
//     <li>Zachariah (Ditto) <button class="release" data-pokemon-id="141">Release</button></li>
//     <li>Mittie (Farfetch'd) <button class="release" data-pokemon-id="149">Release</button></li>
//     <li>Rosetta (Eevee) <button class="release" data-pokemon-id="150">Release</button></li>
//     <li>Rod (Beedrill) <button class="release" data-pokemon-id="151">Release</button></li>
//   </ul>
// </div>