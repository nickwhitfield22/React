const API_URL =
  "https://api.spoonacular.com/food/menuItems/search?query=burger&number=20";

export async function getIngredients() {
  try {
    const res = await fetch(
      API_URL + "&apiKey=41b2ca7d47d646c49fb56e1b3e7411bf"
    );
    return res.json();
  } catch (error) {
    console.log(error);
  }
}
