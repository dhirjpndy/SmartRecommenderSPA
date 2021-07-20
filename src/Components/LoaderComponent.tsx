import React from 'react';
import { BounceLoader } from 'react-spinners';

import { css } from '@emotion/react';
import { PrimaryColorLocal } from './../Util/Theme';

const override = css`
  display: block;
  margin: 15% auto;
  border-color: red;
`;
function LoaderComponent() {
  return (
    <BounceLoader
      color={PrimaryColorLocal}
      speedMultiplier={0.1}
      size={130}
      css={override}
    />
  );
}

export default LoaderComponent;
