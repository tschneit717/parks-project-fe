<script>
  /**
	 * @type {string}
	 */
   export let title;

   const routes = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
   ]
</script>

<header class="w-full flex flex-row justify-between">
  <div>
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
</header>

<style scoped>

</style>