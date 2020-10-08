import * as Store from '~client/store';

import * as Slice from './slice';

const adapterSelector = Slice.adapter.getSelectors(
  (state: Store.RootState) => state.entities.users
);

export const membersSelector = adapterSelector.selectAll;
