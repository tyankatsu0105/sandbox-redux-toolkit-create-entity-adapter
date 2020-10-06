import * as React from 'react';
import styled from 'styled-components';

import * as MaterialUI from '@material-ui/core';

import * as Componnets from '~client/components';

// ===============================
// types
// ===============================

// ===============================
// component
// ===============================
export const Component = (): React.ReactElement => {
  const [isActiveTab, setIsActiveTab] = React.useState(0);

  const handleChangeActiveTab = React.useCallback((_, activeTab: number) => {
    setIsActiveTab(activeTab);
  }, []);

  return (
    <>
      <Componnets.Tab.Component
        isActiveTab={isActiveTab}
        handleChangeActiveTab={handleChangeActiveTab}
        tabItems={[{ label: 'a' }, { label: 'b' }, { label: 'c' }]}
      />
      <MaterialUI.Box marginTop={2}>
        <MaterialUI.Grid container spacing={1}>
          <MaterialUI.Grid item xs={6}>
            <MaterialUI.Box padding={2}>
              <Componnets.TabPanel.Component hidden={isActiveTab !== 0}>
                aaaaaaaaaaaaaaaaaa
              </Componnets.TabPanel.Component>
              <Componnets.TabPanel.Component hidden={isActiveTab !== 1}>
                bbbbbbbbbbbbbbbbbbb
              </Componnets.TabPanel.Component>
              <Componnets.TabPanel.Component hidden={isActiveTab !== 2}>
                ccccccccccccccccc
              </Componnets.TabPanel.Component>
            </MaterialUI.Box>
          </MaterialUI.Grid>
          <MaterialUI.Grid item xs={6}>
            <StyledCard>bbbbbbbb</StyledCard>
          </MaterialUI.Grid>
        </MaterialUI.Grid>
      </MaterialUI.Box>
    </>
  );
};

// ===============================
// styles
// ===============================

const StyledCard = styled(MaterialUI.Card)`
  padding: ${(props) => props.theme.spacing(2)}px;
`;
