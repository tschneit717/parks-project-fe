<script>
	import Footer from '$lib/components/Footer.svelte';
import Header from '$lib/components/Header.svelte';
  import './../lib/styles/main.css'
</script>

<div class="absolute max-h-screen max-w-screen w-full h-full flex flex-col justify-center items-stretch">
  <Header title="RoadTripper" />
  <slot></slot>
  <Footer/>
</div>