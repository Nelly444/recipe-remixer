import {useEffect, useState} from 'react';

function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:5000/recipes')
      .then(response => response.json())
      .then(data => setRecipes(data.recipes))
  }, []);

  return (
  <div style={{ padding: "20px" }}>
    <h1>Recipe Remixer Demo</h1>
    {recipes.map((recipe) => (
      <div key={recipe.id} style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
        <h2>{recipe.title}</h2>
        <p><b>Ingredients:</b> {recipe.ingredients.join(", ")}</p>
        <p><b>Instructions:</b> {recipe.instructions}</p>
      </div>
    ))}
  </div>
);

}

export default App;
