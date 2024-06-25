import { AsyncStorage } from '@react-native-async-storage/async-storage'
// supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://tuzfewdpenmjltueyufi.supabase.co'; // Substitua pela URL do seu projeto
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR1emZld2RwZW5tamx0dWV5dWZpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg5MDcxMzcsImV4cCI6MjAzNDQ4MzEzN30.HyUnqdy9NpbEVKWVQV_k2xL5ncabpnjXt2RqHhQdrY0'

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
        storage: AsyncStorage,
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: true
    }
});
