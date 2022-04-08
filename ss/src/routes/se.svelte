<script context="module">
	export const load = async ({ fetch }) => {
		let loadedPokemon=[];
		let response = await fetch("http://localhost:5000/api/v1/auth/gettours");
	  
	   
	
	   if (response.ok) {
                        const data = await response.json();
						loadedPokemon = data.data.tours;
                        return {
                                props: { loadedPokemon }
                        };
                }

				const { message } = await response.json();
                return {
                        error: new Error(message)
                };
	};
  </script>
  
  <!-- svelte-ignore non-top-level-reactive-declaration -->
  <script>
export let loadedPokemon;

	let more=true;
	
	//console.log(loadedPokemon.length);
	 let ar=loadedPokemon.length;
	// console.log(ar/10);
	 // @ts-ignore
	 
	 let citrus = loadedPokemon.slice(0, 3);
//	 console.log("real:"+ar); 
	  
//console.log(citrus);
	 function addNumber() {

let ar2;
		$:{ar2 = [citrus.length  += 3];
			citrus = loadedPokemon.slice(0, ar2);
			if(ar2>ar)
			{
				console.log("no more data");
				more=false;
			}
			else
			{

			}
	//	console.log(ar2);
	//	console.log(citrus);
	}	

}













  </script>

<div>


	{#await loadedPokemon}

		<p>Loading...</p>
	{:then loadedPokemon}
	
		{#each citrus as user}
		
		
		
			<h2 class="uppercase text-2xl">{user.image}. {user.name}</h2>
	
		{/each}
	{:catch error}
		<p style="color: red">{error.message}</p>
	{/await}
	</div>
 {#if more}
   
 <button on:click={addNumber} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
	load more
	  </button>


	
{:else}
<h1 class="text-4xl text-center my-8 uppercase s-Uap-jPRb-uiE">there is no results</h1>
{/if}