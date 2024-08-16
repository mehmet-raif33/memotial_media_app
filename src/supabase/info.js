import { createClient } from '@supabase/supabase-js';

const url = process.env.NEXT_PUBLIC_SUPABASE_URL
const keyUrl = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

const supabase = createClient(url,keyUrl)

export default supabase;