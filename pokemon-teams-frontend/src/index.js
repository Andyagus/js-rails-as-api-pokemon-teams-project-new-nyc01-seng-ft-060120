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

		const id = trainer.id
		console.log(id)
		pokemon = trainer.pokemons.map(pokemon => `<li> ${pokemon.nickname} <button class="release"> "Release" </button> </li>`) 
		main = document.querySelector('main')
		card = document.createElement('div')
		card.className = 'card'

		card.innerHTML = `<p> ${trainer.name} </p> `
		main.append(card)
		pokemonUl = document.createElement('ul')
		renderPokemon(pokemonUl)
		
		pokemonUl.innerHTML = `${pokemon.join('')} `

		const addPokemonButton = document.createElement('button')
		addPokemonButton.innerHTML = "Add Pokemon"
		card.append(addPokemonButton)
		card.append(pokemonUl)
	
		addPokemonButton.addEventListener('click', e => {
			addPokemon(id)
		})
	}

	const renderPokemon = (listElement, pokemon) => {

	}


	const addPokemon = function(id){
		fetch(POKEMONS_URL, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			},
			body: JSON.stringify({
				trainer_id: id
			})
		})

		.then(resp => resp.json())
		.then(resp => pokemonUl.innerHTML = (`<li></li>`))
		
	}
		
	fetchTrainer();

})

