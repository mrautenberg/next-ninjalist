import Head from "next/head";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>

      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ut
          aperiam optio earum molestias minima sunt sequi neque. Molestias sequi
          explicabo id aliquid deserunt iste hic a, ad nulla distinctio.
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
          assumenda deserunt temporibus ullam dicta mollitia eum molestias iste
          officiis impedit error nulla possimus facere facilis adipisci culpa ab
          in consequuntur?
        </p>
        <Link href="/ninjas">
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  );
}
