import React from 'react';


const RecipeCard = (props) => (
    <div key={props.recipe.id} className="Product-list-item">
      <h3 href={props.recipe.href} id="recipe-title">{props.recipe.title}</h3>
      <img id="recipe-image" src={props.recipe.thumbnail} alt={props.recipe.title} />
      <p>{props.recipe.ingredients}</p>
      <button value={props.recipe.id} onClick={e => props.saveRecipe(props.recipe)}>♡Save Recipe</button>
    </div>
)

export default RecipeCard;
