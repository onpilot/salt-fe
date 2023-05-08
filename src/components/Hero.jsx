function Hero() {
  return (
    <div className="w-full">
      <img
        className="w-full aspect-video"
        src="/src/assets/img/hero.png"
        alt="building"
      />

      <div className="relative">
        <div className="triangle-bottom-left absolute bottom-0 left-0 z-10" />
        <div className="triangle-bottom-right absolute bottom-0 right-0" />
      </div>

      <div className="w-full flex justify-center text-white bg-blue-400">
        <div className="max-w-lg p-4 mb-16">
          <h1 className="h1">Discover Your Wonder</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, nemo
            asperiores itaque recusandae sint eius ut fugiat maxime accusamus
            reprehenderit veritatis exercitationem consequatur alias corporis
            debitis tempora repellat quas minus!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
