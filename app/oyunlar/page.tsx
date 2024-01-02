import data from '@/app/data.json'
export default function Oyunlar() {
  return (
    <>
      <div className="flex justify-around py-12 px-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {data.games.map((game) => (
            <div
              key={game.id}
              className="card w-full bg-base-100 shadow-xl cursor-pointer hover:bg-primary hover:text-primary-content hover:scale-105 duration-150"
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
      </div>
    </>
  )
}
