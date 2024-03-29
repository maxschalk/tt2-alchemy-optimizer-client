export enum Ingredient {
	Leaf = 'Leaf',
	Sand = 'Sand',
	Water = 'Water',
	Lightning = 'Lightning',
	Poison = 'Poison',
	Beetle = 'Beetle',
	Tooth = 'Tooth',
	Flame = 'Flame',
	Steel = 'Steel',
	Scale = 'Scale',
	Essence = 'Essence',
	Power = 'Power',
	Shadow = 'Shadow',
	Spirit = 'Spirit'
};

export type Inventory = Record<Ingredient, number>;

export enum ResultType {
	'Currency' = 'Currency',
	'Pet Eggs' = 'Pet Eggs',
	'Skill Point' = 'Skill Point',
	'Common Equipment' = 'Common Equipment',
	'Rare Equipment' = 'Rare Equipment',
	'Legendary Equipment' = 'Legendary Equipment',
	'Mythic Equipment' = 'Mythic Equipment',
	'Event Equipment' = 'Event Equipment',
	'Crafting Shard' = 'Crafting Shard',
	'Perk' = 'Perk',
	'Avatar' = 'Avatar',
	'Raid Card' = 'Raid Card',
	'Raid Wildcard' = 'Raid Wildcard',
	'Hero Weapon' = 'Hero Weapon',
	'Fortune Weapon' = 'Fortune Weapon',
	'Hero Scroll' = 'Hero Scroll',
	'Fortune Scroll' = 'Fortune Scroll',
	'Dust' = 'Dust'
};

export type Result = readonly [ResultType, number];

export type CraftInput = `${Ingredient}&${Ingredient}`;

export type CraftResult = Ingredient | Result;

export const RECIPES: Record<CraftInput, CraftResult> = {
	'Leaf&Leaf': [ResultType.Currency, 10],
	'Leaf&Sand': Ingredient.Water,
	'Leaf&Water': Ingredient.Lightning,
	'Leaf&Lightning': Ingredient.Beetle,
	'Leaf&Poison': [ResultType["Raid Card"], 10],
	'Leaf&Beetle': [ResultType.Currency, 26],
	'Leaf&Tooth': [ResultType.Currency, 38],
	'Leaf&Flame': [ResultType.Dust, 430],
	'Leaf&Steel': [ResultType.Currency, 49],
	'Leaf&Scale': [ResultType.Dust, 820],
	'Leaf&Essence': [ResultType.Currency, 84],
	'Leaf&Power': Ingredient.Spirit,
	'Leaf&Shadow': [ResultType["Raid Wildcard"], 47],
	'Leaf&Spirit': [ResultType["Skill Point"], 1],

	'Sand&Leaf': Ingredient.Water,
	'Sand&Sand': [ResultType.Currency, 10],
	'Sand&Water': [ResultType["Common Equipment"], 15],
	'Sand&Lightning': Ingredient.Poison,
	'Sand&Poison': [ResultType["Rare Equipment"], 10],
	'Sand&Beetle': [ResultType["Pet Eggs"], 4],
	'Sand&Tooth': [ResultType["Crafting Shard"], 4],
	'Sand&Flame': [ResultType.Currency, 43],
	'Sand&Steel': [ResultType.Currency, 49],
	'Sand&Scale': [ResultType.Currency, 82],
	'Sand&Essence': Ingredient.Shadow,
	'Sand&Power': [ResultType["Hero Weapon"], 2],
	'Sand&Shadow': [ResultType["Raid Wildcard"], 47],
	'Sand&Spirit': [ResultType["Rare Equipment"], 10],

	'Water&Leaf': Ingredient.Lightning,
	'Water&Sand': [ResultType["Common Equipment"], 15],
	'Water&Water': [ResultType.Currency, 20],
	'Water&Lightning': [ResultType["Event Equipment"], 1], // TODO: Mad Scientist Sword
	'Water&Poison': [ResultType["Raid Card"], 19],
	'Water&Beetle': Ingredient.Tooth,
	'Water&Tooth': [ResultType.Perk, 3],
	'Water&Flame': [ResultType.Perk, 5],
	'Water&Steel': [ResultType.Currency, 54],
	'Water&Scale': [ResultType.Currency, 87],
	'Water&Essence': [ResultType["Hero Scroll"], 1],
	'Water&Power': [ResultType["Skill Point"], 1],
	'Water&Shadow': [ResultType["Raid Wildcard"], 49],
	'Water&Spirit': [ResultType.Currency, 105],

	'Lightning&Leaf': Ingredient.Beetle,
	'Lightning&Sand': Ingredient.Poison,
	'Lightning&Water': [ResultType["Event Equipment"], 1], // TODO: Mad Scientist Sword
	'Lightning&Lightning': [ResultType.Currency, 32],
	'Lightning&Poison': Ingredient.Flame,
	'Lightning&Beetle': Ingredient.Steel,
	'Lightning&Tooth': [ResultType["Event Equipment"], 1], // TODO: Mask of Madness
	'Lightning&Flame': [ResultType["Event Equipment"], 1], // TODO: Lab Coat
	'Lightning&Steel': [ResultType["Event Equipment"], 1], // TODO: Molecularization
	'Lightning&Scale': [ResultType.Currency, 87],
	'Lightning&Essence': [ResultType.Currency, 95],
	'Lightning&Power': [ResultType.Currency, 100],
	'Lightning&Shadow': [ResultType["Raid Wildcard"], 52],
	'Lightning&Spirit': [ResultType.Currency, 111],

	'Poison&Leaf': [ResultType["Raid Card"], 16],
	'Poison&Sand': [ResultType["Rare Equipment"], 2],
	'Poison&Water': [ResultType["Raid Card"], 19],
	'Poison&Lightning': Ingredient.Flame,
	'Poison&Poison': [ResultType.Currency, 42],
	'Poison&Beetle': [ResultType["Event Equipment"], 1], // TODO: Master of Elements
	'Poison&Tooth': [ResultType["Crafting Shard"], 6],
	'Poison&Flame': [ResultType.Dust, 590],
	'Poison&Steel': [ResultType["Raid Card"], 40],
	'Poison&Scale': [ResultType.Dust, 980],
	'Poison&Essence': [ResultType["Fortune Scroll"], 1],
	'Poison&Power': [ResultType.Currency, 105],
	'Poison&Shadow': [ResultType["Raid Card"], 68],
	'Poison&Spirit': [ResultType.Currency, 116],

	'Beetle&Leaf': [ResultType.Currency, 26],
	'Beetle&Sand': [ResultType["Pet Eggs"], 4],
	'Beetle&Water': Ingredient.Tooth,
	'Beetle&Lightning': Ingredient.Steel,
	'Beetle&Poison': [ResultType["Event Equipment"], 1], // TODO: Master of Elements
	'Beetle&Beetle': [ResultType.Currency, 42],
	'Beetle&Tooth': [ResultType["Pet Eggs"], 9],
	'Beetle&Flame': [ResultType.Dust, 590],
	'Beetle&Steel': [ResultType["Pet Eggs"], 10],
	'Beetle&Scale': [ResultType.Dust, 980],
	'Beetle&Essence': [ResultType["Pet Eggs"], 16],
	'Beetle&Power': [ResultType["Fortune Weapon"], 2],
	'Beetle&Shadow': [ResultType["Pet Eggs"], 18],
	'Beetle&Spirit': [ResultType["Pet Eggs"], 19],

	'Tooth&Leaf': [ResultType.Currency, 38],
	'Tooth&Sand': [ResultType["Crafting Shard"], 4],
	'Tooth&Water': [ResultType.Perk, 3],
	'Tooth&Lightning': [ResultType["Event Equipment"], 1], // TODO: Mask of Madness
	'Tooth&Poison': [ResultType["Crafting Shard"], 6],
	'Tooth&Beetle': [ResultType["Pet Eggs"], 9],
	'Tooth&Tooth': [ResultType.Currency, 66],
	'Tooth&Flame': Ingredient.Scale,
	'Tooth&Steel': Ingredient.Essence,
	'Tooth&Scale': [ResultType.Avatar, 1], // TODO: Fallback 110 Currency
	'Tooth&Essence': [ResultType.Currency, 112],
	'Tooth&Power': [ResultType["Crafting Shard"], 14],
	'Tooth&Shadow': [ResultType.Currency, 122],
	'Tooth&Spirit': [ResultType["Crafting Shard"], 16],

	'Flame&Leaf': [ResultType.Dust, 430],
	'Flame&Sand': [ResultType.Currency, 43],
	'Flame&Water': [ResultType.Perk, 5],
	'Flame&Lightning': [ResultType["Event Equipment"], 1], // TODO: Lab Coat
	'Flame&Poison': [ResultType.Dust, 590],
	'Flame&Beetle': [ResultType.Dust, 590],
	'Flame&Tooth': Ingredient.Scale,
	'Flame&Flame': [ResultType.Currency, 76],
	'Flame&Steel': Ingredient.Power,
	'Flame&Scale': [ResultType.Currency, 115],
	'Flame&Essence': [ResultType.Dust, 1170],
	'Flame&Power': [ResultType["Skill Point"], 1],
	'Flame&Shadow': [ResultType.Dust, 1270],
	'Flame&Spirit': [ResultType.Currency, 133],

	'Steel&Leaf': [ResultType.Currency, 49],
	'Steel&Sand': [ResultType.Currency, 49],
	'Steel&Water': [ResultType.Currency, 54],
	'Steel&Lightning': [ResultType["Event Equipment"], 1], // TODO: Molecularization
	'Steel&Poison': [ResultType["Raid Card"], 40],
	'Steel&Beetle': [ResultType["Pet Eggs"], 10],
	'Steel&Tooth': Ingredient.Essence,
	'Steel&Flame': Ingredient.Power,
	'Steel&Steel': [ResultType.Currency, 88],
	'Steel&Scale': [ResultType.Dust, 1210],
	'Steel&Essence': [ResultType["Legendary Equipment"], 1], // TODO: Toga Storm
	'Steel&Power': [ResultType["Legendary Equipment"], 1],
	'Steel&Shadow': [ResultType["Raid Wildcard"], 66],
	'Steel&Spirit': [ResultType["Legendary Equipment"], 1], // TODO: Head in the Clouds

	'Scale&Leaf': [ResultType.Dust, 820],
	'Scale&Sand': [ResultType.Currency, 82],
	'Scale&Water': [ResultType.Currency, 87],
	'Scale&Lightning': [ResultType.Currency, 87],
	'Scale&Poison': [ResultType.Dust, 980],
	'Scale&Beetle': [ResultType.Dust, 980],
	'Scale&Tooth': [ResultType.Avatar, 1], // TODO: Fallback 110 Currency
	'Scale&Flame': [ResultType.Currency, 115],
	'Scale&Steel': [ResultType.Dust, 1210],
	'Scale&Scale': [ResultType.Currency, 154],
	'Scale&Essence': [ResultType.Dust, 1560],
	'Scale&Power': [ResultType["Hero Weapon"], 3],
	'Scale&Shadow': [ResultType.Dust, 1660],
	'Scale&Spirit': [ResultType["Skill Point"], 2],

	'Essence&Leaf': [ResultType.Currency, 84],
	'Essence&Sand': Ingredient.Shadow,
	'Essence&Water': [ResultType["Hero Scroll"], 1],
	'Essence&Lightning': [ResultType.Currency, 95],
	'Essence&Poison': [ResultType["Fortune Scroll"], 1],
	'Essence&Beetle': [ResultType["Pet Eggs"], 16],
	'Essence&Tooth': [ResultType.Currency, 122],
	'Essence&Flame': [ResultType.Dust, 1170],
	'Essence&Steel': [ResultType["Legendary Equipment"], 1], // TODO: Toga Storm
	'Essence&Scale': [ResultType.Dust, 1560],
	'Essence&Essence': [ResultType.Currency, 158],
	'Essence&Power': [ResultType["Hero Scroll"], 2],
	'Essence&Shadow': [ResultType.Currency, 168],
	'Essence&Spirit': [ResultType["Fortune Scroll"], 2],

	'Power&Leaf': Ingredient.Spirit,
	'Power&Sand': [ResultType["Hero Weapon"], 2],
	'Power&Water': [ResultType["Skill Point"], 1],
	'Power&Lightning': [ResultType.Currency, 100],
	'Power&Poison': [ResultType.Currency, 105],
	'Power&Beetle': [ResultType["Fortune Weapon"], 2],
	'Power&Tooth': [ResultType["Crafting Shard"], 14],
	'Power&Flame': [ResultType["Skill Point"], 1],
	'Power&Steel': [ResultType["Legendary Equipment"], 1],
	'Power&Scale': [ResultType["Hero Weapon"], 3],
	'Power&Essence': [ResultType["Hero Scroll"], 2],
	'Power&Power': [ResultType.Currency, 168],
	'Power&Shadow': [ResultType.Currency, 173],
	'Power&Spirit': [ResultType["Fortune Weapon"], 3],

	'Shadow&Leaf': [ResultType["Raid Wildcard"], 47],
	'Shadow&Sand': [ResultType["Raid Wildcard"], 47],
	'Shadow&Water': [ResultType["Raid Wildcard"], 49],
	'Shadow&Lightning': [ResultType["Raid Wildcard"], 52],
	'Shadow&Poison': [ResultType["Raid Card"], 68],
	'Shadow&Beetle': [ResultType["Pet Eggs"], 18],
	'Shadow&Tooth': [ResultType.Currency, 122],
	'Shadow&Flame': [ResultType.Dust, 1270],
	'Shadow&Steel': [ResultType["Raid Wildcard"], 66],
	'Shadow&Scale': [ResultType.Dust, 1660],
	'Shadow&Essence': [ResultType.Currency, 168],
	'Shadow&Power': [ResultType.Currency, 173],
	'Shadow&Shadow': [ResultType.Currency, 178],
	'Shadow&Spirit': [ResultType["Mythic Equipment"], 1], // TODO: Wings of Icarus

	'Spirit&Leaf': [ResultType["Skill Point"], 1],
	'Spirit&Sand': [ResultType["Rare Equipment"], 10],
	'Spirit&Water': [ResultType.Currency, 105],
	'Spirit&Lightning': [ResultType.Currency, 111],
	'Spirit&Poison': [ResultType.Currency, 116],
	'Spirit&Beetle': [ResultType["Pet Eggs"], 19],
	'Spirit&Tooth': [ResultType["Crafting Shard"], 16],
	'Spirit&Flame': [ResultType.Currency, 133],
	'Spirit&Steel': [ResultType["Legendary Equipment"], 1], // TODO: Head in the Clouds
	'Spirit&Scale': [ResultType["Skill Point"], 2],
	'Spirit&Essence': [ResultType["Fortune Scroll"], 2],
	'Spirit&Power': [ResultType["Fortune Weapon"], 3],
	'Spirit&Shadow': [ResultType["Mythic Equipment"], 1], // TODO: Wings of Icarus
	'Spirit&Spirit': [ResultType.Currency, 190]
};
