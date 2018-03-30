import { connect } from 'react-redux';
import ItemDetail from './item_detail';
import { selectPokemonItem } from '../reducers/selectors';

const mapStateToProps = (state = {}, ownProps) => ({
  item: state.entities.items[ownProps.match.params.itemId]
});

const mapDispatchToProps = (dispatch) => ({
    selectPokemonItem: (id) => dispatch(selectPokemonItem(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemDetail);
