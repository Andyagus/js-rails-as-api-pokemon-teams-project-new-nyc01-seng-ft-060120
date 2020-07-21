document.addEventListener('DOMContentLoaded', (event) => {

	const BASE_URL = "http://localhost:3000"
	const TRAINERS_URL = `${BASE_URL}/trainers`
	const POKEMONS_URL = `${BASE_URL}/pokemons`
	const main = document.querySelector('main')

	const fetchTrainer = () => {
		fetch (TRAINERS_URL)
		.then(resp => resp.json())
		.then(resp => resp.forEach(trainer => renderTrainers(trainer)))
		// .then(resp => resp.forEach(pokemon => renderPokemon(pokemon)))
	};


	const renderTrainers = (trainer) => {
		const addPokemonButton = document.createElement('button')
		addPokemonButton.innerHTML = "Add Pokemon"


		let trainerCard = document.createElement('div')
		trainerCard.className = 'card'
		console.log(trainerCard)
		const id = trainer.id
		trainerCard.innerHTML = `<p> ${trainer.name} </p> `
		trainerCard.append(addPokemonButton)
		main.append(trainerCard)

		//ul 
		let pokeUl = document.createElement('ul')
		trainerCard.append(pokeUl)
		pokemon = trainer.pokemons.map(pokemon => renderPokemon(pokeUl, pokemon))
	
		addPokemonButton.addEventListener('click', e => {
			addPokemon(pokeUl, id)
			console.log("clicked")
		})
	}

	const renderPokemon = (ulCard, pokemon) => {
		pokeCard = document.createElement('li')
		pokeCard.innerHTML = `${pokemon.nickname} <button class="release"> "Release" </button>`
		ulCard.append(pokeCard)
	}

	const addPokemon = function(pokeUl, id){
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
		.then(resp => renderPokemon(pokeUl, resp))
		
	}
		
	fetchTrainer();

})


	// 	const renderList = () => {
	// 	pokemonUl = document.createElement('ul')
	// 	pokemonUl.innerHTML = `${pokemon.join('')} `
	// 	const addPokemonButton = document.createElement('button')
	// 	addPokemonButton.innerHTML = "Add Pokemon"

	// 			// renderPokemon(pokemonUl)

	// }


	// const renderPokemon = (pokemon) => {
	// 	pokemon = pokemon.pokemons.map(pokemon => `<li> ${pokemon.nickname} <button class="release"> "Release" </button> </li>`) 

	// }
