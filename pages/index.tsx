import Head from "next/head";
import Link from "next/link";

import Header from "@components/Header";
import Footer from "@components/Footer";
import Layout from "@components/Layout";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />

        <Layout title="Home | Next.js + TypeScript Example">
          <h1>Hello Next.js 👋</h1>
          <p>
            <Link href="/about">
              <a>About</a>
            </Link>
          </p>
        </Layout>
      </main>

      <Footer />
    </div>
  );
}
