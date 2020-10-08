import * as React from 'react';
import styled from 'styled-components';
import * as MaterialUI from '@material-ui/core';

import * as Store from '~client/store';

// ===============================
// types
// ===============================

type Props = {
  state: Store.RootState;
};
// ===============================
// component
// ===============================

export const Component = (props: Props): React.ReactElement => {
  return (
    <>
      <MaterialUI.Divider />
      <MaterialUI.Paper>
        <StyledPre>
          <MaterialUI.Typography variant="subtitle2">
            <code>{JSON.stringify(props.state, null, 4)}</code>
          </MaterialUI.Typography>
        </StyledPre>
      </MaterialUI.Paper>
    </>
  );
};

// ===============================
// styles
// ===============================
const StyledPre = styled.pre`
  height: 500px;
  overflow: scroll;
`;
