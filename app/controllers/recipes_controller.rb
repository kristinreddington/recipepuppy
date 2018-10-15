class RecipesController < ApplicationController
  require 'rest-client'
  require 'rails/configuration'

  def search
    query = params["query"]
    api = "http://www.recipepuppy.com/api/?q=#{query}"
    data = JSON.parse(RestClient.get(api))
    render :json => data
  end

  def index
    @recipes = Recipe.all
    render :json => @recipes
  end

  def create
    recipe = Recipe.new(recipe_params)

    if recipe.save
      render :json => recipe
    else
      render :json => {:message => product.errors }, :status => 400
    end
  end

private

  def recipe_params
    params.require(:recipe).permit(:title, :ingredients, :href, :thumbnail)
  end

end
