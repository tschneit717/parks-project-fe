<script>
	import Layout from '../../components/Layout.svelte';
	import Input from '../../components/Input.svelte';

	let name = '';
	let username = '';
	let password = '';
</script>

<Layout>
	<h1>Create an account</h1>
	<form>
		<Input name="name" label="Name" value={name} />
		<Input name="username" label="Username" value={username} />
		<Input name="password" label="Password" value={password} type="password" />
		<Input type="submit" value="Submit" />
	</form>
</Layout>
