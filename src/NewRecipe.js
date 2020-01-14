import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

function NewRecipe(props) {
  const [Recipe, setRecipe] = useState(props.nextRecipe);

  const handleSubmit = evt => {
    if (Recipe.RecipeText === "") {
      return;
    }
    props.addRecipe(Recipe);
    evt.preventDefault();
  };
  const cancel = evt => {
    evt.preventDefault();
    props.setNewRecipe({ id: "", RecipeText: "" })
  };

  
  useEffect(() => setRecipe({ ...props.nextRecipe }), [props.nextRecipe]);

  const onChange = evt => {
    const val = evt.target.value;
    Recipe.RecipeText = val;
    setRecipe({ ...Recipe });
  };
  const title = Recipe.id==="" ?"Create new Recipe" : "Edit Recipe"
  return (
    <div>
      <h4>{title}</h4>
      <form onSubmit={handleSubmit}>
        <input value={Recipe.RecipeText} onChange={onChange} />
        <div style={{ marginTop: 5 }}>
          <button className="btn btn-info btn">Save</button>&nbsp;
          <button onClick={cancel} className="btn btn-info">Clear</button>
        </div>
      </form>

      {Recipe.id !== "" && <p>Editing Recipe</p>}
    </div>
  );
}

NewRecipe.propTypes = {
  setNewRecipe: PropTypes.func,
  nextRecipe: PropTypes.object,
  addRecipe: PropTypes.func,
  title: PropTypes.string
};

export default NewRecipe;
