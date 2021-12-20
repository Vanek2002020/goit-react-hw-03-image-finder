import React from 'react';
import s from 'components/ImageGallery/ImageGallery.module.css';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';

export default function AppLoader() {
  return (
    <Loader
      className={s.loader}
      type="TailSpin"
      color="#3f51b5"
      height={80}
      width={80}
      timeout={3000}
    />
  );
}
