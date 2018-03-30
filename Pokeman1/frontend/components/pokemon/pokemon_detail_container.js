import { connect } from 'react-redux';
import { requestSinglePokemon } from '../../actions/pokemon_actions';
import PokemonDetail from './pokemon_detail';

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.pokemonId;
  return {
    pokemon: state.entities.pokemon[id]
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    requestSinglePokemon: (id) => dispatch(requestSinglePokemon(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonDetail);
