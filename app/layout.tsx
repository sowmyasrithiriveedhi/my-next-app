"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const [electronicsOpen, setElectronicsOpen] = useState(false);
  const [furnitureOpen, setFurnitureOpen] = useState(false);
  const [booksOpen, setBooksOpen] = useState(false);

  return (
    <html lang="en">
      <body style={{ margin: 0, display: "flex", height: "100vh", fontFamily: "Arial" }}>
        {/* Sidebar */}
        <aside style={{ width: "250px", background: "#c057c4", color: "white", padding: "20px" }}>
          <h2>Products</h2>

          {/* Electronics */}
          <div>
            <button
              style={{ width: "100%", textAlign: "left", background: "none", border: "none", color: "white", padding: "5px", cursor: "pointer" }}
              onClick={() => setElectronicsOpen(!electronicsOpen)}
            >
              Electronics {electronicsOpen ? "▲" : "▼"}
            </button>
            {electronicsOpen && (
              <ul style={{ listStyle: "none", paddingLeft: "20px" }}>
                <li>
                  <Link href="/products/electronics/mobile" style={{ color: "white", textDecoration: "none" }}>Mobiles</Link>
                </li>
                <li>
                  <Link href="/products/electronics/tv" style={{ color: "white", textDecoration: "none" }}>TV</Link>
                </li>
              </ul>
            )}
          </div>

          {/* Furniture */}
          <div>
            <button
              style={{ width: "100%", textAlign: "left", background: "none", border: "none", color: "white", padding: "5px", cursor: "pointer" }}
              onClick={() => setFurnitureOpen(!furnitureOpen)}
            >
              Furniture {furnitureOpen ? "▲" : "▼"}
            </button>
            {furnitureOpen && (
              <ul style={{ listStyle: "none", paddingLeft: "20px" }}>
                <li>
                  <Link href="/products/furniture/computer-tables" style={{ color: "white", textDecoration: "none" }}>Computer Tables</Link>
                </li>
                <li>
                  <Link href="/products/furniture/dining-tables" style={{ color: "white", textDecoration: "none" }}>Dining Tables</Link>
                </li>
              </ul>
            )}
          </div>

          {/* Books */}
          <div>
            <button
              style={{ width: "100%", textAlign: "left", background: "none", border: "none", color: "white", padding: "5px", cursor: "pointer" }}
              onClick={() => setBooksOpen(!booksOpen)}
            >
              Books {booksOpen ? "▲" : "▼"}
            </button>
            {booksOpen && (
              <ul style={{ listStyle: "none", paddingLeft: "20px" }}>
                <li>
                  <Link href="/products/books/kids-books" style={{ color: "white", textDecoration: "none" }}>Kids Books</Link>
                </li>
                <li>
                  <Link href="/products/books/story-books" style={{ color: "white", textDecoration: "none" }}>Story Books</Link>
                </li>
              </ul>
            )}
          </div>
        </aside>

        {/* Main content */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <header style={{ background: "#a33db3", color: "#ddd", padding: "20px", fontWeight: "bold", fontSize: "1.5rem" }}>
            A to Z Company
          </header>
          <main style={{ flex: 1, padding: "20px", background: "#121212", color: "#ccc" }}>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
