export default function Home() {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center p-4 sm:p-6">
      {/* Logo */}
      <div className="cursor-pointer mb-4 sm:mb-0">
        <img
          src="https://saifurrehman.info/_next/image?url=%2Fimages%2Flogo.png&w=64&q=75"
          alt="Logo"
          className="w-12 h-12 sm:w-16 sm:h-16"
        />
      </div>

      {/* Navigation */}
      <nav className="w-full sm:w-auto">
        <ul className="flex flex-col sm:flex-row justify-center sm:justify-end items-center gap-4 sm:gap-12 cursor-pointer">
          <li className="text-lg sm:text-xl font-bold rounded-md hover:text-green-500 transition-colors duration-300">
            Home
          </li>
          <li className="text-lg sm:text-xl font-bold rounded-md hover:text-green-500 transition-colors duration-300">
            About
          </li>
          <li className="text-lg sm:text-xl font-bold rounded-md hover:text-green-500 transition-colors duration-300">
            Services
          </li>
          <li className="text-lg sm:text-xl font-bold rounded-md hover:text-green-500 transition-colors duration-300 sm:pr-7">
            Contact
          </li>
          <li>
            <a href="https://wa.me/03171060882" target="_blank" rel="noopener noreferrer">
              <button className="relative flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 w-32 sm:w-44 h-10 sm:h-12 border-2 border-green-500 text-green-500 font-bold rounded-full transition-all duration-300 hover:bg-green-500 hover:text-black">
                <span className="z-10 transition-all duration-300">Let's Talk</span>
                <span className="absolute right-2 sm:right-3 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-black flex items-center justify-center opacity-0 transition-all duration-300 hover:opacity-100">
                  <img
                    src="/app/public/icon.svg"
                    alt="arrow"
                    className="w-3 h-3 sm:w-4 sm:h-4 text-green-500"
                  />
                </span>
              </button>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}