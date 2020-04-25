import React from "react";
import { Link } from "gatsby";
import SEO from "~/components/seo";
import { withAuth } from "~/features/auth";
// there must be at least 1 image in gatsby project
// https://github.com/gatsbyjs/gatsby/issues/15344#issuecomment-508242874
// import imageCardTop from "~/images/card-top.png";

export default withAuth(function ProfilePage() {
  return (
    <>
      <SEO title="Page two" />
      <div className="flex flex-col justify-center self-center max-w-screen-md">
        <h1 className="mt-10">Hi from the second page</h1>
        <p className="text-center text-xl">Welcome to page 2</p>
        <Link
          to="/"
          className="mt-5 mb-5 block text-center bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 rounded shadow-md">
          Go back to home
        </Link>
        <div className="max-w-sm rounded overflow-hidden shadow-lg mb-5 self-center">
          {/* <img
            className="w-full"
            src={imageCardTop}
            alt="Sunset in the mountains"
          /> */}
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <div className="px-6 py-4">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
              #photography
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
              #travel
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
              #winter
            </span>
          </div>
        </div>
      </div>
    </>
  );
});
