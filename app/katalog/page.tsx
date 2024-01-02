import Link from 'next/link'

export default function Katalog() {
  return (
    <>
      <main className="flex justify-around py-12 px-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
          <div className="card w-full glass bg-blue-700 text-white shadow-xl">
            <div className="card-body">
              <h2 className="card-title text-5xl">PS4 Liste</h2>
              <div className="card-actions justify-end">
                <Link className="btn " target="_blank" href={'/katalog/PS4'}>
                  Kataloğa Git
                </Link>
              </div>
            </div>
          </div>
          <div className="card w-full glass bg-blue-700 text-white shadow-xl">
            <div className="card-body">
              <h2 className="card-title text-5xl">PS4 Liste 2</h2>
              <div className="card-actions justify-end">
                <Link className="btn " target="_blank" href={'/katalog/PS4-2'}>
                  Kataloğa Git
                </Link>
              </div>
            </div>
          </div>
          <div className="card w-full glass bg-red-700 text-white shadow-xl">
            <div className="card-body">
              <h2 className="card-title text-5xl">PS3 Liste</h2>
              <div className="card-actions justify-end">
                <Link className="btn " target="_blank" href={'/katalog/PS3'}>
                  Kataloğa Git
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
