<!-- <!-- <script>
	const fetchImage = (async () => {
		const response = await fetch("http://localhost:5000/api/v1/auth/gettours")
		const post = response.data.
    return await response.json()
	})()
</script> -->

<script>

	import Header from "./Header.svelte";
    let more=true;
    let results=[];
	async function getUsers() {
	  let response = await fetch("http://localhost:5000/api/v1/auth/gettours");
	  results = await response.json();
	 results=results.data.data;
     console.log(results);
	  return results;
	}
	const promise = getUsers();
	
    
//	console.log(response);
	// let ar=loadedPokemon.length;
	// console.log(ar/10);







  </script>





<div>
	{#await promise}

		<p>Loading...</p>
	{:then user}
		{#each user as user}
		
		
		
			<h2 class="uppercase text-2xl">{user.id}. {user.name}</h2>
	
		{/each}
	{:catch error}
		<p style="color: red">{error.message}</p>
	{/await}
	</div> -->