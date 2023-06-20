import { cookies } from "next/headers"
import { NextResponse } from "next/server"
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs"

export async function GET(request: Request) {
  console.log("GET")
  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get("code")

  console.log(code)
  if (code) {
    const supabase = createRouteHandlerClient({ cookies })
    await supabase.auth.exchangeCodeForSession(code)
  }
  console.log(requestUrl)

  return NextResponse.redirect(requestUrl.origin)
}
