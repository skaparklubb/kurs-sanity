<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import '../app.css';
	let { children } = $props();

	let name = "hpe";
</script>

<Header {name} />
	{@render children()}

