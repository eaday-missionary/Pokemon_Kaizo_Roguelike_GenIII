export const Rulesets: {[k: string]: ModdedFormatData} = {
	localmovepool: {
		effectType: 'ValidatorRule',
		name: 'Local Movepool',
		desc: 'Allow combinations of individually learnable Generation III moves in local battles.',
		checkCanLearn(move, species, sources, set) {
			// The team builder supplies moves directly; no breeding parents or
			// transfer history are selected. Retain species/generation checks.
			return this.checkCanLearn(move, species, this.allSources(species), set);
		},
	},
};
