import Link from "next/link";

export default function Katalog() {
  return (
    <>
      <main className="flex justify-around px-5 py-12">
        <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <div className="card glass w-full bg-blue-700 text-white shadow-xl">
            <div className="card-body">
              <h2 className="card-title text-5xl">PS4 Liste</h2>
              <div className="card-actions justify-end">
                <Link className="btn " href={"/katalog/PS4"}>
                  Kataloğa Git
                </Link>
              </div>
            </div>
          </div>
          <div className="card glass w-full bg-blue-700 text-white shadow-xl">
            <div className="card-body">
              <h2 className="card-title text-5xl">PS4 Liste 2</h2>
              <div className="card-actions justify-end">
                <Link className="btn " href={"/katalog/PS4-2"}>
                  Kataloğa Git
                </Link>
              </div>
            </div>
          </div>
          <div className="card glass w-full bg-red-700 text-white shadow-xl">
            <div className="card-body">
              <h2 className="card-title text-5xl">PS3 Liste</h2>
              <div className="card-actions justify-end">
                <Link className="btn " href={"/katalog/PS3"}>
                  Kataloğa Git
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
