import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import React from "react";
import Layout from "../../components/layout";

function firstPost() {
  return (
    <Layout>
      <Head>
        <title>First</title>
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() => {
          console.log("Loaded");
        }}
      />
      <h1>First Post</h1>
      <h2>
        <Link href="/">← Back to home</Link>
      </h2>
    </Layout>
  );
}

export default firstPost;
