import supabase from "./supabase";

export async function getSettings() {
  const { data: settings, error } = await supabase
    .from("settings")
    .select("*")
    .single();

  if (error) throw new Error("Error retrieving settings");

  return settings;
}

export async function updateSettings(settings) {
  const { data: updatedSettings, error } = await supabase
    .from("settings")
    .update(settings)
    .eq("id", 1)
    .single();
  if (error) throw new Error("Error updating settings");

  return updatedSettings;
}
