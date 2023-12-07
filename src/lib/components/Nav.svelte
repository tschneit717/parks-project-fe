<script lang="ts">
  let navItems = [
    { name: "Home", href: "/" },
    { name: "Parks", href: "/parks" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];
</script>

<nav>
  <ul class="flex flex-row gap-8">
    {#each navItems as navItem, index}
      <li class={`list-style-none ${index !== navItems.length - 1 ? 'pr-8 border-r border-dark' : ''}`}>
        <a class="text-lg" href={navItem.href}>{navItem.name}</a>
      </li>
    {/each}
  </ul>
</nav>