export async function getRecipes(query) {
  try {
    const res = await fetch(
      import.meta.env.VITE_RECIPE_URL +
        `${query}&number=100&addRecipeInformation=true&apiKey=${import.meta.env.VITE_API_KEY}`
    );
    return res.json();
  } catch (error) {
    console.log(error);
  }
}

export async function getIngredients() {
  try {
    const res = await fetch(
      import.meta.env.VITE_INGREDIENT_URL +
        `&addRecipeInformation=true&number=15&apiKey=${import.meta.env.VITE_API_KEY}`
    );
    return res.json();
  } catch (error) {
    console.log(error);
  }
}

export async function getIngredientById(id) {
  try {
    const res = await fetch(
      import.meta.env.VITE_INGREDIENT_BY_ID_URL +
        `/${id}/ingredientWidget.json?apiKey=${import.meta.env.VITE_API_KEY}`
    );
    return res.json();
  } catch (error) {
    console.log(error);
  }
}

export async function getRecipeInstructions(id) {
  try {
    const res = await fetch(
      import.meta.env.VITE_INGREDIENT_BY_ID_URL +
        `/${id}/analyzedInstructions?apiKey=${import.meta.env.VITE_API_KEY}`
    );
    return res.json();
  } catch (error) {
    console.log(error);
  }
}
