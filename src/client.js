import { createClient } from '@supabase/supabase-js';

const URL = 'https://wawlqhjcpqshvyehqsgh.supabase.co'
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indhd2xxaGpjcHFzaHZ5ZWhxc2doIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM5MjA0ODYsImV4cCI6MjA3OTQ5NjQ4Nn0.WbZbjS-Nsk3QCa6dWGEK_NRaz78Vc3iDRiBCIO2oQ7c'

export const supabase = createClient(URL, API_KEY);