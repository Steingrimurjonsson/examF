import React, {useState} from "react";

import RecipeList from "./RecipeList"
import NewRecipe from "./NewRecipe"
import uuid from "uuid/v1";


function AppR() {
      const initialData = [
        { id: uuid(), RecipeText: "Pasta with tomato" },
        { id: uuid(), RecipeText: "Burger and fries" },
        { id: uuid(), RecipeText: "Steak and potatoes" },
        { id: uuid(), RecipeText: "Fish and fries" },
        { id: uuid(), RecipeText: "Salad" },
        { id: uuid(), RecipeText: "Pizza with pepperoni" },
        { id: uuid(), RecipeText: "Hotdog" }
      ]
      const [Recipes, setRecipes] = useState(initialData);
      const [newRecipe, setNewRecipe] = useState({ id: "", RecipeText: "" });
    

      console.log(Recipes)
    
      const addRecipe = Recipe => {
        if (Recipe.id === "") { //Indicates a new object
          Recipe.id = uuid();
          Recipes.push(Recipe);
        } else {//if id != "", it must be an existing Recipe. Find it and add changes
          let RecipeToEdit = Recipes.find(t => t.id === Recipe.id);
          RecipeToEdit.RecipeText = Recipe.RecipeText;
        }
        setRecipes([...Recipes]);
        setNewRecipe({id:"",RecipeText:""})
      };
    
      const deleteRecipe = (id) => {
        if(newRecipe.id !==""){  //Cannot delete while we are editing
          return;
        }
        const newRecipeList = Recipes.filter(Recipe=> Recipe.id !== id);
        setRecipes([...newRecipeList]);
      }
    
      const editRecipe = (id) => {
        const RecipeToEdit = Recipes.find(Recipe => Recipe.id === id);
        setNewRecipe({...RecipeToEdit})
      }
      
      
      return (
        <div className="container outer">
          <h2 style={{ textAlign: "center", marginBottom:25 }}>
            Recipe List
       
          </h2>
    
          <div className="row">
            <div className="col-6 allTodos">
              <RecipeList Recipes={Recipes} deleteRecipe={deleteRecipe} editRecipe={editRecipe} />
            </div>
            <div className="col-5 new-todo">
              <NewRecipe           
                addRecipe={addRecipe}
                nextRecipe={newRecipe}    
                setNewRecipe={setNewRecipe}        
              />
            </div>
          </div>
      
        </div>
      );
    }
  
    
export default AppR;