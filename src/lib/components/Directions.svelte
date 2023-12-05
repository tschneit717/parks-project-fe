<script lang="ts">
  export let directionsData: any[];
</script>

<aside class="flex flex-col w-80 bg-light border-r border-dark bg-opacity-70 overflow-y-auto">
  {#if directionsData.length > 0}
    {#each directionsData as direction}
      <div class="flex flex-row justify-between items-center p-4 border-b border-dark">
        <div class="flex flex-col gap-2">
          <p class="text-dark text-sm">{direction.preIntersectionHints[0]}</p>
        </div>
      </div>
    {/each}
  {/if}
</aside>
