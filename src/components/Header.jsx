const Header = () => {
  return (
    <header className="w-full py-4 bg-gray-900 text-white flex items-center justify-between px-8 shadow-md">
      {/* Logo / Brand Name */}
      <h1 className="text-2xl font-bold font-poppins">My Website</h1>

      {/* Navigation */}
      <nav className="space-x-6 text-lg font-medium">
        <a href="#home" className="hover:text-purple-400 transition">Home</a>
        <a href="#about" className="hover:text-purple-400 transition">About</a>
        <a href="#contact" className="hover:text-purple-400 transition">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
