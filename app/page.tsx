import Link from 'next/link'
export default function Home() {
  return (
    <>
      <div className="px-3 lg-px-16">
        <nav className="rounded-2xl navbar text-primary-content bg-orange-300 shadow-2xl mt-6">
          <div className="flex-1">
            <a className="btn btn-ghost text-xl">B&R Elektronik</a>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal">
              <li>
                <Link href={'/koltest'}>Kol Test</Link>
              </li>
              <li>
                <details>
                  <summary>Katalog</summary>
                  <ul className=" bg-orange-300 rounded-t-none z-10 shadow-lg !mt-0">
                    <li>
                      <Link href={'/oyunlar'}>Oyunlar</Link>
                    </li>
                    <li>
                      <a>Konsollar</a>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <main className="px-3 lg-px-16 py-8">
        <div className="mockup-browser border bg-base-300">
          <div className="mockup-browser-toolbar">
            <div className="input">https://brelektronik.business.site/</div>
          </div>
          <div className="flex justify-center bg-base-200">
            <iframe
              name="businessSite"
              src="https://brelektronik.business.site/"
              className="h-screen w-full"
            ></iframe>
          </div>
        </div>
      </main>
    </>
  )
}
