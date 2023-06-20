import NavbarAuth from "@components/pages/auth/Topbar/Topbar"

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="app">
      <NavbarAuth />
      {children}
    </main>
  )
}

export default AuthLayout
