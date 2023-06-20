"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button, Input } from "@components"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"

export default function Login() {
  const [email, setEmail] = useState("minghao_3728@hotmail.com")
  const [password, setPassword] = useState("Test1234")
  const router = useRouter()
  const supabase = createClientComponentClient()

  const handleSignUp = async () => {
    await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${location.origin}/auth/callback`,
      },
    })
    router.refresh()
  }

  const handleSignIn = async () => {
    await supabase.auth.signInWithPassword({
      email,
      password,
    })
    router.refresh()
  }

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.refresh()
  }

  const handleMagicLink = async () => {
    try {
      let { data, error } = await supabase.auth.signInWithOtp({
        email,
      })
    } catch (error) {
      console.log(error)
    }
  }

  const onAuthStateChange = async () => {
    try {
      const { data } = await supabase.auth.getUser()
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => onAuthStateChange(), [])

  return (
    <>
      <Input
        name="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <Input
        type="password"
        name="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <Button onClick={handleSignIn}>Sign in</Button>
      <Button onClick={handleSignOut}>Sign out</Button>
      <Link href="/auth/signup">
        <Button onClick={handleSignUp}>Sign up</Button>
      </Link>
      <div>
        <Input
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <Button onClick={handleMagicLink}>Magic Link</Button>
      </div>
    </>
  )
}
