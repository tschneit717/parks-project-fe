<script>
	import Hero from "$lib/components/Hero.svelte";
	import Form from "$lib/components/forms/Form.svelte";

const formItems = [
	{
		label: "Where are you coming from?",
		name: "search-start",
		type: "text",
	},
	{
		label: "Where are you going?",
		name: "search-end",
		type: "text",
	},
];
</script>
<Hero title="Let's plan a road trip!" subtitle="" image="/bg-cropped.png">
	<Form {formItems} displayAsRow={true}></Form>
</Hero>