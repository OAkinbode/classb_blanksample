import { createClient } from "@supabase/supabase-js";

const supabaseUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL ||
  "https://xnufwncqxhawlouyjizj.supabase.co";
const supabaseAnonKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhudWZ3bmNxeGhhd2xvdXlqaXpqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA5NTc2NzMsImV4cCI6MjA2NjUzMzY3M30.AMLpS0QWzYTsSqGxQ25mFpEdo0uYfkAAcMFkGqNHzVY";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
