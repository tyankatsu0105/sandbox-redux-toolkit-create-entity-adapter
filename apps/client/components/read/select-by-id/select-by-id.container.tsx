import * as React from 'react';
import * as ReactRedux from 'react-redux';
import * as Store from '~client/store';

import * as ReactHookForm from 'react-hook-form';
import * as ReactHookFormDevTool from '@hookform/devtools/dist/index.cjs.development.js';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import * as EntitiesUsers from '~client/store/entities/users';
import * as UsersEntity from '~client/application/domains/users/entity';
import * as FormEntity from '~client/application/domains/form/entity';

import * as UIForm from '~client/store/ui/form';

import * as Presentation from './select-by-id.presentation';

// ===============================
// types
// ===============================

// ===============================
// schema
// ===============================
const schema = yup.object().shape<UsersEntity.FormData['selectId']>({
  id: yup.number().integer().required(),
});

// ===============================
// component
// ===============================
export const Component = (props): React.ReactElement => {
  const dispatch = ReactRedux.useDispatch();

  const activeReactHookFormDevTool = ReactRedux.useSelector(
    UIForm.activeReactHookFormDevToolSelector
  );

  const hookFormMethods = ReactHookForm.useForm<
    UsersEntity.FormData['selectId']
  >({
    resolver: yupResolver(schema),
  });

  const onSubmit = hookFormMethods.handleSubmit((data) => {
    dispatch(EntitiesUsers.actions.selectId(data.id));
  });

  const selectedId = Store.useSelector(EntitiesUsers.selectedIdSelector);
  const entityByID = Store.useSelector((state) =>
    EntitiesUsers.entityByIDSelector(state, selectedId)
  );

  const ids = ReactRedux.useSelector(EntitiesUsers.idsSelector);

  return (
    <>
      <Presentation.Component
        onSubmit={onSubmit}
        hookFormMethods={hookFormMethods}
        entityByID={entityByID}
        ids={ids}
      />
      {activeReactHookFormDevTool ===
        FormEntity.activeReactHookFormDevTool.SelectById && (
        <ReactHookFormDevTool.DevTool control={hookFormMethods.control} />
      )}
    </>
  );
};

// ===============================
// styles
// ===============================
