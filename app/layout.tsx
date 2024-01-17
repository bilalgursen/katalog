import type { Metadata } from "next";
import Link from "next/link";
import Logo from "@/public/plus.png";
import Image from "next/image";
import { Inter } from "next/font/google";
import "./globals.css";
import Background from "@/public/bg.svg";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "B&R Elektronik",
  description: "Bilal Gürşen tarafından sevgi ile yazılmıştır.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html data-theme="light" lang="tr">
      <body className={`${inter.className} cool pt-6`}>
        <nav className="lg-px-16 px-3">
          <div className="navbar rounded-2xl bg-neutral text-neutral-content shadow-xl">
            <div className="flex-1">
              <Link className="btn btn-ghost text-xl" href={"/"}>
                <Image alt="Plus" src={Logo} className="w-10" />
                B&R Elektronik
              </Link>
            </div>
            <div className="flex-none">
              <label className="hidden cursor-pointer gap-2 md:flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="5" />
                  <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                </svg>
                <input
                  type="checkbox"
                  value="dark"
                  className="theme-controller toggle"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
              </label>

              <ul className="menu menu-horizontal items-center gap-1">
                <li className="hidden md:flex">
                  <Link href={"/koltest"}>Kol Test</Link>
                </li>

                <div className="dropdown">
                  <div tabIndex={0} role="button" className="btn btn-ghost">
                    <span className="font-normal">Menü</span>
                  </div>
                  <ul
                    tabIndex={0}
                    className="menu dropdown-content menu-sm -right-1 z-[1] rounded-box bg-neutral p-2 shadow"
                  >
                    <li>
                      <Link href={"/oyunlar"}>Oyunlar</Link>
                    </li>
                    <li>
                      <Link href={"/katalog"}>Kataloglar</Link>
                    </li>
                    <li className="flex md:hidden">
                      <Link href={"/koltest"}>Kol Test</Link>
                    </li>
                    <li>
                      <label className="flex cursor-pointer justify-center md:hidden">
                        <input
                          type="checkbox"
                          value="dark"
                          className="theme-controller toggle"
                        />
                      </label>
                    </li>
                  </ul>
                </div>
              </ul>
            </div>
          </div>
        </nav>
        <div className="min-h-screen">{children}</div>
        <footer className="footer footer-center bg-base-300 p-4 text-base-content">
          <p>Copyright © 2024 - Bilal Gürşen Tarafından ❤ ile yazılmıştır.</p>
        </footer>
      </body>
    </html>
  );
}
