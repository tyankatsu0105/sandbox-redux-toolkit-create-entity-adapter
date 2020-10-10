import * as Store from '~client/store';

import * as Slice from './slice';

const featureStateSelector = (state: Store.RootState) => state.entities.users;

const adapterSelector = Slice.adapter.getSelectors(featureStateSelector);

export const usersSelector = adapterSelector.selectAll;
