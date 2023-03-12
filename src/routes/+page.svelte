<script lang="ts">
	import { Ingredient, type Inventory } from '$lib/data';

	const ingredients = Object.values(Ingredient);

	const inventory: Inventory = {
		Leaf: 0,
		Sand: 0,
		Water: 0,
		Lightning: 0,
		Poison: 0,
		Beetle: 0,
		Tooth: 0,
		Flame: 0,
		Steel: 0,
		Scale: 0,
		Essence: 0,
		Power: 0,
		Shadow: 0,
		Spirit: 0
	};
</script>

<h1>TT2 Alchemy Event Optimizer</h1>

<table>
	<thead>
		<caption>Inventory</caption>
		<tr>
			<td>Ingredient</td>
			<td>Count</td>
		</tr>
	</thead>
	<tbody>
		{#each ingredients as ingredient}
			<tr>
				<td>{ingredient}</td>
				<td>
					<input type="number" bind:value={inventory[ingredient]} />
				</td>
			</tr>
		{/each}
	</tbody>
</table>

<style>
</style>
