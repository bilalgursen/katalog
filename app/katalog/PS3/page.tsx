import Link from 'next/link'

export default function Page() {
  return (
    <>
      <main className="px-6 lg-px-16 py-8">
        <object
          data="/PS4.pdf"
          type="application/pdf"
          width="100%"
          height="600px"
        >
          <p>
            PDF dosyasını görüntüleyemiyorsanız,{' '}
            <Link className="btn" href={'/PS3.pdf'}>
              buradan indirebilirsiniz.
            </Link>
          </p>
        </object>
      </main>
    </>
  )
}
