<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import '../app.css';
	let { children } = $props();

	let name = "<dine initialer>";
</script>

<Header {name} />
	{@render children()}

