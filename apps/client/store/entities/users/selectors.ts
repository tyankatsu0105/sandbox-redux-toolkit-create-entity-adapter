import * as Store from '~client/store';

import * as Slice from './slice';

import * as UsersEntity from '~client/application/domains/users/entity';

const featureStateSelector = (state: Store.RootState) => state.entities.users;

const adapterSelector = Slice.adapter.getSelectors(featureStateSelector);

export const idsSelector = adapterSelector.selectIds;
export const entitiesSelector = adapterSelector.selectEntities;
export const allSelector = adapterSelector.selectAll;
export const totalSelector = adapterSelector.selectTotal;

export const entityByIDSelector = (
  state: Store.RootState,
  id: UsersEntity.User['id']
) => {
  const entityByID = adapterSelector.selectById(state, id);

  return { entityByID };
};
