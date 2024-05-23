import React from "react";

const Navbar: React.FC = () => {
  // if (window.location.pathname === "/login") {
  if (window.location.pathname === "/jumpingtest/login") {
    return null;
  }

  return (
    <nav className="bg-custom-393939">
      <div className="mx-auto px-2 lg:px-8">
        <div className="relative flex h-16 items-center">
          <div className="flex flex-1 items-center sm:justify-start">
            <div className="flex items-center pr-2 sm:pr-0">
              <button
                type="button"
                className="items-center justify-center w-10 h-10 text-sm text-gray-500 rounded-lg hover:text-gray-100 focus:outline-none dark:text-gray-400"
                aria-controls="navbar-hamburger"
                aria-expanded="false"
              >
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
            </div>
            <div className="flex items-center pr-2 sm:pr-0">
              <button
                type="button"
                className="relative p-1 text-gray-400 hover:text-white focus:outline-none"
              >
                <svg
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                  />
                </svg>
              </button>
            </div>
          </div>
          <span
            className="text-white font-bold"
            onClick={() => (window.location.href = "/jumpingtest/login")}
          >
            JUMPING-HIGH
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
