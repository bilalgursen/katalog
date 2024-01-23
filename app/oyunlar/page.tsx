"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import data from "@/app/data.json";
import Logo from "@/public/logo.png";
import { FaGamepad } from "react-icons/fa6";
import { ImFilter } from "react-icons/im";
import { PiTestTubeDuotone } from "react-icons/pi";
import { BsDatabaseFillGear } from "react-icons/bs";
interface Game {
  id: number;
  name: string;
  location: string;
  short_description: string;
  type: string;
}

export default function Oyunlar() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const pageSize = 15; // Adjust the page size according to your design

  const filteredGames: Game[] = data.games
    .filter((game) =>
      game.name.toLowerCase().includes(searchQuery.toLowerCase()),
    )
    .filter((game) => (selectedType ? game.type === selectedType : true))
    .filter((game) =>
      selectedLocation ? game.location === selectedLocation : true,
    );

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  const paginatedGames: Game[] = filteredGames.slice(startIndex, endIndex);

  const totalPages = Math.ceil(filteredGames.length / pageSize);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1);
  };

  const handleTypeChange = (type: string) => {
    setSelectedType(type);
    setCurrentPage(1);
  };
  const handleLocationChange = (location: string) => {
    setSelectedLocation(location);
    setCurrentPage(1);
  };
  return (
    <>
      <main className="px-5">
        <section className="py-2">
          <div role="alert" className="alert gap-0 shadow-sm sm:gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="hidden h-6 w-6 shrink-0 stroke-info sm:flex"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <div>
              <h3 className="flex items-center justify-start gap-1 font-bold ">
                Deneysel <PiTestTubeDuotone className="text-warning" />
              </h3>
              <div className="text-xs">
                Merhaba değerli kullanıcı bu kısım henüz tamamlanmış değil...
              </div>
            </div>
            <Image
              alt="Logo"
              className="order-first  w-10 animate-pulse place-self-end sm:order-none sm:place-self-auto"
              src={Logo}
            />
          </div>
        </section>
        <section className="flex flex-col items-center justify-around pb-12 ">
          {/* Search and Type Input */}
          <div className="mb-7 flex w-full flex-col items-center justify-center gap-3 sm:flex-row">
            <label className="form-control w-full max-w-xs">
              <div className="label flex-col justify-start gap-2 sm:flex-row">
                <FaGamepad />
                <span className="text-xs sm:label-text sm:text-xs">
                  Hangi oyuna baktın ?
                </span>
              </div>
              <input
                type="text"
                placeholder="Oyun adı gir.."
                value={searchQuery}
                onChange={handleSearchChange}
                className="input input-bordered w-full max-w-xs"
              />
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label flex flex-col items-center justify-start gap-1 sm:flex-row ">
                <ImFilter />
                <span className="text-xs sm:label-text">
                  Ne tarz oyun seversin ?
                </span>
              </div>
              <select
                value={selectedType}
                onChange={(e) => handleTypeChange(e.target.value)}
                className="select select-bordered"
              >
                <option value="" defaultValue="">
                  Tüm Kategoriler
                </option>
                {/* Extract unique types from the data */}
                {[...new Set(data.games.map((game) => game.type))].map(
                  (type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ),
                )}
              </select>
            </label>
            <label className="form-control order-first max-w-xs sm:order-none">
              <div className="label flex flex-col items-center justify-start gap-1 sm:flex-row ">
                <BsDatabaseFillGear />
              </div>
              <select
                value={selectedLocation}
                onChange={(e) => handleLocationChange(e.target.value)}
                className="select select-bordered"
              >
                <option value="" defaultValue="">
                  Disk
                </option>
                {/* Extract unique locations from the data */}
                {[...new Set(data.games.map((game) => game.location))].map(
                  (location) => (
                    <option key={location} value={location}>
                      {location}
                    </option>
                  ),
                )}
              </select>
            </label>
          </div>
          {/* İçerik */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {paginatedGames.map((game) => (
              <div
                key={game.id}
                className="card glass w-full cursor-pointer bg-base-100 shadow-xl duration-150 hover:scale-105 hover:bg-primary hover:text-primary-content"
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

        {/* Pagination Controls */}
        <div className="my-4 flex justify-center">
          <div className="join">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
              if (
                // Show the first 2 pages
                page <= 2 ||
                // Show the last 2 pages
                page > totalPages - 2 ||
                // Show 5 pages around the current page
                (page >= currentPage - 2 && page <= currentPage + 2)
              ) {
                return (
                  <button
                    key={page}
                    className={`btn join-item ${
                      page === currentPage ? "btn-active" : ""
                    }`}
                    onClick={() => handlePageChange(page)}
                  >
                    {page}
                  </button>
                );
              } else if (
                // Show ellipsis for skipped pages
                (page === 3 && currentPage > 5) ||
                (page === totalPages - 2 && currentPage < totalPages - 4)
              ) {
                return (
                  <button
                    key={page}
                    className="btn btn-disabled join-item"
                    disabled
                  >
                    ...
                  </button>
                );
              }
              return null;
            })}
          </div>
        </div>
      </main>
    </>
  );
}
