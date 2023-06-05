import React from "react";
import Recipe from "./Recipe.js"

function RecipeList({recipes, deleteRecipe}) {
  
    // TODO: Display the list of recipes using the structure of table that is provided.
    // TODO: Create at least one additional component that is used by this component.
    // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked

    return (
        <div className="recipe-list">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Cuisine</th>
                        <th>Photo</th>
                        <th>Ingredients</th>
                        <th>Preparations</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {recipes.map((recipe, index)=><tr key={recipe.name}><Recipe recipe={recipe} index={index} deleteRecipe={deleteRecipe}/></tr>)}
                </tbody>
            </table>
        </div>
    );
}

export default RecipeList;