import * as React from 'react';

import * as MaterialUI from '@material-ui/core';

import * as AddOne from './add-one';

// ===============================
// types
// ===============================
type Props = {};

// ===============================
// component
// ===============================
export const Component = (): React.ReactElement => {
  return (
    <MaterialUI.Box>
      <MaterialUI.Typography variant="h3">addOne</MaterialUI.Typography>
      <MaterialUI.Typography variant="subtitle1">
        accepts a single entity, and adds it.
      </MaterialUI.Typography>
      <MaterialUI.Box marginTop={2}>
        <AddOne.Component />
      </MaterialUI.Box>
    </MaterialUI.Box>
  );
};

// ===============================
// styles
// ===============================
