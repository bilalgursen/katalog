import data from '@/app/data.json'
import Logo from '@/public/logo.png'
import Image from 'next/image'

export default function Oyunlar() {
  return (
    <>
      <main className="px-5">
        <section className="py-6">
          <div role="alert" className="alert shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="stroke-info shrink-0 w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <div>
              <h3 className="font-bold">Henüz Geliştiriliyor!</h3>
              <div className="text-xs">
                Merhaba değerli kullanıcı bu kısım henüz tamamlanmış değil...
              </div>
            </div>
            <Image alt="Logo" className="w-10 animate-pulse" src={Logo} />
          </div>
        </section>
        <section className="flex justify-around pb-12 ">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {data.games.map((game) => (
              <div
                key={game.id}
                className="card glass w-full bg-base-100 shadow-xl cursor-pointer hover:bg-primary hover:text-primary-content hover:scale-105 duration-150"
              >
                <div className="card-body">
                  <h2 className="card-title">
                    {game.name}
                    <div className="badge badge-secondary">{game.location}</div>
                  </h2>
                  <p>{game.short_description}</p>
                  <div className="card-actions justify-end">
                    <div className="badge badge-outline">{game.type}</div>
                    <div className="badge badge-outline">PS4</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  )
}
