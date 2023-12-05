<script lang="ts">
  import Directions from '$lib/components/Directions.svelte';
  import { onMount } from 'svelte';
  import 'bingmaps'

  let map;
  let directionsData: any[] = [];

  const apiKey = import.meta.env.VITE_BING_MAPS_KEY;

  onMount(() => {
    // Load the Bing Maps SDK
    Microsoft.Maps.loadModule('Microsoft.Maps.Directions', () => {
      // Initialize the map
      const map = new Microsoft.Maps.Map('#map', {
        credentials: apiKey,
        center: new Microsoft.Maps.Location(47.6062, -122.3321), // Seattle coordinates
        zoom: 7,
      });

      // Create directions manager
      const directionsManager = new Microsoft.Maps.Directions.DirectionsManager(map);

      // Add waypoints for Seattle and Portland
      directionsManager.addWaypoint(new Microsoft.Maps.Directions.Waypoint({ location: new Microsoft.Maps.Location(47.6062, -122.3321) }));
      directionsManager.addWaypoint(new Microsoft.Maps.Directions.Waypoint({ location: new Microsoft.Maps.Location(45.5155, -122.6793) }));

      // Set the route mode to driving
      directionsManager.setRequestOptions({
        routeMode: Microsoft.Maps.Directions.RouteMode.driving,
      });

      // Display the directions on the map
      directionsManager.setRenderOptions({
        drivingPolylineOptions: {
          strokeColor: 'blue',
          strokeThickness: 5,
        },
      });

      // Calculate directions
      directionsManager.calculateDirections();
      
      // Event listener for directionsUpdated
      Microsoft.Maps.Events.addHandler(directionsManager, 'directionsUpdated', (event: any) => {
        // Get the directions data
        directionsData = event.route[0].routeLegs[0].itineraryItems;

        // Log the directions data to the console for demonstration
        console.log(directionsData);
      });
    });
  });
</script>


<div class="pt-20 h-screen flex flex-row items-stretch w-full">
  <Directions directionsData={directionsData}/>
  <div id="map" class="h-full"></div>
</div>

