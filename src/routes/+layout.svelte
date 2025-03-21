<script lang="ts">
	import '../app.css';
  import PageNav from "../components/PageNav.svelte";
	let { children } = $props();
</script>

<div class="flex h-screen">
  <PageNav />
  <main class="py-4 px-16">
    {@render children()}
  </main>
</div>