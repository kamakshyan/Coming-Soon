import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex items-center justify-center h-screen ${inter.className}`}
    >
      <p>Coming Back Soon!</p>
    </main>
  )
}
