<script>
import Ggg from "./loacl.svelte";
import Header from "./Header.svelte";
import { fly } from 'svelte/transition';
// import { goto } from '$app/navigation';

// goto("/login")
</script>
<section in:fly={{y:50,duration:500}} out:fly={{duration:500}}>
<input class="w-full rounded-md text-lg p-4 border-2 border-gray-200"  placeholder="Search Pokemon">

<Ggg/>

<Header/>
</section>
