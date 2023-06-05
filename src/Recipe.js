import React from "react";

function Recipe({recipe, index, deleteRecipe}) {
    return (
        <React.Fragment>
            <td>{recipe.name}</td>
            <td>{recipe.cuisine}</td>
            <td><img src={recipe.photo} alt={recipe.name} style={{objectFit: "scale-down", width: "100%", height: "100%"}}></img></td>
            <td className="content_td"><p>{recipe.ingredients}</p></td>
            <td className="content_td"><p>{recipe.preparation}</p></td>
            <td><button name="delete" onClick={() => {deleteRecipe(index)}}>Delete</button></td>
        </React.Fragment>
    );
}

export default Recipe;