class TrainersController < ApplicationController
	def index
		trainers = Trainer.all
		render json: trainers, include: [:pokemons]
	end






	
	private
	def pokemon_params
	  params.require(:pokemon).permit(:nickname, :species, :trainer_id)
	end

end
