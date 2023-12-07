<script lang="ts">
   export let title: string;
   import logo from '$lib/assets/logo-temp.png'
	import Nav from './Nav.svelte';
   
</script>

<header class="w-full px-4 fixed top-0 left-0 z-10 before:backdrop-blur-sm before:bg-light before:bg-opacity-70 before:absolute before:w-full before:h-full before:block before:left-0 before:z-[-1]">
  <div class="max-w-7xl h-20 mx-auto flex flex-row justify-between items-center">
    <div class="flex flex-row items-center gap-4">
      <!-- TODO Replace This once you have a better logo cropping -->
      <!-- <Icon name="logo"/> -->
      <img src={logo} alt="logo" class="h-20"/>
      <h1 class="font-lobster font-bold text-3xl text-secondary drop-shadow-lg">{title}</h1>
    </div>
    <Nav/>
  </div>
</header>

<style scoped>

</style>