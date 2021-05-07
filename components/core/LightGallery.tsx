import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-zoom.css';

import React from 'react';
import dynamic from 'next/dynamic';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

import { isMobile } from '@utils/bowser';

const LG = dynamic(() => import('lightgallery/react'), {
  ssr: false,
});

interface Props {
  images: {
    id: string;
    alt?: string;
    src: {
      original: string;
      thumb: string;
    };
  }[];
}

const LightGallery: React.FC<Props> = ({ images }) => {
  return (
    <LG
      download={false}
      isMobile={isMobile}
      closeOnTap
      plugins={[lgThumbnail, lgZoom]}
      mobileSettings={{
        controls: false,
        showCloseIcon: true,
        download: false,
      }}
    >
      {images.map(({ id, src, alt }) => (
        <a id={id} key={src.original} href={src.original}>
          <img draggable={false} src={src.thumb} alt={alt} />
        </a>
      ))}
    </LG>
  );
};

export default LightGallery;
