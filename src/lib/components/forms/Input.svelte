<script lang="ts">
    export let label: string;
    export let name: string;
    export let type: string;

</script>

<div class="flex flex-col gap-2 flex-grow">
    <label for={name} class="text-lg text-dark">
        {label}
    </label>
    <input type={type} {name} class="rounded py-2 px-4 text-lg text-dark"/>
</div>
