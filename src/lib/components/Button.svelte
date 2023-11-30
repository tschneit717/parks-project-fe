<script lang="ts">
    import type { HTMLButtonAttributes } from "svelte/elements";
    import { cva, type VariantProps } from "class-variance-authority";
  
    const button = cva("rounded  text-light", {
      variants: {
        intent: {
          primary: "bg-primary",
          secondary: "bg-secondary",
        },
        size: {
          small: "px-4 py-2",
          medium: "px-6 py-4",
        },
      },
      compoundVariants: [
        { intent: "primary", size: "medium", class: "primaryMedium" },
      ],
    });
  
    interface $$Props extends HTMLButtonAttributes, VariantProps<typeof button> {}
  
    export let intent: $$Props["intent"] = "primary";
    export let size: $$Props["size"] = "medium";
</script>
  
<button {...$$props} class={button({ intent, size, class: $$props.class })}>
    <slot />
</button>