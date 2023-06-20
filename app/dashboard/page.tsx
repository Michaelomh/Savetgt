"use client"

import { useEffect, useState } from "react"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"

export default function Dashboard() {
  const [countries, setCountries] = useState<any>()
  const supabase = createClientComponentClient()

  useEffect(() => {
    const getData = async () => {
      const { data } = await supabase.from("countries").select()
      setCountries(data)
    }

    getData()
  }, [])

  return countries ? (
    <pre>{JSON.stringify(countries, null, 2)}</pre>
  ) : (
    <p>Loading countries...</p>
  )
}
