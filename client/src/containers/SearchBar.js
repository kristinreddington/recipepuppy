import RecipeCard from './RecipeCard'
import React, { Component } from 'react';
import './Home.css';
import { debounce } from 'lodash';

class SearchBar extends Component {
    state = {
        query: '',
        recipes: [],
    }

    fetchRecipes(query) {
        fetch(`http://localhost:3001/search`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ query: query })
        }).then(res => res.json())
          .then(response => {
            this.setState({ recipes: response.results });

        }).catch(error => console.log(error));
    }

    constructor(props) {
        super(props);
        this.fetchRecipes = debounce(this.fetchRecipes, 500);
    }

    onSearchChange(ev) {
        const query = ev.target.value;
        this.setState({ query: query });
        this.fetchRecipes(query);
    }

    saveRecipe(recipe) {
     fetch('http://localhost:3001/recipes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ recipe: recipe })
    }).then(res => res.json())
      .catch(error => console.log(error))
  }

    render() {
        return (
            <div>
                <input
                    type="text" id="searchInput"
                    value={this.state.query}
                    onChange={this.onSearchChange.bind(this)}
                    placeholder="Search for a recipe..."
                />
                <div className="recipeCardHolder">
                  {this.state.recipes.map(recipe =>
                    <RecipeCard key={recipe.id} recipe={recipe} saveRecipe={this.saveRecipe}/>)}
                </div>
              </div>
            );
          }
        }

export default SearchBar;
