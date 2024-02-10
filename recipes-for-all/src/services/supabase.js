import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://lngoiwmlymirxxvbjkkp.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxuZ29pd21seW1pcnh4dmJqa2twIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc1NDA5MDUsImV4cCI6MjAyMzExNjkwNX0.svELOqxgUFOc-WlQuolLqPe9OdGkD8J0vBigz1C5ESA';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
