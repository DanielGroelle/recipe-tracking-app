import React, { useState } from "react";

function RecipeCreate({ recipes, setRecipes }) {

    // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
    // TODO: Add the required input and textarea form elements.
    // TODO: Add the required submit and change handlers

    const initialFormContent = {name: "", cuisine: "", photo: "", ingredients: "", preparation: ""};
    const [formContent, setFormContent] = useState(initialFormContent);

    const handleSubmit = (event) => {
        event.preventDefault();
        //making sure all the fields have been filled out
        for(let key in formContent) {
            if (formContent[key] === "") {
                return;
            }
        }
        setRecipes([...recipes, formContent]);
        setFormContent(initialFormContent);
    }

    const handleChange = (event) => {
        let newFormContent = JSON.parse(JSON.stringify(formContent));
        newFormContent[event.target.name] = event.target.value;
        setFormContent(newFormContent);
    }
  
    return (
        <form name="create" onSubmit={handleSubmit}>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <input type="text" name="name" placeholder="Name" onChange={handleChange} value={formContent.name}/>

                        </td>
                        <td>
                            <input type="text" name="cuisine" placeholder="Cuisine" onChange={handleChange} value={formContent.cuisine}/>

                        </td>
                        <td>
                            <input type="url" name="photo" placeholder="URL" onChange={handleChange} value={formContent.photo}/>

                        </td>
                        <td>
                            <textarea name="ingredients" placeholder="Ingredients" onChange={handleChange} value={formContent.ingredients}/>

                        </td>
                        <td>
                            <textarea name="preparation" placeholder="Preparations" onChange={handleChange} value={formContent.preparation}/>
                        </td>
                        <td>
                            <button type="submit">Create</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </form>
    );
}

export default RecipeCreate;