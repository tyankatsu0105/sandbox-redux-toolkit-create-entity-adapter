import * as ReduxToolkit from '@reduxjs/toolkit';

import { Status } from '~client/store/status';
import * as UsersEntity from '~client/application/domains/users/entity';

// ==================================================
// State
// ==================================================

export interface InitialState
  extends ReduxToolkit.EntityState<UsersEntity.User> {
  status: Status.PRISTINE;
}

export interface ValidState extends ReduxToolkit.EntityState<UsersEntity.User> {
  status: Exclude<Status, Status.PRISTINE>;
}

export type State = InitialState | ValidState;

// ==================================================
// Payload
// ==================================================

export type Payload = {
  action: {
    addUser: UsersEntity.User;
    addUsers: UsersEntity.User[];
    setUsers: UsersEntity.User[];
  };
  operation: {};
};
