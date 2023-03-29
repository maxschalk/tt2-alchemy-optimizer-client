import type { CraftResult, Ingredient, Result } from './data';

export function craftResultIsResult(cr: CraftResult): cr is Result {
	return Array.isArray(cr);
}

export function craftResultIsIngredient(cr: CraftResult): cr is Ingredient {
	return !Array.isArray(cr);
}
