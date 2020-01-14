import React from 'react';
import PropTypes from 'prop-types';

const RecipeList = ({Recipes,editRecipe,deleteRecipe }) => {
  
  const del = (evt,id)=> {
    debugger
    evt.preventDefault();
    deleteRecipe(id)
  }
  return (
    <React.Fragment>
      <h2>All Recipes</h2>
      <ul>
        {Recipes.map(Recipe => (
          <li key={Recipe.id}>{Recipe.RecipeText} <span style={{fontSize:"smaller"}}>
            <a href="/#" onClick= {(e)=>{e.preventDefault();deleteRecipe(Recipe.id)}}> (delete, </a> 
            <a href="/#" onClick= {(e)=>{e.preventDefault();editRecipe(Recipe.id)}}> edit) </a> 
            </span>
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
};

RecipeList.propTypes = {
  Recipes: PropTypes.array,
  editTodo: PropTypes.func,
  deleteTodo: PropTypes.func

}
export default RecipeList;
