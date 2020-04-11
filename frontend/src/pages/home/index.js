import React from "react";
import { Link } from "gatsby";
import Layout from "~/components/layout";
import SEO from "~/components/seo";

export default function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <section className="container max-w-sm">
        <h1>English path</h1>
        <p>Welcome to your English learning beginning.</p>

        <article className="max-w-sm mx-auto flex p-6 bg-white rounded-lg shadow-xl">
          <div className="flex-shrink-0">
            <div className="ml-6 pt-1">
              <h4 className="text-xl text-gray-900 leading-tight">ChitChat</h4>
              <p className="text-base text-gray-600 leading-normal">
                You have a new message!
              </p>
            </div>
          </div>
        </article>
      </section>

      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  );
}
