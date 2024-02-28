import supabase from "./supabase";

export async function addFavorite({ id, title, image, imageType, userId }) {
  const { data: favorites, error } = await supabase
    .from("favorites")
    .insert({ id, title, image, imageType, userId });

  if (error) throw new Error("Favorite could not be added.");

  return favorites;
}

export async function fetchFavorites(userId) {
  const { data: favorites, error } = await supabase
    .from("favorites")
    .select("*")
    .eq("userId", userId);

  if (error) throw new Error("Favorites could not be fetched.");

  return favorites;
}

export async function deleteFavorite(id) {
  const { data: favorite, error } = await supabase
    .from("favorites")
    .delete()
    .eq("id", id);

  if (error) throw new Error("Favorite could not be deleted.");

  return favorite;
}
