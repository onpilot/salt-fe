import { useState } from 'react';
import ArrowLeft from '../assets/icons/arrow-left';
import ArrowRight from '../assets/icons/arrow-right';

const data = [
  {
    title: 'Who we are',
    subtitle: 'Technology Company',
  },
  {
    title: 'What we do',
    subtitle: 'Professional Brand Management',
  },
  {
    title: 'How we do',
    subtitle: 'Strategize, Design, Collaborate',
  },
  {
    title: 'Who we are',
    subtitle: 'Technology Company',
  },
];

function TextCarousel() {
  const [current, setCurrent] = useState(0);
  return (
    <div className="max-w-4xl container mx-auto">
      <div className="my-8 p-4 flex flex-col justify-between min-h-80 gap-10">
        <div>
          <h1 className="h1">{data[current].title}</h1>
          <span className="subtitle">{data[current].subtitle}</span>
          <p className="text-gray-600">
            Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium
            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
            inventore veritatis et quasi architecto beatae vitae dicta sunt
            explicabo.
          </p>
        </div>

        <div className="w-full flex justify-between">
          <div className="flex gap-2 items-center">
            <span className="text-2xl font-medium">0{current + 1}</span>
            <div className="flex text-gray-400">
              <span className="text-2xl">/</span>
              <span className="flex items-end">0{data.length - 1}</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => current > 0 && setCurrent(current - 1)}
              className="p-3 text-gray-400 hover:bg-blue-500 hover:text-white transition-colors"
            >
              <ArrowLeft />
            </button>
            <button
              type="button"
              onClick={() => current < 2 && setCurrent(current + 1)}
              className="p-3 text-gray-400 hover:bg-blue-500 hover:text-white transition-colors"
            >
              <ArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TextCarousel;
