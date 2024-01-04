import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://uzoojjvokvqgomckhpkb.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV6b29qanZva3ZxZ29tY2tocGtiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQyMjI4NTgsImV4cCI6MjAxOTc5ODg1OH0.fByxQjwOfANSa29rxLuXN4ttO2kOYoJ5r_v-tJkmV6w";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
