import { createClient } from "@supabase/supabase-js";
const API_KEY = import.meta.env.API_KEY;
const URL = "https://ieqtzwpbivaqaajswfkv.supabase.co";

export const supabase = createClient(URL, API_KEY);
