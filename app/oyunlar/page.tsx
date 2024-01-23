"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import data from "@/app/data.json";
import Logo from "@/public/logo.png";

interface Game {
  id: number;
  name: string;
  location: string;
  short_description: string;
  type: string;
}

export default function Oyunlar() {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 9; // Adjust the page size according to your design

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  const paginatedGames: Game[] = data.games.slice(startIndex, endIndex);

  const totalPages = Math.ceil(data.games.length / pageSize);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  return (
    <>
      <main className="px-5">
        <section className="py-6">
          <div role="alert" className="alert shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="h-6 w-6 shrink-0 stroke-info"
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
