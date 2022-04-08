<script context="module">
	export const load = async ({ fetch }) => {
		let loadedPokemon=[];
		let response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=300");
	  let users = await response.json();
	   loadedPokemon = await users.results.map((users, index) => ({
		name: users.name,
		id: index + 1,
		image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
			index + 1
		}.png`
    }));
	
	  return {
		props: {
			loadedPokemon
		},
	  }; 
	};
  </script>
  
  <!-- svelte-ignore non-top-level-reactive-declaration -->
  <script>
	 
	let more=true;
	export let loadedPokemon;
	console.log(loadedPokemon.length);
	 let ar=loadedPokemon.length;
	 console.log(ar/10);
	 // @ts-ignore






	 
	 let citrus = loadedPokemon.slice(0, 10);
//	 console.log("real:"+ar); 
	  
//console.log(citrus);
	 function addNumber() {

let ar2;
		$:{ar2 = [citrus.length  += 10];
			citrus = loadedPokemon.slice(0, ar2);
			if(ar2>ar)
			{
				console.log("no more data");
				more=false;
			//	window.location.href = '/top/1';
			}
			else
			{

			}
		console.log(ar2);
		//console.log(citrus);
	}	

}

  </script>

<div>
	{#await citrus}

		<p>Loading...</p>
	{:then citrus}
    <div class="py-4 grid gap-4 md:grid-cols-2 grid-cols-1">
		{#each citrus as user}
		
		
		
		<a  class="list-none p-6 bg-gray-100 text-gray-800 text-center rounded-md shadow-sm hover:shadow-md flex flex-col items-center" href={`/pokemon/${user.id}`}>
   
			<img class="h-40 w-40 " src={user.image} alt={user.name} />
			<h2 class="uppercase text-2xl">{user.id}. {user.name}</h2>
		</a>
	
		{/each}
    </div>
	{:catch error}
		<p style="color: red">{error.message}</p> 
	{/await}

	</div>
 {#if more}
   
 <div class="py-4 grid gap-4 md:grid-cols-2 grid-cols-1">
	
	<button on:click={addNumber} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" >
	load more
	  </button>
 </div>
{:else}
<h1 class="text-4xl text-center my-8 uppercase s-Uap-jPRb-uiE">there is no results</h1>
{/if}