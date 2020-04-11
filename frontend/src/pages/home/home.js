import React from "react";
import { Link } from "gatsby";
import Layout from "~/components/layout";
import SEO from "~/components/seo";
import SignInForm from "./components/sign-in-form";

export default function HomePage() {
  return (
    <Layout>
      <SEO title="Home" />
      <section className="container max-w-sm">
        <h1 className="text-center mt-10">
          English knowledge right on your fingertips
        </h1>

        <p className="text-center text-xl">Ready? Let's get started!</p>

        <SignInForm />

        <Link
          to="/page-2/"
          className="mt-5 mb-5 block text-center bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 rounded shadow-md">
          Next
        </Link>
      </section>
    </Layout>
  );
}
