import Account from "@components/Account";
import Auth from "@components/Auth";
import { supabase } from "@components/utils/supabaseClient";
import { useState, useEffect } from "react";

export default function Home() {
  const [session, setSession] = useState(null)

  useEffect(() => {
    setSession(supabase.auth.session())
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  return (
    <div className="container" style={{ padding: '50px 0 100px 0' }}>
      {!session ? <h1>No Session</h1> : <h1>Session Found</h1>}
      {!session ? <Auth /> : <Account key={session.user.id} session={session} />}
    </div>
  )
}
