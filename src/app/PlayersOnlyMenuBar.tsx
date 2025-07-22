import React from "react";

// SVG logo based on the image
const PlayersOnlyLogo = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" className="mr-3" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="24" r="20" stroke="white" strokeWidth="4"/>
    <path d="M24 38V24C24 21.7909 22.2091 20 20 20C17.7909 20 16 21.7909 16 24C16 26.2091 17.7909 28 20 28C20.5523 28 21 28.4477 21 29V38" stroke="white" strokeWidth="4"/>
  </svg>
);

const menuItems = [
  { name: "Features", hasDropdown: true },
  { name: "Insights" },
  { name: "Solutions", hasDropdown: true },
  { name: "News" },
];

export default function PlayersOnlyMenuBar() {
  return (
    <nav className="w-full bg-black flex items-center px-6 py-3 min-h-[80px]">
      {/* Logo & Brand */}
      <div className="flex items-center">
        <PlayersOnlyLogo />
        <span className="text-white font-extrabold text-2xl tracking-wider">PLAYERSONLY</span>
      </div>
      {/* Menu */}
      <ul className="flex items-center gap-12 ml-16">
        {menuItems.map((item, idx) => (
          <li key={item.name} className="flex items-center">
            <span className="text-white font-bold text-xl flex items-center">
              {item.name}
              {item.hasDropdown && (
                <svg
                  className="ml-2"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M6 8L10 12L14 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </span>
          </li>
        ))}
      </ul>
      {/* Spacer */}
      <div className="flex-1" />
      {/* Book a Demo */}
      <button
        className="bg-white text-black font-normal text-2xl rounded-xl px-8 py-3 shadow-none hover:bg-gray-100 transition"
        style={{ fontFamily: "Inter, sans-serif" }}
      >
        Book a Demo
      </button>
    </nav>
  );
}