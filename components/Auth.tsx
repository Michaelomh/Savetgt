import { Button, Input } from '@chakra-ui/react'
import React, { useState } from 'react'
import { supabase } from "./utils/supabaseClient"

export default function Auth() {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('minghao_3728@hotmail.com')

  const handleLogin = async (email) => {
    console.log(email);
    
    try {
      setLoading(true)
      const { error } = await supabase.auth.signIn({ email })
      if (error) throw error
      alert('Check your email for the login link!')
    } catch (error) {
      alert(error.error_description || error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="row flex flex-center">
      <div className="col-6 form-widget">
        <h1 className="header">Supabase + Next.js</h1>
        <p className="description">Sign in via magic link with your email below</p>
        <div>
          <Input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
          <Button
            onClick={(e) => {
              e.preventDefault()
              handleLogin(email)
            }}
            disabled={loading}
          >
            <span>{loading ? 'Loading' : 'Send magic link'}</span>
          </Button>
      </div>
    </div>
  );
}