"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button, Input } from "@components"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"

export default function Home() {
  const router = useRouter()
  const supabase = createClientComponentClient()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSignUp = async () => {
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        emailRedirectTo: `${location.origin}/auth/callback`,
      },
    })
    router.refresh()
    // go to success, with back button to login?
  }

  const handleMagicLinkSignup = async () => {
    try {
      let { data, error } = await supabase.auth.signInWithOtp({
        email,
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <main className="overflow-hidden">
      <h1 className="font-inter">Signup</h1>
      <Input
        type="email"
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button onClick={handleSignUp}>Sign up</Button>
      <Button onClick={handleMagicLinkSignup}>Sign up using Magic Link</Button>
    </main>
  )
}
