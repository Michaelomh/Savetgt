import React, { ReactNode } from "react";
import Link from "next/link";
import Navigation from "../Navigation/Navigation";
import Head from "./Head";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => (
  <div>
    <Head />
    <header>
      <Navigation />
    </header>
    {children}
  </div>
);

export default Layout;
