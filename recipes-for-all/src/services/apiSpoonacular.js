const RECIPE_URL = "https://api.spoonacular.com/recipes/complexSearch?query=";
const INGREDIENT_URL =
  "https://api.spoonacular.com/food/ingredients/search?query=ginger";
const INGREDIENT_BY_ID_URL = "https://api.spoonacular.com/recipes";

export async function getRecipes(query) {
  try {
    const res = await fetch(
      RECIPE_URL +
        `${query}&number=20&addRecipeInformation=true&apiKey=41b2ca7d47d646c49fb56e1b3e7411bf`
    );
    return res.json();
  } catch (error) {
    console.log(error);
  }
}

export async function getIngredients() {
  try {
    const res = await fetch(
      INGREDIENT_URL +
        "&addRecipeInformation=true&number=15&apiKey=41b2ca7d47d646c49fb56e1b3e7411bf"
    );
    return res.json();
  } catch (error) {
    console.log(error);
  }
}

export async function getIngredientById(id) {
  try {
    const res = await fetch(
      INGREDIENT_BY_ID_URL +
        `/${id}/ingredientWidget.json?apiKey=41b2ca7d47d646c49fb56e1b3e7411bf`
    );
    return res.json();
  } catch (error) {
    console.log(error);
  }
}

export async function getRecipeInstructions(id) {
  try {
    const res = await fetch(
      INGREDIENT_BY_ID_URL +
        `/${id}/analyzedInstructions?apiKey=41b2ca7d47d646c49fb56e1b3e7411bf`
    );
    return res.json();
  } catch (error) {
    console.log(error);
  }
}
