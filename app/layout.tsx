import type { Metadata } from 'next'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'B&R Elektronik',
  description: 'Bilal Gürşen tarafından sevgi ile yazılmıştır.'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html data-theme="light" lang="tr">
      <body className={inter.className}>
        <div className="px-3 lg-px-16">
          <nav className="rounded-2xl navbar text-accent-content bg-primary shadow-2xl mt-6">
            <div className="flex-1">
              <Link className="btn btn-ghost text-xl" href={'/'}>
                B&R Elektronik
              </Link>
            </div>
            <div className="flex-none">
              <label className="flex cursor-pointer gap-2">
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
                  className="toggle theme-controller"
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
              <ul className="menu menu-horizontal">
                <li>
                  <Link href={'/koltest'}>Kol Test</Link>
                </li>
                <li>
                  <details>
                    <summary>Katalog</summary>
                    <ul className=" bg-primary rounded-t-none z-10 shadow-lg !mt-0">
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
        {children}
      </body>
    </html>
  )
}
