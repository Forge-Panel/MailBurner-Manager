<script lang="ts">
	import '../app.css';
  import PageNav from "../components/PageNav.svelte";
	let { children } = $props();
</script>

<div>
  <PageNav />
  <main>
    {@render children()}
  </main>
</div>
