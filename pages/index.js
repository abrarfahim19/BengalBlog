import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, this is Abrar Fahim. Simple kid with simple step...</p>
        <br />
        <p>
          (This is a quick blog site - I’ll be building upon it.{" "}
          <a href="https://nextjs.org/learn">You can learn Next.js tutorial</a>
          .)
        </p>
      </section>
    </Layout>
  );
}
