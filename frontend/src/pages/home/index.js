import React from "react";
import { Link } from "gatsby";
import Layout from "~/components/layout";
import SEO from "~/components/seo";

export default function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <section className="container max-w-sm">
        <h1 className="text-center mt-10">
          English knowledge right on your fingertips
        </h1>
        <p>Ready?) Let's get started!</p>

        <article className="max-w-sm mx-auto flex p-6 bg-white rounded-sm shadow-xl">
          <div className="flex-shrink-0">
            <div className="ml-6 pt-1">
              <h4 className="text-xl text-gray-900 leading-tight">Sign Up</h4>
              <p className="text-base text-gray-600 leading-normal">
                Here we go!
              </p>
            </div>
          </div>
        </article>

        <Link
          to="/page-2/"
          className="mt-5 mb-5 block text-center bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
          Go to page 2
        </Link>
      </section>
    </Layout>
  );
}
