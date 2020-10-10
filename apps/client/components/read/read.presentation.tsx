import * as React from 'react';

import * as MaterialUI from '@material-ui/core';

import * as SelectIds from './select-ids';
import * as SelectEntities from './select-entities';

import * as FormEntity from '~client/application/domains/form/entity';

// ===============================
// types
// ===============================
type Props = {
  updateActiveReactHookFormDevTool: (
    activeReactHookFormDevTool: FormEntity.activeReactHookFormDevTool
  ) => void;
};

// ===============================
// component
// ===============================
export const Component = (props: Props): React.ReactElement => {
  return (
    <>
      <MaterialUI.Box>
        <MaterialUI.Box display="flex" alignItems="flex-end">
          <MaterialUI.Typography variant="h3">selectIds</MaterialUI.Typography>
        </MaterialUI.Box>
        <MaterialUI.Typography variant="subtitle1">
          returns the state.ids array.
        </MaterialUI.Typography>
        <MaterialUI.Box marginTop={2}>
          <SelectIds.Component />
        </MaterialUI.Box>
      </MaterialUI.Box>

      <MaterialUI.Box marginTop={6}>
        <MaterialUI.Box display="flex" alignItems="flex-end">
          <MaterialUI.Typography variant="h3">
            selectEntities
          </MaterialUI.Typography>
        </MaterialUI.Box>
        <MaterialUI.Typography variant="subtitle1">
          returns the state.entities lookup table.
        </MaterialUI.Typography>
        <MaterialUI.Box marginTop={2}>
          <SelectEntities.Component />
        </MaterialUI.Box>
      </MaterialUI.Box>
    </>
  );
};

// ===============================
// styles
// ===============================
