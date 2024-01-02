import Link from 'next/link'

export default function Pdf() {
  return (
    <>
      <main className="px-3 lg-px-16 py-8">
        <div className="flex flex-wrap justify-between">
          <div className="card basis-1/4 bg-gradient-to-r from-blue-700 to-blue-900 text-white">
            <div className="card-body">
              <h2 className="card-title">PS4 Liste 1</h2>
              <div className="card-actions justify-end">
                <Link className="btn " target="_blank" href={'/katalog/PS4'}>
                  Git
                </Link>
              </div>
            </div>
          </div>
          <div className="card basis-1/4 bg-gradient-to-r from-blue-700 to-blue-900 text-white">
            <div className="card-body">
              <h2 className="card-title">PS4 Liste 1</h2>
              <div className="card-actions justify-end">
                <Link className="btn " target="_blank" href={'/katalog/PS4'}>
                  Git
                </Link>
              </div>
            </div>
          </div>
          <div className="card basis-1/4 bg-gradient-to-r from-blue-700 to-blue-900 text-white">
            <div className="card-body">
              <h2 className="card-title">PS4 Liste 1</h2>
              <div className="card-actions justify-end">
                <Link className="btn " target="_blank" href={'/katalog/PS4'}>
                  Git
                </Link>
              </div>
            </div>
          </div>
          <div className="card basis-1/4 bg-gradient-to-r from-blue-700 to-blue-900 text-white">
            <div className="card-body">
              <h2 className="card-title">PS4 Liste 1</h2>
              <div className="card-actions justify-end">
                <Link className="btn " target="_blank" href={'/katalog/PS4'}>
                  Git
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
