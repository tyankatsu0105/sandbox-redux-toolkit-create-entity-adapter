import * as ReduxToolkit from '@reduxjs/toolkit';

import { Status } from '~client/store/status';
import * as UsersEntity from '~client/application/domains/users/entity';

import * as Constants from './constants';
import * as Types from './types';

// ==================================================
// Helpers
// ==================================================

export function assertStatus(
  state: Types.State
): asserts state is Types.ValidState {
  if (state.status === Status.PRISTINE) {
    throw new Error(
      'Invalid status. Cannot operate on reducer when status is Pristine.'
    );
  }
}

// ==================================================
// Setups
// ==================================================

export const adapter = ReduxToolkit.createEntityAdapter<UsersEntity.User>({
  selectId: (user) => user.id,
});

export const initialState: Types.InitialState = adapter.getInitialState({
  status: Status.PRISTINE,
});

const name = `${Constants.parentsKey}/${Constants.featureKey}`;

// ==================================================
// Slice
// ==================================================

const slice = ReduxToolkit.createSlice({
  name,
  initialState: initialState as Types.State,
  reducers: {
    addUser: (
      state,
      action: ReduxToolkit.PayloadAction<Types.Payload['action']['addUser']>
    ) => {
      state.status = Status.PRISTINE;

      state.status = Status.SUBMITTING;
      try {
        adapter.addOne(state, action.payload);
        state.status = Status.SUCCESS;
      } catch (error) {
        state.status = Status.INVALID;
      }
    },
  },
});

export const { actions, reducer } = slice;