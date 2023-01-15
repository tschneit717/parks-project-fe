<script>
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let label = '';
	export let type = 'text';
	export let placeholder = '';
	export let value = '';
	export let name = '';

	const handleInput = ({ target }) => {
		value = target.value;
	};
</script>

<div class="form-group">
	{#if label}
		<label for={name}>{label}</label>
	{/if}
	<input {name} {type} {placeholder} {value} on:input={handleInput} />
</div>
