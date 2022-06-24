import { User } from "@supabase/supabase-js";
import { supabase } from "@utils/supabaseClient";
import { useState, useEffect } from "react";

export default function Account({ session }) {
  const [user, setUser] = useState<User>();
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState("");
  const [website, setWebsite] = useState("");
  const [password, setPassword] = useState("");
  const [emailLink, setEmailLink] = useState("");

  useEffect(() => {
    const userData = supabase.auth.user();
    setUser(userData);

    getProfile();
  }, [session]);

  async function getProfile() {
    try {
      setLoading(true);
      let { data, error, status } = await supabase
        .from("profiles")
        .select(`username, website, emailLink`)
        .eq("id", user.id)
        .single();

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setUsername(data.username);
        setWebsite(data.website);
        setEmailLink(data.emailLink);
      }
      let { data: users, error: usersError } = await supabase.from("users").select("email, id");
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  }

  async function updateProfile({ username, website, password }) {
    try {
      setLoading(true);
      const user = supabase.auth.user();

      if (password) {
        let { user, error } = await supabase.auth.update({ password: password });
        if (error) {
          throw error;
        }
      }

      if (username || website || emailLink) {
        const updates = {
          id: user.id,
          username,
          avatar_url: "",
          website,
          emailLink,
          updated_at: new Date(),
        };

        let { error } = await supabase.from("profiles").upsert(updates, {
          returning: "minimal", // Don't return the value after inserting
        });

        if (error) {
          throw error;
        }
      }
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="form-widget">
      <div>
        <label htmlFor="email">Email</label>
        <input id="email" type="text" value={session.user.email} disabled />
      </div>
      <div>
        <label htmlFor="username">Name</label>
        <input id="username" type="text" value={username || ""} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div>
        <label htmlFor="website">Website</label>
        <input id="website" type="website" value={website || ""} onChange={(e) => setWebsite(e.target.value)} />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input id="password" type="password" value={password || ""} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <div>
        <label htmlFor="link">Email account link</label>
        <input id="emailLink" type="text" value={emailLink || ""} onChange={(e) => setEmailLink(e.target.value)} />
      </div>

      <div>
        <button
          className="button block primary"
          onClick={() => updateProfile({ username, website, password })}
          disabled={loading}
        >
          {loading ? "Loading ..." : "Update"}
        </button>
      </div>

      <div>
        <button className="button block" onClick={() => supabase.auth.signOut()}>
          Sign Out
        </button>
      </div>
    </div>
  );
}
