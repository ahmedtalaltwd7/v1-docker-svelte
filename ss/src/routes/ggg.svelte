<!-- <script>
	const fetchImage = (async () => {
		const response = await fetch("http://localhost:5000/api/v1/auth/gettours")
		const post = response.data.
    return await response.json()
	})()
</script> -->

<script>

	import Header from "./Header.svelte";
	async function getUsers() {
	  let response = await fetch("http://localhost:5000/api/v1/auth/gettours");
	  let users = await response.json();
	  users=users.data.tours;
	  return users;
	}
	const promise = getUsers();
	
  </script>





<div>
	{#await promise}

		<p>Loading...</p>
	{:then user}
		{#each user as user}
		
		
		
			<h2 class="uppercase text-2xl">{user.image}. {user.name}</h2>
	
		{/each}
	{:catch error}
		<p style="color: red">{error.message}</p>
	{/await}
	</div>

	<div class="card w-96 bg-base-100 shadow-xl">
		<figure class="px-10 pt-10">
		  <img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" class="rounded-xl">
		</figure>
		<div class="card-body items-center text-center">
		  <h2 class="card-title">Shoes!</h2>
		  <p>If a dog chews shoes whose shoes does he choose?</p>
		  <div class="card-actions">
			<button class="btn btn-primary">Buy Now</button>
		  </div>
		</div>
	  </div>
	  <Header/>