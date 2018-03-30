import React from 'react';

class PokemonDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(newProps) {
    const newId = newProps.match.params.pokemonId;
    if (newId !== this.props.match.params.pokemonId) {
      this.props.requestSinglePokemon(newId);
    }
  }

  componentDidMount() {
    // debugger;
    const id = this.props.match.params.pokemonId;
    this.props.requestSinglePokemon(id);
  }

  render() {
    debugger;
    let joinedMoves, items;
    if (this.props.pokemon.moves !== undefined) {
      debugger;
      joinedMoves = this.props.pokemon.moves.join(", ");
      // items = this.props.pokemon.item_ids.map((id) => {
      //   let item = this.props.items[id];
      //   return (
      //     <li>
      //       <img src={`${item.image_url}`}></img>
      //     </li>
      //   );
      // });
    }
    return (
      <div>
        <ul className="pokemon-detail">
          <li className="poke-image"><img src={this.props.pokemon.image_url}></img></li>
          <li className="poke-name">{this.props.pokemon.name}</li>
          <li>Type: {this.props.pokemon.poke_type}</li>
          <li>Attack: {this.props.pokemon.attack}</li>
          <li>Defense: {this.props.pokemon.defense}</li>
          <li>Moves: {joinedMoves}</li>
          <ul>Items
            {items}
          </ul>
        </ul>
      </div>
    );

  }
}

export default PokemonDetail;
