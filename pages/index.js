import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <h1>HELLO</h1>
      <Link href="/list">
        <a>See My List</a>
      </Link>
    </div>
  )
}
