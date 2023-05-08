import hamburgerMenu from '../assets/hamburger.svg';

function Navbar() {
  return (
    <div className="w-full h-16 border-b flex items-center justify-end p-4 md:p-8">
      <div className="w-6 h-6 cursor-pointer">
        <img src={hamburgerMenu} alt="menu" />
      </div>
    </div>
  );
}

export default Navbar;
