class Api::PokemonController < ApplicationController
  def show
    @pokemon = Pokemon.find(params[:id])
    render :show
  end


  def index
    @pokemons = Pokemon.all
    render :index
  end

  private

  def pokemon_params
    params.require(:pokemon).permit(:name, :attack, :defense, :poke_type, :image_url)
  end
end
