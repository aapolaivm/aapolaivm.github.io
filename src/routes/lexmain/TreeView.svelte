<script context="module">
	// retain module scoped expansion state for each tree node
	const _expansionState = {
	//	 treeNodeId: expanded <boolean>
	}
</script>
<script>
	// import { slide } from 'svelte/transition'
	export let tree
	const {label, children, id} = tree

	let expanded = _expansionState[label] || false
	const toggleExpansion = () => {
		expanded = _expansionState[label] = !expanded
	}
	$: arrowDown = expanded
</script>

<ul><!-- transition:slide -->
	<li>
		{#if children}
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<span on:click={toggleExpansion}>
				<span class="arrow" class:arrowDown>&#x25b6</span>
				{label}
			</span>
			{#if expanded}
				{#each children as child}
					<svelte:self tree={child} />
				{/each}
			{/if}
		{:else}
			<span>
				<span class="no-arrow"/>
				{#if id}
				<a href="/lexmain/{id}">{label}</a>
				{:else}
				<a href="/lexmain/tyhja">{label}</a>
				{/if}
			</span>
		{/if}
	</li>
</ul>

<style>
	ul {
		margin: 0;
		list-style: none;
		padding-left: 1.2rem; 
		user-select: none;
	}
	.no-arrow { padding-left: 1.0rem; }
	.arrow {
		cursor: pointer;
		display: inline-block;
		/* transition: transform 200ms; */
	}
	.arrowDown { transform: rotate(90deg); }
</style>
