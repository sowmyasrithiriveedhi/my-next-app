"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const [electronicsOpen, setElectronicsOpen] = useState(false);
  const [furnitureOpen, setFurnitureOpen] = useState(false);
  const [booksOpen, setBooksOpen] = useState(false);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) setIsSidebarOpen(false);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const closeSidebar = () => {
    if (isMobile) setIsSidebarOpen(false);
  };

  return (
    <html lang="en">
      <body style={{ margin: 0, display: "flex", height: "100vh", fontFamily: "Arial" }}>
        
        {/* Sidebar */}
        <aside
          style={{
            width: "250px",
            background: "#c057c4",
            color: "white",
            padding: "20px",
            position: isMobile ? "fixed" : "static",
            top: 0,
            left: isMobile ? (isSidebarOpen ? "0" : "-100%") : "0",
            height: isMobile ? "100%" : "auto",
            transition: "left 0.3s ease",
            zIndex: 2000
          }}
        >
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
                <li><Link onClick={closeSidebar} href="/products/electronics/mobile" style={{ color: "white" }}>Mobiles</Link></li>
                <li><Link onClick={closeSidebar} href="/products/electronics/tv" style={{ color: "white" }}>TV</Link></li>
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
                <li><Link onClick={closeSidebar} href="/products/furniture/computer-tables" style={{ color: "white" }}>Computer Tables</Link></li>
                <li><Link onClick={closeSidebar} href="/products/furniture/dining-tables" style={{ color: "white" }}>Dining Tables</Link></li>
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
                <li><Link onClick={closeSidebar} href="/products/books/kids-books" style={{ color: "white" }}>Kids Books</Link></li>
                <li><Link onClick={closeSidebar} href="/products/books/story-books" style={{ color: "white" }}>Story Books</Link></li>
              </ul>
            )}
          </div>
        </aside>

        {/* Main */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <header
            style={{
              background: "#a33db3",
              color: "#ddd",
              padding: "20px",
              fontWeight: "bold",
              fontSize: "1.5rem",
              display: "flex",
              alignItems: "center"
            }}
          >
            {isMobile && (
              <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                style={{
                  fontSize: "24px",
                  marginRight: "10px",
                  background: "none",
                  border: "none",
                  color: "#ddd",
                  cursor: "pointer"
                }}
              >
                ☰
              </button>
            )}
            A to Z Company
          </header>

          <main style={{ flex: 1, padding: "20px", background: "#121212", color: "#ccc" }}>
  {children}
</main>

<footer
  style={{
    background: "#a33db3",
    color: "#ddd",
    textAlign: "center",
    padding: "10px",
    fontSize: "14px"
  }}
>
  © 2026 A to Z Company. All Rights Reserved.
</footer>

        </div>
      </body>
    </html>
  );
}
