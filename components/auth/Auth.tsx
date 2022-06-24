import { Button, Input } from "@chakra-ui/react";
import { supabase } from "@utils/supabaseClient";
import { useState } from "react";

export default function Auth() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("minghao_3728@hotmail.com");

  const handleNewAccount = async (email) => {
    console.log(email);

    try {
      setLoading(true);
      const { user, error } = await supabase.auth.signIn({
        email: email,
      });
      if (error) throw error;
      alert("Check your email for the login link!");
    } catch (error) {
      alert(error.error_description || error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="row flex flex-center">
      <div className="col-6 form-widget">
        <h1 className="header">Supabase + Next.js</h1>
        <p className="description">Sign in via magic link with your email below</p>
        <div>
          <Input type="email" placeholder="Your email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <Button
          onClick={(e) => {
            e.preventDefault();
            handleNewAccount(email);
          }}
          disabled={loading}
        >
          <span>{loading ? "Loading" : "Send magic link"}</span>
        </Button>
      </div>
    </div>
  );
}
