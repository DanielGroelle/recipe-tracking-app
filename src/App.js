import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {
    const [recipes, setRecipes] = useState(RecipeData);

    // TODO: Add the ability for the <RecipeList /> component to list and delete an existing recipe.
    // TODO: Add the ability for the <RecipeCreate /> component to create new recipes.
    const deleteRecipe = (index) => {
        let newRecipes = JSON.parse(JSON.stringify(recipes));
        newRecipes.splice(index, 1);
        setRecipes(newRecipes);
    }

    return (
        <div className="App">
            <header><h1>Delicious Food Recipes</h1></header>
            <RecipeList recipes={recipes} deleteRecipe={deleteRecipe}/>
            <RecipeCreate recipes={recipes} setRecipes={setRecipes} />
        </div>
    );
}

export default App;