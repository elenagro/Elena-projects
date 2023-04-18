import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://tqouuyeurdtmbicdumzc.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRxb3V1eWV1cmR0bWJpY2R1bXpjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODA3ODk1MTYsImV4cCI6MTk5NjM2NTUxNn0.e9lnjtkYaRRJrreMCHAudDNp4wWcA2bBmVs-ugchJg4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
