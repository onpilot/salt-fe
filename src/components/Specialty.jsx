import Slider from 'react-slick';
import IcAccessories from '../assets/img/specialties/accessories';
import IcExhaust from '../assets/img/specialties/exhaust';
import IcSpeed from '../assets/img/specialties/speed';

const data = [
  {
    id: 0,
    comp: <IcSpeed />,
    title: 'Speed Improvement',
    description:
      'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat.',
  },
  {
    id: 1,
    comp: <IcAccessories />,
    title: 'Accessories',
    description:
      'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat.',
  },
  {
    id: 2,
    comp: <IcExhaust />,
    title: 'Exhaust',
    description:
      'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat.',
  },
];

function SimpleSlider() {
  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 1,
    speed: 500,
    // variableWidth: true,
  };

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Slider {...settings}>
      {data.map((e) => {
        return (
          // md:max-w-xs
          <div key={e.id} className="h-80 p-2">
            <div className="rounded-md border border-blue-400 p-2 shadow hover:shadow-lg">
              <h3 className="h3 h-16 grid place-items-center text-center">
                {e.title}
              </h3>
              <div className="grid place-content-center p-1 my-4">{e.comp}</div>
              <p className="text-gray-600 text-sm text-center">
                {e.description}
              </p>
            </div>
          </div>
        );
      })}
    </Slider>
  );
}

function Specialty() {
  return (
    <div className="bg-blue-400 md:p-8 sm:bg-white">
      <div className="max-w-4xl container mx-auto p-4">
        <div className="bg-white py-4">
          <div className="mt-8 mb-2 p-4 flex flex-col justify-between min-h-80 gap-10">
            <div className="px-4">
              <h3 className="h3 uppercase font-medium text-blue-500">
                Our Specialty
              </h3>
              <div className="flex flex-col gap-2">
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  euismod libero vel leo auctor, in venenatis nulla consequat.
                  Sed commodo nunc sit amet congue aliquam.
                </p>
              </div>
            </div>
          </div>

          <SimpleSlider />
        </div>
      </div>
    </div>
  );
}

export default Specialty;
