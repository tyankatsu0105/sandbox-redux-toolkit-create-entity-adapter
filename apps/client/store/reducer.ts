import * as ReduxToolkit from '@reduxjs/toolkit';

export const createReducer = () => {
  const reducer = ReduxToolkit.combineReducers({});

  return { reducer };
};
