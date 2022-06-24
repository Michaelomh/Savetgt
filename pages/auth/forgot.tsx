import { supabase } from "utils/supabaseClient";
import { useState, useEffect } from "react";
import Auth from "@components/auth/Auth";
import Layout from "@components/common/Layout/Layout";

export default function Home() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    setSession(supabase.auth.session());
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return (
    <Layout>
      <div className="container" style={{ padding: "50px 0 100px 0" }}>
        <Auth />
      </div>
    </Layout>
  );
}
