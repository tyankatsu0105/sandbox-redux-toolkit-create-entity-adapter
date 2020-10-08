import * as ReduxToolkit from '@reduxjs/toolkit';

import * as Entities from './entities';

export const createReducer = () => {
  const reducer = ReduxToolkit.combineReducers({
    [Entities.featureKey]: Entities.reducer,
  });

  return { reducer };
};
