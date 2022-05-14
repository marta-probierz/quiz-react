import React from 'react';
import { BallTriangle } from 'react-loader-spinner';

import { Loading } from '../styles';

export const Loader = () => {
  return (
    <Loading>
      <BallTriangle color="#d9248f" height={80} width={80} />
    </Loading>
  );
};
