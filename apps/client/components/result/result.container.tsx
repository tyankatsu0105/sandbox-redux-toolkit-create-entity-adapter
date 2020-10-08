import * as React from 'react';
import * as ReactRedux from 'react-redux';

import * as Presentaion from './result.presentation';

import { stateSelector } from '~client/store/selectors';

// ===============================
// types
// ===============================

// ===============================
// component
// ===============================
export const Component = (): React.ReactElement => {
  const state = ReactRedux.useSelector(stateSelector);

  return <Presentaion.Component state={state} />;
};

// ===============================
// styles
// ===============================
