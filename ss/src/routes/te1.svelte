<script>
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	let more=true;
	let loadedPokemon=[];
	let ar;
	let ar3;
	let ar2=10;
	let citrus =[];
	onMount(async () => {
	
		let response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=300");
	  let users = await response.json();
	   loadedPokemon = await users.results.map((users, index) => ({
		name: users.name,
		id: index + 1,
		image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
			index + 1
		}.png`
    }));
	
	 ar=loadedPokemon.length;
	console.log(ar);
	 citrus = loadedPokemon.slice(0, 12);
	 ar3=ar;
	});
//	let ar=loadedPokemon.length;
	

function addNumber() {

 ar2=10;
		// @ts-ignore
		ar2 = [citrus.length  += 12];
		ar3=ar-ar2;
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





let searchTerm = "";
    let filteredPokemon = [];



    $: {
    if(searchTerm){
        filteredPokemon = loadedPokemon.filter( pokeman => pokeman.name.toLowerCase().includes(searchTerm.toLowerCase()));
		more=false;
    }
    else {
        filteredPokemon = [...citrus];
		more=true;
    }
}









  </script>







{#if loadedPokemon.length>0}
<h1>Photo album</h1>
{ar3}

<input class="w-full rounded-md text-lg p-4 border-2 border-gray-200" bind:value={searchTerm} placeholder="Search Pokemon" >
    <div class="py-4 grid gap-4 lg:grid-cols-3  md:grid-cols-2 grid-cols-1">
		{#each filteredPokemon as user}
		
		
		
		<a sveltekit:prefetch class="list-none p-6 bg-gray-100 text-gray-800 text-center rounded-md shadow-sm hover:shadow-md flex flex-col items-center" href={`/ro/${user.id}`} transition:fly>
   
			<img class="h-40 w-40 " src={user.image} alt={user.name} />
			<h2 class="uppercase text-2xl">{user.id}. {user.name}</h2>
		</a>
	
		{/each}
	</div>
 {#if more}
   
 <div class="py-4 grid gap-4 md:grid-cols-1 grid-cols-1 m-auto w-80">
	
	<button on:click={addNumber} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" >
	load more{ar3} Results
	  </button>
 </div>
{:else}
<!-- <h1 class="text-4xl text-center my-8 uppercase s-Uap-jPRb-uiE">there is no results</h1> -->
{/if}
{:else}
<h1 class="text-4xl text-center my-8 uppercase s-Uap-jPRb-uiE">some thing is wrong</h1>

{/if}

<!-- svelte-ignore non-top-level-reactive-declaration -->
