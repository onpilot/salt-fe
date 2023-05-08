function Footer() {
  return (
    <div className="w-full bg-blue-950 text-white text-center px-2 pt-4 pb-8 md:pt-8 md:pb-16 flex flex-col gap-8 justify-center items-center">
      <img className="h-10 grayscale" src="logo.svg" alt="building" />
      <p className="text-sm">
        Jl. Lembong No 8 Kel. Braga Kec. Sumur Bandung, Kota Bandung, Jawa Barat
      </p>

      <ul className="flex gap-4 md:gap-8 flex-col md:flex-row">
        <li className="cursor-pointer hover:underline">Who We Are</li>
        <li className="cursor-pointer hover:underline">Our Values</li>
        <li className="cursor-pointer hover:underline">The Perks</li>
      </ul>
    </div>
  );
}

export default Footer;
