<script>
	let map;
	const fetchMap = async () => {
		await fetch(`https://www.bing.com/api/maps/mapcontrol?callbackGetMap&key=${''}`)
			.then((res) => res.json())
			.then(
				(result) => {
					map = { isLoaded: true, items: result.resourceSets };
				},
				// Note: it's important to handle errors here
				// instead of a catch() block so that we don't swallow
				// exceptions from actual bugs in components.
				(error) => {
					map = { isLoaded: true, error };
				}
			);
	};

	// var map;

	// function GetMap() {
	// 	map = new Microsoft.Maps.Map('#myMap', {
	// 		liteMode: true
	// 	});
	// }
	fetchMap();
	$: console.log(map);
</script>

<div>
	<div
		id="myMap"
		style="position:relative;width:100%;min-width:290px;height:600px;background-color:gray"
	/>
</div>
