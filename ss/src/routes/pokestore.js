import { writable } from 'svelte/store';

export const pokemon = writable([]);

let loaded = false;
let loadedPokemon = [];
export const fetchPokemon = async () => {
try {
	if (loaded) return;
	const url = `https://pokeapi.co/api/v2/pokemon?limit=150`;
	const res = await fetch(url);
	const data = await res.json();
	 loadedPokemon = data.results.map((data, index) => ({
		name: data.name,
		id: index + 1,
		image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
			index + 1
		}.png`
	}));

}

// eslint-disable-next-line no-empty
catch(err) {
	console.log("twd"+err); 
}



	

	pokemon.set(loadedPokemon);
	loaded = true;
};