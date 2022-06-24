import { supabase } from "@utils/supabaseClient";
import { useState, useEffect } from "react";
import { Input, Button, Box, Text } from "@chakra-ui/react";
import Layout from "@components/common/Layout/Layout";

export default function Home() {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(false);
  const [account, setAccount] = useState("minghao_3728@hotmail.com");
  const [password, setPassword] = useState("");

  useEffect(() => {
    setSession(supabase.auth.session());
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  const handleLogin = async (login, pw) => {
    console.log("trying to login");
    console.log(login, pw);

    try {
      setLoading(true);

      const { user, error, session } = await supabase.auth.signIn({
        email: login,
        password: pw,
      });
      console.log("managed to get the user settings");
      console.log(session);
      if (error) throw error;
    } catch (error) {
      alert(error.error_description || error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <div className="col-6 form-widget">
        <div>
          <Input type="email" placeholder="Your email" value={account} onChange={(e) => setAccount(e.target.value)} />
        </div>
        <div>
          <Input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button
          onClick={(e) => {
            e.preventDefault();
            handleLogin(account, password);
          }}
          disabled={loading}
        >
          <span>{loading ? "Loading" : "Login"}</span>
        </Button>

        <Box>
          <Text>Account: {account}</Text>
          <Text>Password: {password}</Text>
        </Box>
      </div>
    </Layout>
  );
}
