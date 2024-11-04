import { createClient } from "@supabase/supabase-js";
const URL = "https://ieqtzwpbivaqaajswfkv.supabase.co";
const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImllcXR6d3BiaXZhcWFhanN3Zmt2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA2NjU5ODgsImV4cCI6MjA0NjI0MTk4OH0.8sv1OvH_wJTKJtprkzNEwp5ud9Dgw8jX1Wo-36ehb50";

//   VITE_SUPABASE_URL=https://ieqtzwpbivaqaajswfkv.supabase.co
//   VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImllcXR6d3BiaXZhcWFhanN3Zmt2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA2NjU5ODgsImV4cCI6MjA0NjI0MTk4OH0.8sv1OvH_wJTKJtprkzNEwp5ud9Dgw8jX1Wo-36ehb50

export const supabase = createClient(URL, API_KEY);
