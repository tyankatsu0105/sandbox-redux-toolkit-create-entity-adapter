import * as React from 'react';

import * as MaterialUI from '@material-ui/core';

import * as AddOne from './add-one';
import * as AddMany from './add-many';

// ===============================
// types
// ===============================
type Props = {};

// ===============================
// component
// ===============================
export const Component = (): React.ReactElement => {
  return (
    <>
      <MaterialUI.Box>
        <MaterialUI.Typography variant="h3">addOne</MaterialUI.Typography>
        <MaterialUI.Typography variant="subtitle1">
          accepts a single entity, and adds it.
        </MaterialUI.Typography>
        <MaterialUI.Box marginTop={2}>
          <AddOne.Component />
        </MaterialUI.Box>
      </MaterialUI.Box>

      <MaterialUI.Box marginTop={6}>
        <MaterialUI.Typography variant="h3">addMany</MaterialUI.Typography>
        <MaterialUI.Typography variant="subtitle1">
          accepts an array of entities or an object in the shape of Record
          &lt;EntityId, T&gt;, and adds them.
        </MaterialUI.Typography>
        <MaterialUI.Box marginTop={2}>
          <AddMany.Component />
        </MaterialUI.Box>
      </MaterialUI.Box>
    </>
  );
};

// ===============================
// styles
// ===============================
