import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>TESTING LIST | HOME</title>
        <meta name="keywords" content="Hello" />
      </Head>
      <div>
        <h1>HELLO</h1>
        <Link href="/list">
          <a>See My List</a>
        </Link>
      </div>
    </>
  );
}
