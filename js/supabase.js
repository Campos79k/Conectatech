/*
  INTEGRAÇÃO OPCIONAL COM SUPABASE
  Para conectar ao PostgreSQL real:
  1. Crie um projeto no Supabase.
  2. Execute sql/schema.sql e sql/inserts.sql.
  3. Coloque a URL e a chave pública abaixo.
  4. Depois, substitua as fontes DEMO_* pelos SELECTs do Supabase.
  Nunca coloque a service_role key no frontend.
*/
const SUPABASE_URL = "";
const SUPABASE_PUBLISHABLE_KEY = "";
let db = null;
if(SUPABASE_URL && SUPABASE_PUBLISHABLE_KEY && window.supabase){db=window.supabase.createClient(SUPABASE_URL,SUPABASE_PUBLISHABLE_KEY)}