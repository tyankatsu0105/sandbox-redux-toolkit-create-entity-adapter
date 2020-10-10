import * as React from 'react';
import * as ReactRedux from 'react-redux';

import * as ReactHookForm from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import * as EntitiesUsers from '~client/store/entities/users';
import * as UsersEntity from '~client/application/domains/users/entity';

import * as Presentation from './add-one.presentation';

// ===============================
// types
// ===============================

// ===============================
// schema
// ===============================
const schema = yup.object().shape<UsersEntity.FormData['addOne']>({
  id: yup.number().integer().required(),
  name: yup.string().required(),
  age: yup.number().positive().integer().required(),
});

// ===============================
// component
// ===============================
export const Component: React.FC = (props) => {
  const dispatch = ReactRedux.useDispatch();
  const hookFormMethods = ReactHookForm.useForm<UsersEntity.FormData['addOne']>(
    {
      resolver: yupResolver(schema),
    }
  );

  const onSubmit = hookFormMethods.handleSubmit((data) => {
    dispatch(EntitiesUsers.actions.addUser(data));
  });

  return (
    <Presentation.Component
      onSubmit={onSubmit}
      hookFormMethods={hookFormMethods}
    />
  );
};

// ===============================
// styles
// ===============================
