export interface TagData {
	name: string;
	speciesFilter?: (species: Species) => boolean;
	moveFilter?: (move: Move) => boolean;
	genericFilter?: (thing: Species | Move | Item | Ability) => boolean;
	speciesNumCol?: (species: Species) => number;
	moveNumCol?: (move: Move) => number;
	genericNumCol?: (thing: Species | Move | Item | Ability) => number;
}

export const Tags: { [id: IDEntry]: TagData } = {
	nonexistent: {
		name: 'Nonexistent',
		genericFilter: thing => !!thing.isNonstandard && thing.isNonstandard !== 'Unobtainable',
	},
};
