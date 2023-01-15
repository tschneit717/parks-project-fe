<script>
	import { user } from '../store'
	console.log(user)
</script>

<nav class="border fixed">
	<div class="nav-brand">
		<h4><a href="/">RoadTripper</a></h4>
	</div>
	<div class="collapsible">
		<input id="collapsible2" type="checkbox" name="collapsible2" />
		<label for="collapsible2">
			<div class="bar1" />
			<div class="bar2" />
			<div class="bar3" />
		</label>
		<div class="collapsible-body">
			<ul class="inline">
				<li><a href="/about">About</a></li>
				{#if !user}
					<li><a href="/sign-up">Sign Up</a></li>
					<li><a href="/sign-in">Sign In</a></li>
				{:else} 
					<li><a href="/profile">Profile</a></li>
				{/if}
			</ul>
		</div>
	</div>
</nav>
