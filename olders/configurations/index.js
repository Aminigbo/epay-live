let { createClient } = require('@supabase/supabase-js')

export const supabase = () => {
   return createClient('https://jdptlyjoqfaypjklxsgv.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpkcHRseWpvcWZheXBqa2x4c2d2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTk5OTc5NzMsImV4cCI6MTk3NTU3Mzk3M30.-DforKUKqaYALLO2l2EC6cqpjjhqOwEtJcbWNAYeDu8')
}


export const key = () => {
   return {
      SECRETE: '6d066956-4af5-4a19-99eb-d33f7d27a9de', 
      OTPAPIKEY : '345c4a1f06dc91d01ae427c5028290696e8e80b0038eb16ef43ca5f6fea755f9',
      OTPAPIUSERNAME : 'unboxAPP'
   }
}