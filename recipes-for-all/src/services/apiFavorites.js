import supabase from "./supabase";

export async function addFavorite({ id, title, image, imageType }) {
  const { data: favorites, error } = await supabase
    .from("favorites")
    .insert({ id, title, image, imageType });

  if (error) throw new Error("Favorite could not be added.");

  return { favorites };
}
