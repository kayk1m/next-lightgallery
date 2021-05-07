import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-zoom.css';

import React, { useState } from 'react';
import LightGallery from '@components/core/LightGallery';

const IMAGE_ARRAY = Array.from(
  { length: 9 },
  (_, idx) => `/sample/${idx + 1}.jpg`,
);

const IndexPage = () => {
  // const [show, setShow] = useState(false);

  return (
    <>
      <div className="mx-auto max-w-screen-lg text-2xl pt-4">
        <div>hello world</div>
        {IMAGE_ARRAY.map((_, idx) => (
          <button
            className="p-2 mx-2 bg-black text-white rounded-md"
            key={idx}
            onClick={() => {
              const elem = document.getElementById(
                `img-${idx + 1}`,
              ) as HTMLAnchorElement;
              elem?.click();
            }}
          >
            {idx + 1}
          </button>
        ))}
        <div className="hidden">
          <LightGallery
            images={IMAGE_ARRAY.map((val, idx) => ({
              id: `img-${idx + 1}`,
              src: {
                original: val,
                thumb: val,
              },
              alt: val,
            }))}
          />
        </div>
      </div>
    </>
  );
};

export default IndexPage;
