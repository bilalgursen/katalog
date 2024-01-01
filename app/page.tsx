import Link from 'next/link'
export default function Home() {
  return (
    <>
      <h1 className="text-2xl">Merhaba Dünya</h1>
      <Link href={'/oyunlar'}>Oyunlara Git</Link>
    </>
  )
}
