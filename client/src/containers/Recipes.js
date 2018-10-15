import React, { Component } from 'react';

class Recipes extends Component {
  constructor() {
    super()
    this.state = {
      recipes: []
    }
  }

  componentWillMount() {
    this.getRecipes()
  }

  getRecipes() {
    fetch('http://localhost:3001/recipes')
      .then(res => res.json())
      .then(recipes => {
        this.setState({ recipes: recipes })
        console.log(recipes)
    }).catch(error => console.log(error))
  }

  render() {
    return (
      <div id="saved-recipes">
     {this.state.recipes.map(recipe =>
       <div key={recipe.id}>
         <h1> <a href={recipe.url}> {recipe.title} </a> </h1>
         <img src={recipe.image} alt={recipe.title} />
         <p>{recipe.ingredients}</p>
        </div>
      )};
      </div>
    )
  }
}

export default Recipes;
