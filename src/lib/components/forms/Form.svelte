<script lang="ts">
	import { cva } from "class-variance-authority";
	import Button from "../Button.svelte";
	import Input from "./Input.svelte";
	import type { FormField } from "./types";

    export let formItems: FormField[];
    export let displayAsRow: boolean;

    function onSubmit(event: Event) {
    const formData = new FormData(event.target as HTMLFormElement);

    const data: Record<string, string> = {};
    for (const [key, value] of formData) {
      data[key] = value as string;
    }
    console.log(data);
  }

  const formClass = cva("flex gap-4 flex-wrap justify-end", {
    variants: {
      displayAsRow: {
        true: "flex-row",
        false: "flex-col",
      },
    },
  });
</script>

<form on:submit|preventDefault={onSubmit} class={formClass({displayAsRow})}>
    {#each formItems as item}
        <Input {...item}></Input>
    {/each}
    <div class="basis-full h-0"></div>
    <Button type="submit">Search</Button>
</form>