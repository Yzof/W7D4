import _ from 'lodash';

export const selectAllPokemon = (state) => (
  _.values(state.entities.pokemon)
);

export const selectPokemonItem = (state, itemId) => (
  state.entities.items[itemId]
);
