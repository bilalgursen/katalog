import Link from 'next/link'

export default function Pdf() {
  return (
    <>
      <main className="px-3 lg-px-16 py-8">
        <object
          data="/PS4.pdf"
          type="application/pdf"
          width="100%"
          height="600px"
        >
          <p>
            PDF dosyasını görüntüleyemiyorsanız,{' '}
            <Link href={'/PS4.pdf'}>buradan indirebilirsiniz.</Link>
          </p>
        </object>
      </main>
    </>
  )
}
