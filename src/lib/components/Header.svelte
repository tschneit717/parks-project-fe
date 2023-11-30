<script>
  /**
	 * @type {string}
	 */
   export let title;
	import Icon from './Logo.svelte';
    import logo from '/logo.svg?raw'
   const routes = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
   ]
</script>

<header class="w-full px-4 fixed top-0 left-0 z-10 before:backdrop-blur-sm before:bg-light before:bg-opacity-40 before:absolute before:w-full before:h-full before:block before:left-0 before:z-[-1]">
  <div class="max-w-7xl h-12 mx-auto flex flex-row justify-between items-center">
    <div>
      <Icon name="logo"/>
      <h1>{title}</h1>
    </div>
    <nav>
      <ul class="flex flex-row gap-4 justify-end list-style-none">
        {#each routes as route}
        <li>
          <a href="{route.path}">{route.name}</a>
        </li>
        {/each}
      </ul>
    </nav>
  </div>
</header>

<style scoped>

</style>