import * as React from 'react';
import * as ReduxToolkit from '@reduxjs/toolkit';
import styled from 'styled-components';

import * as MaterialUI from '@material-ui/core';

import * as UsersEntity from '~client/application/domains/users/entity';

import * as Store from '~client/store';

// ===============================
// types
// ===============================
type Props = {
  entities: ReturnType<
    ReduxToolkit.EntitySelectors<
      UsersEntity.User,
      Store.RootState
    >['selectEntities']
  >;
};

// ===============================
// component
// ===============================
export const Component = (props: Props): React.ReactElement => {
  return (
    <MaterialUI.Paper>
      <StyledPre>
        <MaterialUI.Typography variant="subtitle2">
          <code>{JSON.stringify(props.entities, null, 4)}</code>
        </MaterialUI.Typography>
      </StyledPre>
    </MaterialUI.Paper>
  );
};

// ===============================
// styles
// ===============================
const StyledPre = styled.pre`
  height: 300px;
  overflow: scroll;
`;
