const baseURL = 'https://pokeapi.co/api/v2'

const getPokemons = async (nextPage = '') => {
	try {
		const response = await fetch(`${baseURL}/pokemon/${nextPage}`)
		return response.json();
	} catch (error) {
		return new Error(error)
	}
}

const getOnePokemon = async (url) => {
	try {
		const response = await fetch(url)
		return response.json()
	} catch (error) {
		return new Error(error)
	}
}

export {
	getPokemons,
	getOnePokemon
}
