import Link from 'next/link'
export default function Home() {
  return (
    <>
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
