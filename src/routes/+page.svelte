<script>
	import Map from './../components/Map.svelte';
	import Layout from './../components/Layout.svelte';
	import { getMap } from './../api/map/getMap'
	const map = getMap(123123);

</script>

<Layout />
<Map data={map}/>
