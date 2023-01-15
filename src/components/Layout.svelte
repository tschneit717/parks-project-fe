<script>
	import 'papercss';
	import Header from './Header.svelte';
	import Nav from './Nav.svelte';
</script>

<main>
	<Header />
	<Nav />
	<slot />
</main>

<style>
	main {
		padding: 100px;
	}
</style>
