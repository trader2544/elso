// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://tpiyxznkrflkqrbhppjr.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRwaXl4em5rcmZsa3FyYmhwcGpyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkwNTIzNTQsImV4cCI6MjA2NDYyODM1NH0.iZZ8v30VJHev-39NBtMpl_k9wfVpLDGCn41iNlB4-JQ";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);