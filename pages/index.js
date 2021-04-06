import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>NextJS Example</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>NextJS rendering</h1>

        <p className={styles.description}>
          Chose one of the rendering methods below to see how they work.
        </p>

        <div className={styles.grid}>
          <Link href="/ssr">
            <a className={styles.card}>
              <h3>Server Side Rendering &rarr;</h3>
              <p>
                Pages are generated on each request and served to the client
                when ready.
              </p>
            </a>
          </Link>

          <Link href="/csr">
            <a className={styles.card}>
              <h3>Client Side Rendering &rarr;</h3>
              <p>
                Skeleton page is generated at build time and then the static
                HTML+CSS+JS files are served quickly to the client on each
                request, the client then fetches data in the browser and
                populates the content.
              </p>
            </a>
          </Link>

          <Link href="/ssg">
            <a className={styles.card}>
              <h3>Static Site Generation &rarr;</h3>
              <p>
                Pages are generated at build time and then the static
                HTML+CSS+JS files are served quickly to the client on each
                request.
              </p>
            </a>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
