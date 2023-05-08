import illustration from '../assets/img/illustration.svg';

const data = [
  {
    id: 0,
    title: 'Dedication',
    description:
      'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat.',
  },
  {
    id: 1,
    title: 'Intellectual Honesty',
    description:
      'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat.',
  },
  {
    id: 2,
    title: 'Curiosity',
    description:
      'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat.',
  },
];

function Values() {
  return (
    <div className="max-w-4xl container mx-auto">
      <div className="mt-8 mb-2 p-4 flex flex-col justify-between min-h-80 gap-10">
        <div>
          <h1 className="h1 text-blue-500">Our Core Values</h1>
          <div className="flex flex-col gap-2">
            <p className="text-gray-600">
              Ridiculus laoreet libero pretium et, sit vel elementum convallis
              fames. Sit suspendisse etiam eget egestas. Aliquet odio et lectus
              etiam sit.
            </p>
            <p className="text-gray-600">
              In mauris rutrum ac ut volutpat, ornare nibh diam. Montes, vitae,
              nec amet enim.
            </p>
          </div>
        </div>
      </div>

      <div className="p-4 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((e) => {
          return (
            <li key={e.id}>
              <div className="flex gap-2">
                <div className="w-8 h-8 grid place-items-center">
                  <span className="w-[20px] h-[2px] bg-gray-400" />
                </div>
                <h3 className="h3">{e.title}</h3>
              </div>
              <p className="text-gray-600 pl-10">{e.description}</p>
            </li>
          );
        })}
      </div>

      <div className="w-full grid place-items-center my-8">
        <img
          className="bg-center"
          src={illustration}
          alt="worker illustration"
        />
      </div>
    </div>
  );
}

export default Values;
