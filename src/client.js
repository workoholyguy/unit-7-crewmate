import { createClient } from "@supabase/supabase-js";

let URL = import.meta.env.VITE_SUPABASE_URL;
let API_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!URL || !API_KEY) {
  console.error("Supabase URL or API Key is missing.");
}

export const supabase = createClient(URL, API_KEY);
