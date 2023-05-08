import HamburgerMenu from '../assets/icons/hamburger';

function Navbar() {
  return (
    <div className="w-full h-16 border-b flex items-center justify-end p-4 md:p-8">
      <div className="w-6 h-6 cursor-pointer">
        <HamburgerMenu />
      </div>
    </div>
  );
}

export default Navbar;
