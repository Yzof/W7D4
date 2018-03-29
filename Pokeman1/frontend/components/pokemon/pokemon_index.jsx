import React from 'react';

class PokemonIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render() {
    return (
      <ul>All Pokemon
        {this.props.pokemon.map( (poke) => (
          <li className="poke-li" key={poke.id}>
            { poke.name }
            <img src={poke.image_url}></img>
          </li>
          )
        )}
      </ul>
    );
  }

}

export default PokemonIndex;
