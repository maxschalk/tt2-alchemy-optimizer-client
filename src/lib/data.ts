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
}

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
}

export type Result = readonly [ResultType, number];

export type CraftInput = `${Ingredient}&${Ingredient}`;

export type CraftResult = Ingredient | Result;

// export const RECIPES: Record<CraftInput, CraftResult> = {
// 	'Leaf&Leaf': undefined,
// 	'Leaf&Sand': undefined,
// 	'Leaf&Water': undefined,
// 	'Leaf&Lightning': undefined,
// 	'Leaf&Poison': undefined,
// 	'Leaf&Beetle': undefined,
// 	'Leaf&Tooth': undefined,
// 	'Leaf&Flame': undefined,
// 	'Leaf&Steel': undefined,
// 	'Leaf&Scale': undefined,
// 	'Leaf&Essence': undefined,
// 	'Leaf&Power': undefined,
// 	'Leaf&Shadow': undefined,
// 	'Leaf&Spirit': undefined,
// 	'Sand&Leaf': undefined,
// 	'Sand&Sand': undefined,
// 	'Sand&Water': undefined,
// 	'Sand&Lightning': undefined,
// 	'Sand&Poison': undefined,
// 	'Sand&Beetle': undefined,
// 	'Sand&Tooth': undefined,
// 	'Sand&Flame': undefined,
// 	'Sand&Steel': undefined,
// 	'Sand&Scale': undefined,
// 	'Sand&Essence': undefined,
// 	'Sand&Power': undefined,
// 	'Sand&Shadow': undefined,
// 	'Sand&Spirit': undefined,
// 	'Water&Leaf': undefined,
// 	'Water&Sand': undefined,
// 	'Water&Water': undefined,
// 	'Water&Lightning': undefined,
// 	'Water&Poison': undefined,
// 	'Water&Beetle': undefined,
// 	'Water&Tooth': undefined,
// 	'Water&Flame': undefined,
// 	'Water&Steel': undefined,
// 	'Water&Scale': undefined,
// 	'Water&Essence': undefined,
// 	'Water&Power': undefined,
// 	'Water&Shadow': undefined,
// 	'Water&Spirit': undefined,
// 	'Lightning&Leaf': undefined,
// 	'Lightning&Sand': undefined,
// 	'Lightning&Water': undefined,
// 	'Lightning&Lightning': undefined,
// 	'Lightning&Poison': undefined,
// 	'Lightning&Beetle': undefined,
// 	'Lightning&Tooth': undefined,
// 	'Lightning&Flame': undefined,
// 	'Lightning&Steel': undefined,
// 	'Lightning&Scale': undefined,
// 	'Lightning&Essence': undefined,
// 	'Lightning&Power': undefined,
// 	'Lightning&Shadow': undefined,
// 	'Lightning&Spirit': undefined,
// 	'Poison&Leaf': undefined,
// 	'Poison&Sand': undefined,
// 	'Poison&Water': undefined,
// 	'Poison&Lightning': undefined,
// 	'Poison&Poison': undefined,
// 	'Poison&Beetle': undefined,
// 	'Poison&Tooth': undefined,
// 	'Poison&Flame': undefined,
// 	'Poison&Steel': undefined,
// 	'Poison&Scale': undefined,
// 	'Poison&Essence': undefined,
// 	'Poison&Power': undefined,
// 	'Poison&Shadow': undefined,
// 	'Poison&Spirit': undefined,
// 	'Beetle&Leaf': undefined,
// 	'Beetle&Sand': undefined,
// 	'Beetle&Water': undefined,
// 	'Beetle&Lightning': undefined,
// 	'Beetle&Poison': undefined,
// 	'Beetle&Beetle': undefined,
// 	'Beetle&Tooth': undefined,
// 	'Beetle&Flame': undefined,
// 	'Beetle&Steel': undefined,
// 	'Beetle&Scale': undefined,
// 	'Beetle&Essence': undefined,
// 	'Beetle&Power': undefined,
// 	'Beetle&Shadow': undefined,
// 	'Beetle&Spirit': undefined,
// 	'Tooth&Leaf': undefined,
// 	'Tooth&Sand': undefined,
// 	'Tooth&Water': undefined,
// 	'Tooth&Lightning': undefined,
// 	'Tooth&Poison': undefined,
// 	'Tooth&Beetle': undefined,
// 	'Tooth&Tooth': undefined,
// 	'Tooth&Flame': undefined,
// 	'Tooth&Steel': undefined,
// 	'Tooth&Scale': undefined,
// 	'Tooth&Essence': undefined,
// 	'Tooth&Power': undefined,
// 	'Tooth&Shadow': undefined,
// 	'Tooth&Spirit': undefined,
// 	'Flame&Leaf': undefined,
// 	'Flame&Sand': undefined,
// 	'Flame&Water': undefined,
// 	'Flame&Lightning': undefined,
// 	'Flame&Poison': undefined,
// 	'Flame&Beetle': undefined,
// 	'Flame&Tooth': undefined,
// 	'Flame&Flame': undefined,
// 	'Flame&Steel': undefined,
// 	'Flame&Scale': undefined,
// 	'Flame&Essence': undefined,
// 	'Flame&Power': undefined,
// 	'Flame&Shadow': undefined,
// 	'Flame&Spirit': undefined,
// 	'Steel&Leaf': undefined,
// 	'Steel&Sand': undefined,
// 	'Steel&Water': undefined,
// 	'Steel&Lightning': undefined,
// 	'Steel&Poison': undefined,
// 	'Steel&Beetle': undefined,
// 	'Steel&Tooth': undefined,
// 	'Steel&Flame': undefined,
// 	'Steel&Steel': undefined,
// 	'Steel&Scale': undefined,
// 	'Steel&Essence': undefined,
// 	'Steel&Power': undefined,
// 	'Steel&Shadow': undefined,
// 	'Steel&Spirit': undefined,
// 	'Scale&Leaf': undefined,
// 	'Scale&Sand': undefined,
// 	'Scale&Water': undefined,
// 	'Scale&Lightning': undefined,
// 	'Scale&Poison': undefined,
// 	'Scale&Beetle': undefined,
// 	'Scale&Tooth': undefined,
// 	'Scale&Flame': undefined,
// 	'Scale&Steel': undefined,
// 	'Scale&Scale': undefined,
// 	'Scale&Essence': undefined,
// 	'Scale&Power': undefined,
// 	'Scale&Shadow': undefined,
// 	'Scale&Spirit': undefined,
// 	'Essence&Leaf': undefined,
// 	'Essence&Sand': undefined,
// 	'Essence&Water': undefined,
// 	'Essence&Lightning': undefined,
// 	'Essence&Poison': undefined,
// 	'Essence&Beetle': undefined,
// 	'Essence&Tooth': undefined,
// 	'Essence&Flame': undefined,
// 	'Essence&Steel': undefined,
// 	'Essence&Scale': undefined,
// 	'Essence&Essence': undefined,
// 	'Essence&Power': undefined,
// 	'Essence&Shadow': undefined,
// 	'Essence&Spirit': undefined,
// 	'Power&Leaf': undefined,
// 	'Power&Sand': undefined,
// 	'Power&Water': undefined,
// 	'Power&Lightning': undefined,
// 	'Power&Poison': undefined,
// 	'Power&Beetle': undefined,
// 	'Power&Tooth': undefined,
// 	'Power&Flame': undefined,
// 	'Power&Steel': undefined,
// 	'Power&Scale': undefined,
// 	'Power&Essence': undefined,
// 	'Power&Power': undefined,
// 	'Power&Shadow': undefined,
// 	'Power&Spirit': undefined,
// 	'Shadow&Leaf': undefined,
// 	'Shadow&Sand': undefined,
// 	'Shadow&Water': undefined,
// 	'Shadow&Lightning': undefined,
// 	'Shadow&Poison': undefined,
// 	'Shadow&Beetle': undefined,
// 	'Shadow&Tooth': undefined,
// 	'Shadow&Flame': undefined,
// 	'Shadow&Steel': undefined,
// 	'Shadow&Scale': undefined,
// 	'Shadow&Essence': undefined,
// 	'Shadow&Power': undefined,
// 	'Shadow&Shadow': undefined,
// 	'Shadow&Spirit': undefined,
// 	'Spirit&Leaf': undefined,
// 	'Spirit&Sand': undefined,
// 	'Spirit&Water': undefined,
// 	'Spirit&Lightning': undefined,
// 	'Spirit&Poison': undefined,
// 	'Spirit&Beetle': undefined,
// 	'Spirit&Tooth': undefined,
// 	'Spirit&Flame': undefined,
// 	'Spirit&Steel': undefined,
// 	'Spirit&Scale': undefined,
// 	'Spirit&Essence': undefined,
// 	'Spirit&Power': undefined,
// 	'Spirit&Shadow': undefined,
// 	'Spirit&Spirit': undefined
// };